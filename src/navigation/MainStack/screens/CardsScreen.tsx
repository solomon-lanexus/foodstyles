import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
  FlatList,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Share,
} from "react-native";

import GradientBackground from "@foodstyles/components/common/GradientBackground";
import { COMMON_ICONS } from "@foodstyles/constants/AppIcons";
import { styles } from "./CardsScreen.styles";
import { BlurView } from "expo-blur";
import { useDispatch, useSelector } from "react-redux";
import {
  addCards,
  getCards,
  deleteCard,
  dupCard,
  shareData,
} from "@foodstyles/redux/actions/Cards";
import {
  currentCards,
  shareDataTransmuted,
} from "@foodstyles/redux/selectors/Cards";
import {
  CardsListData,
  CardsListDataWithMutation,
} from "@foodstyles/interfaces/mainInterfaces";
import { getRatio } from "@foodstyles/utils/styling/font";
import { useEffect, useRef, useState } from "react";
import {
  LIST_OF_RANDOM_WORDS,
  LIST_OF_RANDOM_WORDS_APPENDABLE,
} from "@foodstyles/constants/AppConstants";

export const CardsScreen = () => {
  const [blurIntensity, setBlurIntensity] = useState(0);
  const [cardData, setCardData] = useState<CardsListData[]>([
    {
      id: "",
      name: "",
    },
  ]);

  const [toggleBlur, settoggleBlur] = useState(false);
  const [activeData, setActiveData] = useState<CardsListDataWithMutation>({
    id: "",
    name: "",
    shareMutation: "",
  });
  const dispatch = useDispatch();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: activeData.name,
        url: "https://cards.foodstyles.com/" + activeData.shareMutation,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          Alert.alert("Shared this url:" + activeData.shareMutation);
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        Alert.alert("Sharing cancelled");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CardsListDataList: CardsListData[] = useSelector(currentCards);
  const shareDataTransmutedData: string = useSelector(shareDataTransmuted);

  useEffect(() => {
    dispatch(getCards());
  }, []);

  useEffect(() => {
    setCardData(CardsListDataList);
  }, [CardsListDataList]);

  useEffect(() => {
    let existingActiveData: CardsListDataWithMutation = activeData;
    existingActiveData.shareMutation = shareDataTransmutedData;
    setActiveData(existingActiveData);
  }, [shareDataTransmutedData]);

  return (
    <View>
      <GradientBackground>
        <ScrollView bounces={false}>
          <Image source={COMMON_ICONS.logo} style={styles.iconStyle} />
          <BlurView
            intensity={blurIntensity}
            tint="light"
            style={toggleBlur ? [StyleSheet.absoluteFill] : {}}
          ></BlurView>
          <FlatList
            style={styles.flatListViewHeight}
            data={cardData}
            renderItem={({ item }) => (
              <View style={styles.listContainerStyle}>
                <TouchableOpacity
                  onPress={() => {
                    setBlurIntensity(40);
                    settoggleBlur(true);

                    setActiveData({
                      id: item.id.toString(),
                      name: item.name,
                      shareMutation: "",
                    });

                    dispatch(dispatch(shareData(parseInt(item.id))));
                  }}
                >
                  <Text style={styles.itemStyle}>{item.name}</Text>
                  <Image
                    style={{
                      position: "absolute",
                      right: 0,
                      margin: 10 / getRatio(),
                    }}
                    source={COMMON_ICONS.options}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
        <BlurView
          intensity={blurIntensity}
          tint="light"
          style={toggleBlur ? [StyleSheet.absoluteFill] : {}}
        ></BlurView>

        <View style={styles.addNewContainerStyle}>
          <TouchableOpacity
            onPress={() => {
              dispatch(
                addCards(
                  LIST_OF_RANDOM_WORDS[
                    Math.floor(Math.random() * LIST_OF_RANDOM_WORDS.length)
                  ] +
                    " " +
                    LIST_OF_RANDOM_WORDS_APPENDABLE[
                      Math.floor(Math.random() * LIST_OF_RANDOM_WORDS.length)
                    ]
                )
              );

              Alert.alert("New Card added");
            }}
          >
            <Image
              style={{
                position: "absolute",
                left: 0,
                margin: 10 / getRatio(),
              }}
              source={COMMON_ICONS.add1x}
              resizeMode="contain"
            />
            <Text style={styles.addNewItem}>New Food style</Text>
          </TouchableOpacity>
        </View>
        <BlurView
          intensity={blurIntensity}
          tint="light"
          style={toggleBlur ? [StyleSheet.absoluteFill] : {}}
        ></BlurView>
        {toggleBlur && (
          <>
            <View style={[styles.modContainers]}>
              <Text style={styles.addNewItemActive}>{activeData.name}</Text>
              <TouchableOpacity
                onPress={() => {
                  setBlurIntensity(0);
                  settoggleBlur(false);
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    margin: 20 / getRatio(),
                  }}
                  source={COMMON_ICONS.close}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.modControlsShare]}>
              <TouchableOpacity onPress={() => onShare()}>
                <Text style={styles.modControlsText}>Share</Text>
                <Image
                  style={{
                    position: "absolute",
                    right: 0,
                    margin: 10 / getRatio(),
                  }}
                  source={COMMON_ICONS.share}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.modControlsDuplicate]}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(dupCard(parseInt(activeData.id)));
                  setBlurIntensity(0);
                  settoggleBlur(false);
                }}
              >
                <Text style={styles.modControlsText}>Duplicate</Text>
                <Image
                  style={{
                    position: "absolute",
                    right: 0,
                    margin: 10 / getRatio(),
                  }}
                  source={COMMON_ICONS.duplicate}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.modControlsDelete]}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    "Confirm delete",
                    "This will delete the Food Style and all its settings.",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "Delete",
                        onPress: () => {
                          dispatch(deleteCard(parseInt(activeData.id)));
                          Alert.alert("Successfully Deleted!");
                          setBlurIntensity(0);
                          settoggleBlur(false);
                        },
                      },
                    ]
                  );
                }}
              >
                <Text style={styles.modControlsText}>Delete</Text>
                <Image
                  style={{
                    position: "absolute",
                    right: 0,
                    margin: 10 / getRatio(),
                  }}
                  source={COMMON_ICONS.delete}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </GradientBackground>
    </View>
  );
};

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
import { getCards } from "@foodstyles/redux/actions/Cards";
import { currentCards } from "@foodstyles/redux/selectors/Cards";
import {
  CardsListData,
  CardsListDataWithMutation,
} from "@foodstyles/interfaces/mainInterfaces";
import { getRatio } from "@foodstyles/utils/styling/font";
import { useEffect, useRef, useState } from "react";

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
    name: "dummy",
    shareMutation: "",
  });
  const dispatch = useDispatch();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: activeData.name,
        url: activeData.shareMutation,
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

  useEffect(() => {
    dispatch(getCards());
  }, []);

  useEffect(() => {
    setCardData(CardsListDataList);
  }, [CardsListDataList]);

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
          <Image
            style={{
              position: "absolute",
              left: 0,
              margin: 15 / getRatio(),
            }}
            source={COMMON_ICONS.add1x}
            resizeMode="contain"
          />
          <Text style={styles.addNewItem}>New Food style</Text>
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
                  Alert.alert("close");
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 10,
                    margin: 15 / getRatio(),
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
                  Alert.alert("duplicate");
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
                  Alert.alert("delete");
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

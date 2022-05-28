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
} from "react-native";

import GradientBackground from "@foodstyles/components/common/GradientBackground";
import { COMMON_ICONS } from "@foodstyles/constants/AppIcons";
import { styles } from "./CardsScreen.styles";
import { BlurView } from "expo-blur";

import { useDispatch, useSelector } from "react-redux";
import { getCards } from "@foodstyles/redux/actions/Cards";
import { currentCards } from "@foodstyles/redux/selectors/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";
import { getRatio } from "@foodstyles/utils/styling/font";
import { useEffect, useRef } from "react";

export const CardsScreen = () => {
  const value = useRef(new Animated.Value(0));
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
  useEffect(() => {
    Animated.timing(value.current, { toValue: 100, duration: 5000 }).start();
  }, []);

  const dispatch = useDispatch();
  const CardsListDataList: CardsListData[] = useSelector(currentCards);
  const DATA = [
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "test",
    },
    {
      id: 3,
      name: "test",
    },
    {
      id: 4,
      name: "test",
    },
    {
      id: 5,
      name: "test",
    },
    {
      id: 6,
      name: "test",
    },
    {
      id: 7,
      name: "test",
    },
    {
      id: 8,
      name: "test",
    },
    {
      id: 9,
      name: "Very much eating that vegan thingie today",
    },
  ];
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <GradientBackground>
        <ScrollView bounces={false}>
          <Image source={COMMON_ICONS.logo} style={styles.iconStyle} />

          <FlatList
            style={styles.flatListViewHeight}
            data={DATA}
            renderItem={({ item }) => (
              <View style={styles.listContainerStyle}>
                <Text style={styles.itemStyle}>{item.name}</Text>
                <Image
                  style={{
                    position: "absolute",
                    right: 0,
                    margin: 25 / getRatio(),
                  }}
                  source={COMMON_ICONS.options}
                  resizeMode="contain"
                />
              </View>
            )}
          />
        </ScrollView>

        <View style={styles.addNewContainerStyle}>
          <AnimatedBlurView intensity={value.current}>
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
          </AnimatedBlurView>
        </View>
      </GradientBackground>
    </KeyboardAvoidingView>
  );
};

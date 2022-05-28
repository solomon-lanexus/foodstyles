import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import GradientBackground from "@foodstyles/components/common/GradientBackground";
import { COMMON_ICONS } from "@foodstyles/constants/AppIcons";
import { styles } from "./CardsScreen.styles";
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCards } from "@foodstyles/redux/actions/Cards";
import { currentCards } from "@foodstyles/redux/selectors/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";

export const CardsScreen = () => {
  const dispatch = useDispatch();
  const CardsListDataList: CardsListData[] = useSelector(currentCards);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <GradientBackground>
        <ScrollView bounces={false}>
          <View style={styles.scrollViewContainer}>
            <Image source={COMMON_ICONS.logo} style={styles.iconStyle} />
            <BorderView>
              <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
              </View>
            </BorderView>
          </View>
        </ScrollView>
      </GradientBackground>
    </KeyboardAvoidingView>
  );
};

function BorderView(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return <View style={styles.bgContainer}>{props.children}</View>;
}

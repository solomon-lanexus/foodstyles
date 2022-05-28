import { StackNavigationProp } from "@react-navigation/stack";

export enum AppStackPages {
  CardsScreen = "CardsScreen",
}

export type AppStackParamList = {
  [AppStackPages.CardsScreen]: undefined;
};

export type SplashScreenNavProps = StackNavigationProp<
  AppStackParamList,
  AppStackPages.CardsScreen
>;

import React from "react";
import { Image } from "react-native";
import { COMMON_ICONS } from "@foodstyles/constants/AppIcons";

export default function Logo() {
  return <Image source={COMMON_ICONS.logo} resizeMode="contain" />;
}

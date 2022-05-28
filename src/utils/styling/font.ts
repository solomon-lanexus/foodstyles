import { PixelRatio } from "react-native";

export const getRatio = (): number => {
  return PixelRatio.get() / 2;
};
export const getFontRatio = (): number => {
  return (PixelRatio.getFontScale() * PixelRatio.get()) / 1.98;
};

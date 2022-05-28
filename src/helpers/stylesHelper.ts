import {Dimensions, Platform} from 'react-native';

export const setZIndexForIOS = (index: number) => {
  // Setting Z index in parent view will make dropdown unclickable
  return Platform.OS === 'ios' ? {zIndex: index} : {};
};

export const setShadow = (
  color: string,
  opacity: number,
  radius: number,
  offset: {width: number; height: number},
) => {
  return {
    shadowColor: color,
    shadowOpacity: opacity,
    shadowRadius: radius,
    shadowOffset: {
      width: offset.width,
      height: offset.height,
    },
  };
};

export const appScreenHeight = Dimensions.get('screen').height;
export const appScreenWidth = Dimensions.get('screen').width;

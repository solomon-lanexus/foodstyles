import {StyleSheet, Dimensions} from 'react-native';

function adjustContainerTopMargin() {
  const screenHeight = Dimensions.get('screen').height;
  return screenHeight >= 812 ? screenHeight * 0.28 : screenHeight * 0.22;
}

function adjustIconTopMargin() {
  const screenHeight = Dimensions.get('screen').height;
  return screenHeight >= 812 ? screenHeight * 0.1 : screenHeight * 0.015;
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 45,
    width: '80%',
  },
  iconStyle: {
    left: 10,
    marginTop: adjustIconTopMargin(),
    width: 22,
    height: 26,
    position: 'absolute',
  },
  bgContainer: {
    marginTop: adjustContainerTopMargin(),
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderTopColor: '#5134FF',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginBottom: 0,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'ProximaNovaAltSemiBold',
    marginBottom: 15,
  },
  scrollViewContainer: {
    backgroundColor: 'transparent',
    minHeight: Dimensions.get('screen').height,
  },
});

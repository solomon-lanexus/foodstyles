import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    ProximaNovaAlt: require("@foodstyles/assets/fonts/ProximaNovaAlt-Regular.ttf"),
    ProximaNovaAltBold: require("@foodstyles/assets/fonts/ProximaNovaAlt-Bold.ttf"),
    ProximaNovaAltSemiBold: require("@foodstyles/assets/fonts/ProximaNovaAlt-SemiBold.ttf"),
    ProximaNovaAltCondSemiBold: require("@foodstyles/assets/fonts/ProximaNovaAltCond-SemiBold.ttf"),
  });
};

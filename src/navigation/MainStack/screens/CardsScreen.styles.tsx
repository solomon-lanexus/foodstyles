import { getFontRatio, getRatio } from "@foodstyles/utils/styling/font";
import { StyleSheet, Dimensions } from "react-native";

function adjustContainerTopMargin() {
  const screenHeight = Dimensions.get("screen").height;
  return screenHeight >= 812 ? screenHeight * 0.28 : screenHeight * 0.22;
}

function adjustIconTopMargin() {
  const screenHeight = Dimensions.get("screen").height;
  return screenHeight >= 812 ? screenHeight * 0.05 : screenHeight * 0.015;
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 0,
    width: "80%",
  },
  iconStyle: {
    left: 10,
    marginTop: adjustIconTopMargin(),
    width: 22,
    height: 26,
    position: "absolute",
  },
  bgContainer: {
    marginTop: adjustContainerTopMargin(),
    width: "90%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopColor: "#5134FF",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 0,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: "ProximaNovaAltSemiBold",
    marginBottom: 15,
  },
  flatListViewHeight: {
    backgroundColor: "transparent",
    top: 100,
    height: Dimensions.get("screen").height - 200,
  },

  listContainerStyle: {
    shadowColor: "#b0b0b0",
    shadowRadius: 7,
    shadowOpacity: 0.5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  itemStyle: {
    fontSize: 18 * getFontRatio(),
    lineHeight: 22,
    padding: 10,
    fontFamily: "ProximaNovaAltBold",
    maxWidth: 300 / getRatio(),
  },

  addNewContainerStyle: {
    shadowColor: "#b0b0b0",
    shadowRadius: 7,
    shadowOpacity: 0.5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 5,
    marginHorizontal: 16,
    marginBottom: 20,
  },

  addNewItem: {
    marginLeft: 40,
    fontSize: 18 * getFontRatio(),
    lineHeight: 18,
    padding: 20,
    fontFamily: "ProximaNovaAltBold",
  },
});

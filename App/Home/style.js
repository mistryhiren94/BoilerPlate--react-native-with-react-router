import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#e8e8e8"
  },
  alignContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  mainView: {
    height: "100%"
  },
  mainBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  alignBody: {
    padding: 10
  }
});

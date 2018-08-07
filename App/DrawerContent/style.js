import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  alignContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  drawerContentalign: {
    height: "100%"
  },
  alignRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
    padding: 10
  },
  paddingLeft10: {
    paddingLeft: 10
  }
});

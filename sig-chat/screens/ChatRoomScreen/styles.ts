import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    // padding: 10
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  },
  badgeContainer: {
    backgroundColor: "#3777f0",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    top: 10
  },
  badgeText: {
    color: "white",
    fontSize: 12
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3
  },
  text: {
    color: "grey"
  }
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%"
  // }
});

export default styles;

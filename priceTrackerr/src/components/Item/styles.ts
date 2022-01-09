import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828"
    // justifyContent: "space-between"
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3
  },
  text: {
    color: "white",
    marginRight: 5
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5
  },
  rank: {
    fontWeight: "bold",
    color: "white"
  }
});

export default styles;

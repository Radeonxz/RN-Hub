import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    padding: 15
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  ticker: {
    color: "grey",
    fontWeight: "bold"
  },
  quantityContainer: {
    marginLeft: "auto",
    alignItems: "flex-end"
  }
});

export default styles;

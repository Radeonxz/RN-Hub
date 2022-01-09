import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: { color: "white", fontSize: 15 },
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1
  },
  priceChangeContainer: {
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row"
  },
  priceChange: {
    color: "white",
    fontSize: 15,
    fontWeight: "500"
  }
});

export default styles;

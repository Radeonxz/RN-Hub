import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dropdownContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  item: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 5
  },
  textInput: {
    padding: 12,
    borderWidth: 1.5,
    borderColor: "#444444",
    borderRadius: 5,
    backgroundColor: "#1e1e1e",
    color: "white"
  },
  quantityContainer: {
    alignItems: "center",
    marginTop: 50,
    // bottom button
    flex: 1
  },
  ticker: {
    color: "grey",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 25,
    marginLeft: 5
  },
  pricePerCoin: {
    color: "grey",
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.5
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#4169E1",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 17
  }
});

export default styles;

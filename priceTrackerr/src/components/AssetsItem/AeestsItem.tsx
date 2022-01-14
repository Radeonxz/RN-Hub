import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const AssetsItem = () => {
  return (
    <View style={styles.coinContainer}>
      <Image source={{ uri: "" }} style={{ height: 30, width: 30 }} />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.ticker}>BTC</Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>$4000</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name={false ? "caretdown" : "caretup"}
            size={12}
            color={"#16c784"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: "#16c784", fontWeight: "600" }}>2.2%</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>$800000</Text>
        <Text style={styles.ticker}>2 BTC</Text>
      </View>
    </View>
  );
};

export default AssetsItem;

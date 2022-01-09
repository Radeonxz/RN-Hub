import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const DetailBody = (props: any) => {
  const { name, currentPrice, priceChangePercentage } = props;
  const percentageColor = priceChangePercentage < 0 ? "#ea3934" : "#16c784";

  return (
    <View style={styles.bodyContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.currentPrice}>${currentPrice.usd}</Text>
      </View>
      <View
        style={{
          ...styles.priceChangeContainer,
          backgroundColor: percentageColor
        }}
      >
        <AntDesign
          name={priceChangePercentage < 0 ? "caretdown" : "caretup"}
          size={12}
          color={"white"}
          style={{ alignSelf: "center", marginRight: 5 }}
        />
        <Text style={styles.priceChange}>
          {priceChangePercentage.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

export default DetailBody;

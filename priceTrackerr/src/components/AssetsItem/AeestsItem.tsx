import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { AssetsItemProps } from "./AssetsItem.model";
import styles from "./styles";

const AssetsItem = ({ assetItem }: AssetsItemProps) => {
  const { name, ticker, image, currentPrice, quantity, priceChangePercentage } =
    assetItem;

  const isChangePositive = () => priceChangePercentage >= 0;

  const renderHoldings = () => (quantity * currentPrice).toFixed(2);

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{ uri: image }}
        style={{ height: 30, width: 30, marginRight: 10, alignSelf: "center" }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.ticker}>{ticker}</Text>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>${currentPrice}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name={isChangePositive() ? "caretup" : "caretdown"}
            size={12}
            color={isChangePositive() ? "#16c784" : "#ea3934"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text
            style={{
              color: isChangePositive() ? "#16c784" : "#ea3934",
              fontWeight: "600"
            }}
          >
            {priceChangePercentage?.toFixed(2) || 0}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>${renderHoldings()}</Text>
        <Text style={styles.ticker}>
          {quantity} {ticker}
        </Text>
      </View>
    </View>
  );
};

export default AssetsItem;

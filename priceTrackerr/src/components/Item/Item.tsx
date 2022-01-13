import { Pressable, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { ItemProps } from "./Item.model";
import styles from "./styles";

const Item = ({ marketCoin }: ItemProps) => {
  const navigation = useNavigation();
  const {
    id,
    name,
    symbol,
    image,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    market_cap
  } = marketCoin;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3934" : "#16c784";

  const formatMarketCap = (cap: number) => {
    if (cap > 1_000_000_000_000)
      return `${Math.floor(cap / 1_000_000_000_000)}T`;
    if (cap > 1_000_000_000) return `${Math.floor(cap / 1_000_000_000)}B`;
    if (cap > 1_000_000) return `${Math.floor(cap / 1_000_000)}M`;
    if (cap > 1_000) return `${Math.floor(cap / 1_000)}K`;
    return cap;
  };

  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() => navigation.navigate("CoinDetailedScreen", { coinId: id })}
    >
      <Image
        source={{
          uri: image
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center"
        }}
      />

      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>

      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: "white" }}>
          MCap {formatMarketCap(market_cap)}
        </Text>
      </View>
    </Pressable>
  );
};

export default Item;

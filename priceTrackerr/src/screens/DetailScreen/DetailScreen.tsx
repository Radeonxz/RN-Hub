import { View, Text, Image } from "react-native";

import Coin from "../../../assets/data/crypto.json";
import DetailHeader from "../../components/DetailHeader";
import DetailBody from "../../components/DetailBody/DetailBody";

import styles from "./styles";

const DetailScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price, price_change_percentage_24h }
  } = Coin;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <DetailHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <DetailBody
        name={name}
        currentPrice={current_price}
        priceChangePercentage={price_change_percentage_24h}
      />
    </View>
  );
};

export default DetailScreen;

import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

import DetailHeader from "../../components/DetailHeader";
import DetailBody from "../../components/DetailBody/DetailBody";
import {
  getDetailedCoinData,
  getCoinMarketChart
} from "../../services/requests";

const DetailScreen = () => {
  const [coin, setCoin] = useState<null | object>(null);
  const [coinMarketData, setCoinMarketData] = useState<null | object>(null);

  const [isLoading, setIsLoading] = useState(false);

  const {
    params: { coinId }
  } = useRoute();

  const fetchCoinData = async () => {
    setIsLoading(true);
    const fetchedCoinData = await getDetailedCoinData(coinId);
    const fetchedCoinMarketData = await getCoinMarketChart(coinId);
    setCoin(fetchedCoinData);
    setCoinMarketData(fetchedCoinMarketData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (isLoading || !coin || !coinMarketData) {
    return <ActivityIndicator size={"large"} />;
  }

  const {
    id,
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price, price_change_percentage_24h }
  } = coin;
  const { prices } = coinMarketData;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <DetailHeader
        coinId={id}
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <DetailBody
        name={name}
        symbol={symbol}
        currentPrice={current_price}
        prices={prices}
        priceChangePercentage={price_change_percentage_24h}
      />
    </View>
  );
};

export default DetailScreen;

import { useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";

import Item from "../../components/Item";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCoins = async (pageNumber?: number) => {
    if (isLoading) return;
    setIsLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setIsLoading(false);
  };

  const refetchCoins = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View>
      <Text
        style={{
          fontFamily: "Droidsans",
          color: "white",
          fontSize: 25,
          letterSpacing: 1,
          paddingHorizontal: 20,
          paddingBottom: 8
        }}
      >
        Cryptoassets
      </Text>
      <FlatList
        data={coins}
        renderItem={({ item }) => <Item marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;

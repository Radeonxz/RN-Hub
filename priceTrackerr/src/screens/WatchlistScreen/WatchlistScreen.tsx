import { useState, useEffect } from "react";
import { View, FlatList, RefreshControl } from "react-native";

import { useWatchlist } from "../../contexts/WatchlistContext";
import { getWatchlistCoins } from "../../services/requests";
import Item from "../../components/Item";

const WatchlistScreen = () => {
  const { watchlistCoinIds }: string[] = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const formattedCoins = watchlistCoinIds.join("%2C");

  const fetchWatchlistCoins = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const watchlistCoinsData = watchlistCoinIds.length
      ? await getWatchlistCoins(1, formattedCoins)
      : [];
    setCoins(watchlistCoinsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWatchlistCoins();
  }, []);

  useEffect(() => {
    fetchWatchlistCoins();
  }, [watchlistCoinIds]);

  return (
    <View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <Item marketCoin={item} />}
        refreshControl={
          <RefreshControl refreshing={isLoading} tintColor="white" />
        }
      />
    </View>
  );
};

export default WatchlistScreen;

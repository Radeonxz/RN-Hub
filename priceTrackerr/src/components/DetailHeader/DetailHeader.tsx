import { View, Pressable, Text, Image } from "react-native";
import { Ionicons, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { DetailHeaderProps } from "./DetailHeader.model";
import { useWatchlist } from "../../contexts/WatchlistContext";
import styles from "./styles";

const DetailHeader = ({
  coinId,
  image,
  symbol,
  marketCapRank
}: DetailHeaderProps) => {
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId }: any =
    useWatchlist();
  const sth = useWatchlist();
  const isCoinWatchlisted = () =>
    watchlistCoinIds.some((coinIdValue: string) => coinIdValue === coinId);

  const handleWatchlistCoins = () => {
    if (isCoinWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={30} color="white" />
      </Pressable>
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 30, height: 30 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      {/* <EvilIcons name="user" size={30} color="white" /> */}
      <FontAwesome
        name={isCoinWatchlisted() ? "star" : "star-o"}
        size={25}
        color={isCoinWatchlisted() ? "#ffbf00" : "white"}
        onPress={handleWatchlistCoins}
      />
    </View>
  );
};

export default DetailHeader;

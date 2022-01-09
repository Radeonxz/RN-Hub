import { FlatList } from "react-native";

import Item from "../../components/Item";

import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";

const HomeScreen = () => {
  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={({ item }) => <Item marketCoin={item} />}
    />
  );
};

export default HomeScreen;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";

import Item from "./src/components/Item";

import cryptocurrencies from "./assets/data/cryptocurrencies.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <Item marketCoin={item} />}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50
  }
});

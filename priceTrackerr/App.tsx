import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Item from "./src/components/Item";

export default function App() {
  return (
    <View style={styles.container}>
      <Item />
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

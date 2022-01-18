import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import Navigation from "./src/navigation/Navigation";
import WatchlistProvider from "./src/contexts/WatchlistContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Droidsans: require("./assets/fonts/DroidSans.ttf")
  });

  if (!fontsLoaded) return <ActivityIndicator size="large" />;

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212"
        }
      }}
    >
      <RecoilRoot>
        <WatchlistProvider>
          {/* Dismiss keyboard for textInput */}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Navigation />
              <StatusBar style="light" />
            </View>
          </TouchableWithoutFeedback>
        </WatchlistProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50
  }
});

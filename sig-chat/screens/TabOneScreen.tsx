import { Image } from "react-native";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <Image
        source={{
          uri: "https://randomuser.me/api/portraits/lego/2.jpg"
        }}
        style={styles.image}
      />
      <View>
        <View style={styles.row}>
          <Text style={styles.name}>Bar</Text>
          <Text style={styles.text}>10:11 AM</Text>
        </View>
        <Text style={styles.text}>Message details...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontWeight: "bold"
  },
  text: {
    color: "grey"
  }
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%"
  // }
});

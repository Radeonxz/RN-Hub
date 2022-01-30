import { Image } from "react-native";

import { Text, View } from "../Themed";
import { styles } from "./styles";

export default function ChatRoomItem() {
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
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Bar</Text>
          <Text style={styles.text}>10:11 AM</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          Message details...Message details...Message details...Message
          details...Message details...Message details...
        </Text>
      </View>
    </View>
  );
}

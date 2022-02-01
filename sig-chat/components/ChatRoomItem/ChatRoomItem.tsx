import { Image } from "react-native";

import { Text, View } from "../Themed";
import styles from "./styles";

export default function ChatRoomItem({ chatRoom }: any) {
  const { users, lastMessage, newMessages } = chatRoom;
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
          uri: users[1].imageUri
        }}
        style={styles.image}
      />
      {newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{newMessages}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{users[1].name}</Text>
          <Text style={styles.text}>{lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          {lastMessage.content}
        </Text>
      </View>
    </View>
  );
}

import { FlatList } from "react-native";

import { Text, View } from "../../components/Themed";

import chatRoomData from "../../assets/data/Chats";
import Message from "../../components/Message";
import styles from "./styles";

export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => (
          <Message
            message={item}
            inverted
            // style={{ backgroundColor: "#3777f0" }}
          />
        )}
      />
    </View>
  );
}

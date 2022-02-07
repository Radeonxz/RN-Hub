import { FlatList, SafeAreaView } from "react-native";

import { Text, View } from "../../components/Themed";

import chatRoomData from "../../assets/data/Chats";
import Message from "../../components/Message";
import MessageInput from "../../components/MessageInput";
import styles from "./styles";

export default function ChatRoomScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => (
          <Message
            message={item}
            // style={{ backgroundColor: "#3777f0" }}
          />
        )}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

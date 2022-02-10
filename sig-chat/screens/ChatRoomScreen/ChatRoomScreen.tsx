import { FlatList, SafeAreaView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/core";

import { Text, View } from "../../components/Themed";

import chatRoomData from "../../assets/data/Chats";
import Message from "../../components/Message";
import MessageInput from "../../components/MessageInput";
import styles from "./styles";

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({ title: route.params?.id });

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

import { StyleSheet, FlatList } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import ChatRoomItem from "../../components/ChatRoomItem";
import chatRoomData from "../../assets/data/ChatRooms";

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData}
        renderItem={({ item: chatRoomItem }) => (
          <ChatRoomItem chatRoom={chatRoomItem} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1
  }
});

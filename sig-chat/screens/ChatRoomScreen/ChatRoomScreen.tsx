import { Text, View } from "../../components/Themed";
import Message from "../../components/Message";
import styles from "./styles";

export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
      <Message />
    </View>
  );
}

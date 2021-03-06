import { Text, View } from "../Themed";
import styles from "./styles";

const blue = "#3777f0";
const grey = "lightgrey";
const myID = "u2";

export default function Message({ message }: any) {
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
}

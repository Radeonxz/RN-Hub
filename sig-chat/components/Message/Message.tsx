import { Text, View } from "../Themed";
import styles from "./styles";

export default function Message() {
  const isMe = true;
  const blue = "#3777f0";
  const grey = "lightgrey";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isMe ? grey : blue, marginLeft: isMe ? "auto" : 10 }
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>Message</Text>
    </View>
  );
}

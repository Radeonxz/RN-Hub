import { useState } from "react";
import { TextInput } from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons
} from "@expo/vector-icons";

import { Text, View } from "../Themed";
import styles from "./styles";

export default function MessageInput() {
  const [message, setMessage] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter message..."
          value={message}
          onChangeText={setMessage}
          keyboardType="default"
        />
        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={18} color="white" style={styles.icon} />
        ) : (
          <AntDesign name="plus" size={24} color="white" style={styles.icon} />
        )}
      </View>
    </View>
  );
}

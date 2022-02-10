import { useState } from "react";
import {
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from "react-native";
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

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  const sendMessage = () => {
    setMessage("");
  };

  const onPlusClicked = () => {};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
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
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={18} color="white" style={styles.icon} />
        ) : (
          <AntDesign name="plus" size={24} color="white" style={styles.icon} />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
}

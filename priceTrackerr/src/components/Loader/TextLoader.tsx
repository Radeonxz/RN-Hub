import { View, Text } from "react-native";

import styles from "./styles";

const TextLoader = ({ text = "Loading, please wait..." }: any) => {
  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.loaderText}>{text}</Text>
    </View>
  );
};

export default TextLoader;

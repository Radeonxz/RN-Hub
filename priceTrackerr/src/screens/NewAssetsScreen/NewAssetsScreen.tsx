import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

import styles from "./styles";

const NewAssetsScreen = () => {
  const [quantity, setQuantity] = useState<string>("");

  return (
    // bottom button
    <View style={{ flex: 1 }}>
      <SearchableDropdown
        item={[]}
        onItemSelect={(item: any) => console.log(item)}
        containerStyle={styles.dropdownContainer}
        itemStyle={styles.item}
        itemTextStyle={{
          color: "white"
        }}
        resetValue={false}
        placeholder={"Select a coin..."}
        placeholderTextColor="white"
        textInputProps={{
          underLineColorAndroid: "transparent",
          style: styles.textInput
        }}
      />
      <View style={styles.quantityContainer}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={quantity}
            placeholder="0"
            keyboardType="numeric"
            style={{ color: "white", fontSize: 90 }}
            onChangeText={setQuantity}
          />
          <Text style={styles.ticker}>BTC</Text>
        </View>
        <Text style={styles.pricePerCoin}>$40000 per coin</Text>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("NewAssetsScreen")}
      >
        <Text style={styles.buttonText}>Add New Asset</Text>
      </Pressable>
    </View>
  );
};

export default NewAssetsScreen;

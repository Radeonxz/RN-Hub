import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchableDropdown from "react-native-searchable-dropdown";

import { allPortfolioAssetsInStorage } from "../../atoms/PortfolioAssets";
import { getAllCoins, getDetailedCoinData } from "../../services/requests";
import styles from "./styles";

const NewAssetsScreen = () => {
  const navigation = useNavigation();
  const [allCoins, setAllCoins] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState<string>("");

  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioAssetsInStorage
  );

  const isQuantityEntered = () => quantity === "";

  const onAddNewAsset = async () => {
    const newAsset = {
      id: selectedCoin?.id,
      name: selectedCoin?.name,
      image: selectedCoin?.image?.small,
      ticker: selectedCoin?.symbol?.toUpperCase(),
      quantity: parseFloat(quantity),
      priceBought: selectedCoin?.market_data?.current_price?.usd
    };

    const newAssets = [...assetsInStorage, newAsset];
    const jsonValue = JSON.stringify(newAssets);
    await AsyncStorage.setItem("@assets_coins", jsonValue);
    setAssetsInStorage(newAssets);
    navigation.goBack();
  };

  const fetchAllCoins = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const coinsData = await getAllCoins();
    setAllCoins(coinsData);
    setIsLoading(false);
  };

  const fetchSelectedCoinInfo = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const coinInfo = await getDetailedCoinData(selectedCoinId);
    setSelectedCoin(coinInfo);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllCoins();
  }, []);

  useEffect(() => {
    if (selectedCoinId) fetchSelectedCoinInfo();
  }, [selectedCoinId]);

  return (
    // bottom button
    <View style={{ flex: 1 }}>
      <SearchableDropdown
        items={allCoins}
        onItemSelect={(item: any) => setSelectedCoinId(item.id)}
        containerStyle={styles.dropdownContainer}
        itemStyle={styles.item}
        itemTextStyle={{
          color: "white"
        }}
        resetValue={false}
        placeholder={selectedCoinId || "Select a coin..."}
        placeholderTextColor="white"
        textInputProps={{
          underLineColorAndroid: "transparent",
          style: styles.textInput
        }}
      />
      {selectedCoin && (
        <>
          <View style={styles.quantityContainer}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                value={quantity}
                placeholder="0"
                keyboardType="numeric"
                style={{ color: "white", fontSize: 90 }}
                onChangeText={setQuantity}
              />
              <Text style={styles.ticker}>
                {selectedCoin?.symbol?.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.pricePerCoin}>
              ${selectedCoin?.market_data?.current_price?.usd || 0} per coin
            </Text>
          </View>
          <Pressable
            style={{
              ...styles.buttonContainer,
              backgroundColor: isQuantityEntered() ? "#303030" : "#4169E1"
            }}
            onPress={onAddNewAsset}
            // onPress={() => AsyncStorage.clear()}
            disabled={isQuantityEntered()}
          >
            <Text
              style={{
                ...styles.buttonText,
                color: isQuantityEntered() ? "grey" : "white"
              }}
            >
              Add New Asset
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default NewAssetsScreen;

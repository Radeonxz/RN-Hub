import { View, Text, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useRecoilValue, useRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import {
  allPortfolioAssets,
  allPortfolioAssetsInStorage
} from "../../atoms/PortfolioAssets";
import AssetsItem from "../AssetsItem";
import styles from "./styles";

const AssetsList = () => {
  const navigation = useNavigation();
  const [assets, setAssets] = useRecoilState(allPortfolioAssets);
  const assetsValue = useRecoilValue(allPortfolioAssets);
  const [storageAssets, setStorageAssets] = useRecoilState(
    allPortfolioAssetsInStorage
  );

  const getCurrentBalance = () =>
    assetsValue.reduce(
      (total: number, currentAsset: any) =>
        total + currentAsset.currentPrice * currentAsset.quantity,
      0
    );

  const getCurrentValueChange = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalance = assetsValue.reduce(
      (total: number, currentAsset: any) =>
        total + currentAsset.priceBought * currentAsset.quantity,
      0
    );

    return (currentBalance - boughtBalance).toFixed(2);
  };

  const getCurrentPercentageChange = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalance = assetsValue.reduce(
      (total: number, currentAsset: any) =>
        total + currentAsset.priceBought * currentAsset.quantity,
      0
    );

    const changeRate = (
      ((currentBalance - boughtBalance) / boughtBalance) *
      100
    ).toFixed(2);

    return isNaN(changeRate) ? 0 : changeRate;
  };

  const isChangePositive = () => parseFloat(getCurrentValueChange()) >= 0;

  const onDeleteAsset = async (asset: any) => {
    const newAssets = storageAssets.filter(
      (coin) => coin.unique_id !== asset.item.unique_id
    );
    const jsonValue = JSON.stringify(newAssets);
    await AsyncStorage.setItem("@assets_coins", jsonValue);
    setStorageAssets(newAssets);
  };

  const renderDeleteButton = (data: any) => {
    return (
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "#ea3934",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: 30,
          marginLeft: 20
        }}
        onPress={() => onDeleteAsset(data)}
      >
        <FontAwesome name="trash-o" size={24} color="white" />
      </Pressable>
    );
  };

  return (
    <SwipeListView
      data={assetsValue}
      rightOpenValue={-75}
      disableRightSwipe
      renderHiddenItem={(data) => renderDeleteButton(data)}
      keyExtractor={({ id }, index) => `${id}${index}`}
      ListHeaderComponent={
        <>
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.currentBalance}>Current Balance</Text>
              <Text style={styles.currentBalanceValue}>
                ${getCurrentBalance().toFixed(2)}
              </Text>
              <Text
                style={{
                  ...styles.valueChange,
                  color: isChangePositive() ? "#16c784" : "#ea3934"
                }}
              >
                ${getCurrentValueChange()} (All Time)
              </Text>
            </View>
            <View
              style={{
                ...styles.priceChangePercentageContainer,
                backgroundColor: isChangePositive() ? "#16c784" : "#ea3934"
              }}
            >
              <AntDesign
                name={isChangePositive() ? "caretup" : "caretdown"}
                size={12}
                color={"white"}
                style={{ alignSelf: "center", marginRight: 5 }}
              />
              <Text style={styles.percentageChange}>
                {getCurrentPercentageChange() || 0}%
              </Text>
            </View>
          </View>
          <Text style={styles.assetsLabel}>Your Assets</Text>
        </>
      }
      renderItem={({ item }) => <AssetsItem assetItem={item} />}
      ListFooterComponent={
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("NewAssetsScreen")}
        >
          <Text style={styles.buttonText}>Add New Asset</Text>
        </Pressable>
      }
    />
  );
};

export default AssetsList;

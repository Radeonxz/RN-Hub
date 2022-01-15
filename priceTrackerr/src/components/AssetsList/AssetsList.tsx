import { View, Text, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue, useRecoilState } from "recoil";
import { AntDesign } from "@expo/vector-icons";

import { allPortfolioAssets } from "../../atoms/PortfolioAssets";
import AssetsItem from "../AssetsItem";
import styles from "./styles";

const AssetsList = () => {
  const navigation = useNavigation();
  const [assets, setAssets] = useRecoilState(allPortfolioAssets);
  const assetsValue = useRecoilValue(allPortfolioAssets);

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
    const currentBalance = getCurrentValueChange();
    const boughtBalance = assetsValue.reduce(
      (total: number, currentAsset: any) =>
        total + currentAsset.priceBought * currentAsset.quantity,
      0
    );

    return (
      (
        ((parseFloat(currentBalance) - boughtBalance) / boughtBalance) *
        100
      ).toFixed(2) || 0
    );
  };

  const isChangePositive = () => parseFloat(getCurrentValueChange()) >= 0;

  return (
    <FlatList
      data={assetsValue}
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
                {getCurrentPercentageChange()}%
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

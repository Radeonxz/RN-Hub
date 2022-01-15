import { atom, selector } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getWatchlistCoins } from "../services/requests";

export const selectAllPortfolioAssets = selector({
  key: "selectAllPortfolioAssets",
  get: async () => {
    const jsonValue = await AsyncStorage.getItem("@assets_coins");
    return jsonValue ? JSON.parse(jsonValue) : [];
  }
});

export const selectAllPortfolioAssetsInStorage = selector({
  key: "selectAllPortfolioAssetsInStorage",
  get: async ({ get }) => {
    const savedPortfolioAssets = get(allPortfolioAssetsInStorage);
    const assetsMarketData = await getWatchlistCoins(
      1,
      savedPortfolioAssets.map((asset: any) => asset.id).join(",")
    );

    const mergedAssets = savedPortfolioAssets.map((asset: any) => {
      const portfolioAsset = assetsMarketData.filter(
        (assetData: any) => assetData.id === asset.id
      )[0];

      return {
        ...asset,
        currentPrice: portfolioAsset.current_price,
        priceChangePercentage: portfolioAsset.price_change_percentage_24h
      };
    });

    return mergedAssets.sort(
      (prevAsset: any, nextAsset: any) =>
        prevAsset.quantityBought * prevAsset.currentPrice <
        nextAsset.quantityBought * nextAsset.currentPrice
    );
  }
});

export const allPortfolioAssets = atom({
  key: "allPortfolioAssets",
  default: selectAllPortfolioAssetsInStorage
});

export const allPortfolioAssetsInStorage = atom({
  key: "allPortfolioAssetsInStorage",
  default: selectAllPortfolioAssets
});

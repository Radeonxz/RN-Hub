import { Suspense } from "react";
import { View, Text } from "react-native";

import AssetsList from "../../components/AssetsList";

const PortfolioScreen = () => {
  return (
    <View>
      <Suspense
        fallback={
          <Text style={{ color: "white" }}>Loading, please wait...</Text>
        }
      >
        <AssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;

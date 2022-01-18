import { Suspense } from "react";
import { View, Text } from "react-native";

import { TextLoader } from "../../components/Loader";
import AssetsList from "../../components/AssetsList";

const PortfolioScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Suspense fallback={<TextLoader text="Loading assets, please wait..." />}>
        <AssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;

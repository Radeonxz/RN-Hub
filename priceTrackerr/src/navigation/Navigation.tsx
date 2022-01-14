import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottonNavigator from "./BottonNavigator";
import DetailScreen from "../screens/DetailScreen";
import NewAssetsScreen from "../screens/NewAssetsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={BottonNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoinDetailedScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewAssetsScreen"
        component={NewAssetsScreen}
        options={{
          title: "Add New Asset",
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottonNavigator from "./BottonNavigator";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={BottonNavigator} />
      <Stack.Screen name="CoinDetailedScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

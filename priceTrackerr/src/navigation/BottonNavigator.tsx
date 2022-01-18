import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Foundation, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import WatchlistScreen from "../screens/WatchlistScreen";

const Stack = createBottomTabNavigator();

const BottonNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        // tabBarInactiveBackgroundColor: "#181818",
        tabBarStyle: {
          backgroundColor: "#181818"
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          )
        }}
      />
      <Stack.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Foundation
              name="graph-pie"
              size={focused ? 35 : 30}
              color={color}
            />
          )
        }}
      />
      <Stack.Screen
        name="WatchList"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 30 : 25} color={color} />
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default BottonNavigator;

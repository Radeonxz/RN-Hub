import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import WatchlistScreen from "../screens/WatchlistScreen";

const Stack = createBottomTabNavigator();

const BottonNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#181818",
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
            <Entypo name="home" size={focused ? 28 : 25} color={color} />
          )
        }}
      />
      <Stack.Screen
        name="WatchList"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 28 : 25} color={color} />
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default BottonNavigator;

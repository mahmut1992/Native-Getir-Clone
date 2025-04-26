import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import HomeNavigator from "./HomeNavigator";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const RouteNavigator = () => {
  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          width: 56,
          height: 56,
          backgroundColor: "#5C3EBC",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          marginTop: -8,
          borderWidth: 2,
          borderColor: "white",
          marginLeft: 13,
        }}
      >
        <Entypo name="list" size={24} color="#FFD00C" />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RouteNavigator;

const styles = StyleSheet.create({});

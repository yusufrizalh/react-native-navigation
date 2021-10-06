import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeStack from "./stacks/HomeStack";
import AboutStack from "./stacks/AboutStack";
import ContactStack from "./stacks/ContactStack";

import ActivityTab from "./tabs/ActivityTab";
import MessageTab from "./tabs/MessageTab";
import AccountTab from "./tabs/AccountTab";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Beranda",
          headerStyle: { backgroundColor: "#493267" },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          title: "Tentang",
          headerStyle: { backgroundColor: "#7bb3ff" },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="ContactStack"
        component={ContactStack}
        options={{
          title: "Kontak",
          headerStyle: { backgroundColor: "#ffffff" },
          headerTintColor: "#000000",
        }}
      />
    </Stack.Navigator>
  );
};

const MyTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ActivityTab" component={ActivityTab} />
      <Tab.Screen name="MessageTab" component={MessageTab} />
      <Tab.Screen name="AccountTab" component={AccountTab} />
    </Tab.Navigator>
  );
};

const MyTopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: "#ffffff" },
        tabBarStyle: { backgroundColor: "#d23d42" },
      }}
    >
      <TopTab.Screen
        name="ActivityTab"
        component={ActivityTab}
        options={{
          title: "Activity",
        }}
      />
      <TopTab.Screen
        name="MessageTab"
        component={MessageTab}
        options={{
          title: "Message",
        }}
      />
      <TopTab.Screen
        name="AccountTab"
        component={AccountTab}
        options={{
          title: "Account",
        }}
      />
    </TopTab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      {/* tempat meletakkan navigasi */}
      {/* <MyStackNavigator /> */}
      {/* <MyTabNavigator /> */}
      <MyTopTabNavigator />
    </NavigationContainer>
  );
};

export default App;

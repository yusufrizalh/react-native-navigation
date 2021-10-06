import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeStack from "./stacks/HomeStack";
import AboutStack from "./stacks/AboutStack";
import ContactStack from "./stacks/ContactStack";

const Stack = createNativeStackNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      {/* tempat meletakkan navigasi */}
      <MyStackNavigator />
    </NavigationContainer>
  );
};

export default App;

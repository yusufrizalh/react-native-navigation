import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeStack from "./stacks/HomeStack";
import AboutStack from "./stacks/AboutStack";
import ContactStack from "./stacks/ContactStack";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      {/* tempat meletakkan navigasi */}
      <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="AboutStack" component={AboutStack} />
        <Stack.Screen name="ContactStack" component={ContactStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
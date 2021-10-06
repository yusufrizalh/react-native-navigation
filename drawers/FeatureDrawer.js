import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const FeatureDrawer = () => {
  return (
    <View style={myStyles.wadahUtama}>
      <Text style={myStyles.teksTebal}>Feature Drawer</Text>
    </View>
  );
};

export default FeatureDrawer;

const myStyles = StyleSheet.create({
  wadahUtama: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  teksTebal: {
    fontSize: 24,
    color: "blue",
    justifyContent: "center",
  },
});

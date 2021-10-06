import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeStack = ({ navigation }) => {
  return (
    <View style={myStyles.wadahUtama}>
      <Text style={myStyles.teksTebal}>Home Stack</Text>
      <Button
        title="Tap to About"
        onPress={() => {
          navigation.navigate("AboutStack", {
            itemID: 1065,
            itemName: "Screen Protector",
            itemPrice: 2500,
          });
        }}
      />
    </View>
  );
};

export default HomeStack;

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

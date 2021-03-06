import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AboutStack = ({ route, navigation }) => {
  const { itemID, itemName, itemPrice } = route.params;

  return (
    <View style={myStyles.wadahUtama}>
      <Text style={myStyles.teksTebal}>About Stack</Text>
      <Text style={myStyles.teksBiasa}>Item ID: {JSON.stringify(itemID)}</Text>
      <Text style={myStyles.teksBiasa}>Item Name: {JSON.stringify(itemName)}</Text>
      <Text style={myStyles.teksBiasa}>Item Price: {JSON.stringify(itemPrice)}</Text>
      <Button
        title="Tap to Contact"
        onPress={() => {
          navigation.navigate("ContactStack");
        }}
      />
    </View>
  );
};

export default AboutStack;

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
  teksBiasa: {
    fontSize: 18,
    color: "gray",
    justifyContent: "center",
  },
});

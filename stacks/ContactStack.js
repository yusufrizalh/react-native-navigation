import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ContactStack = ({ navigation }) => {
  return (
    <View style={myStyles.wadahUtama}>
      <Text style={myStyles.teksTebal}>Contact Stack</Text>
    </View>
  );
};

export default ContactStack;

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

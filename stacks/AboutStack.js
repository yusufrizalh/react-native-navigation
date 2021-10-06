import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AboutStack = ({ navigation }) => {
  return (
    <View style={myStyles.wadahUtama}>
      <Text style={myStyles.teksTebal}>About Stack</Text>
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
});

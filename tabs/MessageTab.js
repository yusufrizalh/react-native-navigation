import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MessageTab = () => {
  return (
    <View style={myStyles.wadahUtama}>
      <Text style={myStyles.teksTebal}>Message Tab</Text>
    </View>
  );
};

export default MessageTab;

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

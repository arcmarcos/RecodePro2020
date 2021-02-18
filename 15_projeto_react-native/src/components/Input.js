import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ type, placeholder, ...props }) => {
  return (
    <View style={styles.input}>
      <TextInput keyboardType={type} placeholder={placeholder} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 10,
    alignSelf: "center",
    margin: 5,
    fontSize: 18,
    width: 260,
    borderRadius: 5,
  },
});

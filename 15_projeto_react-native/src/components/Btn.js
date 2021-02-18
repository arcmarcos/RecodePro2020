import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Btn = () => {
  return (
    <View styles={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    width: 260,
    height: 40,
    backgroundColor: "#36d199",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#333",
    letterSpacing: 0.5,
  },
});

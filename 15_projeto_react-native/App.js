import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import Btn from "./src/components/Btn";
import Input from "./src/components/Input";
import AppLoading from "expo-app-loading";
import { useFonts, Saira_400Regular } from "@expo-google-fonts/saira";

export default function App() {
  const [fontsLoaded] = useFonts({
    Saira_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("./assets/eds_logo.png")} />
      <Text style={styles.title}>Bem vindo a Eletro Dev Store!</Text>
      <Input type="text" placeholder="Digite seu usuário" />
      <Input secureTextEntry placeholder="Digite sua senha" />
      <Btn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "Saira_400Regular",
    marginVertical: 20,
  },
});

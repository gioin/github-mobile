import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import LandingScreen from "./view/screens/LandingScreen";
import { colors } from "./styles/base";

export default function App() {
  return (
    <View style={styles.container}>
      <LandingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.black,
  },
});

import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomSearchInput from "../components/inputs/CustomSearchInput";

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomSearchInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? 55 : 0,
  },
});

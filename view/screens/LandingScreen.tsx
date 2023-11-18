import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomSearchInput from "../components/inputs/CustomSearchInput";
import { colors } from "../../styles/base";

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={colors.secondary.black}
        barStyle="light-content"
      />
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <CustomSearchInput />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 55 : 0,
    backgroundColor: colors.secondary.black,
  },
  searchContainer: {
    width: "100%",
  },
});

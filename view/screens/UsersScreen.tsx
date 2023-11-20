import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/base";
import { useNavigation } from "@react-navigation/native";

export default function UsersScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Users Screen</Text>
      <Button
        title="navigate to user"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 55 : 0,
    backgroundColor: colors.secondary.black,
  },
});

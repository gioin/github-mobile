import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../styles/base";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.secondary.white,
          width: "70%",
          textAlign: "center",
        }}
      >
        Searching is not just about finding information, it's a journey of
        discovery, a quest for knowledge, and a path to innovation.
      </Text>
      <View style={{ paddingVertical: 40 }}>
        <Button
          title="Start Here"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
      <Image
        source={require("../../assets/home-mobile-dark2x.webp")}
        style={{ width: "80%", height: 200 }}
        resizeMode="contain"
        width={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? 55 : 0,
    // backgroundColor: colors.secondary.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
});

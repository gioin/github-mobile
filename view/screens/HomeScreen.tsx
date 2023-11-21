import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../styles/base";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
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
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonText}>Start Searching</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/home-mobile-dark2x.webp")}
        style={{ width: "80%", height: 230 }}
        resizeMode="contain"
        width={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary.gray,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  buttonText: {
    color: colors.primary.white,
    fontWeight: "bold",
    fontSize: 15,
  },
});

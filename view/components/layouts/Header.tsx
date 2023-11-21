import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";
import CustomSearchInput from "../inputs/CustomSearchInput";
import { colors } from "../../../styles";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 12,
          }}
        >
          <View
            style={
              Platform.OS === "ios" ? styles.backButtonIOS : styles.backButton
            }
          >
            <TouchableOpacity style={{ alignSelf: "center" }}>
              <HeaderBackButton
                label=" "
                onPress={() => {
                  Keyboard.dismiss();
                  setTimeout(() => {
                    navigator.goBack();
                  }, 50);
                }}
                tintColor={
                  Platform.OS === "ios"
                    ? colors.primary.blueIOS
                    : colors.primary.white
                }
              />
            </TouchableOpacity>
          </View>
          <CustomSearchInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.primary.black,
  },
  container: {
    flexDirection: "row",
    backgroundColor:
      Platform.OS === "android" ? colors.secondary.black : colors.primary.black,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 60,
    paddingRight: 19,
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
  backButtonIOS: {
    position: "absolute",
    left: -74,
    top: -3,
    marginLeft: 20,
    gap: 7,
  },
  backButton: {
    position: "absolute",
    left: -55,
    gap: 7,
  },
});

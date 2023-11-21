import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Platform,
  ColorValue,
  StyleProp,
  ViewStyle,
  TextStyle,
  Keyboard,
} from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { InteractionManager } from "react-native";
import { ArrowLeft } from "../../../assets/icons";
import CustomSearchInput from "../inputs/CustomSearchInput";
import { colors } from "../../../styles";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  showTitle?: boolean;
  leftHeader?: React.ReactNode;
  rightHeader?: React.ReactNode;
  children?: React.ReactNode;
  bgColor?: ColorValue;
  titleStyles?: TextStyle;
}

const Header = ({
  showTitle = true,
  rightHeader,
  children,
  bgColor = "#fefe",
  titleStyles,
}: HeaderProps) => {
  const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor:
            Platform.OS === "android"
              ? colors.secondary.black
              : colors.primary.black,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 60,
          paddingRight: 19,
          paddingTop: Platform.OS === "android" ? 45 : 0,
        }}
      >
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
    justifyContent: "center",
    height: 50,
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
  title: {
    fontSize: Platform.OS === "android" ? 22 : 17,
    fontWeight: "700",
    letterSpacing: 0.7,
  },
  leftHeader: {
    alignSelf: "center",
    position: "absolute",
    left: 0,
    marginLeft: 20,
    flexDirection: "row",
    gap: 7,
  },
  centerHeader: { alignSelf: "center" },
  rightHeader: {
    alignSelf: "center",
    position: "absolute",
    right: 0,
    marginRight: 20,
    flexDirection: "row",
    gap: 7,
  },
  backIconContainer: {
    paddingRight: 22,
  },
});

import React from "react";
import { Platform, StyleSheet } from "react-native";
import { colors } from "../../styles/base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./layouts/Header";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import UsersScreen from "../screens/UsersScreen";

const Stack = createNativeStackNavigator();

export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          statusBarTranslucent: true,
          contentStyle: { backgroundColor: colors.primary.black },
          headerStyle: {
            backgroundColor: colors.primary.black,
          },
          headerTintColor:
            Platform.OS === "ios"
              ? colors.primary.blueIOS
              : colors.primary.white,
        }}
      >
        <Stack.Screen name=" " component={HomeScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            header: () => <Header />,
            statusBarColor:
              Platform.OS === "ios"
                ? colors.primary.black
                : colors.secondary.black,
          }}
        />
        <Stack.Screen
          name="People"
          component={UsersScreen}
          options={{
            headerStyle: {
              backgroundColor:
                Platform.OS === "ios"
                  ? colors.primary.black
                  : colors.secondary.black,
            },
            statusBarColor:
              Platform.OS === "ios"
                ? colors.primary.black
                : colors.secondary.black,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

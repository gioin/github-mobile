import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
          contentStyle: { backgroundColor: colors.primary.black },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen name="User" component={UsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 55 : 0,
    backgroundColor: colors.secondary.black,
  },
});

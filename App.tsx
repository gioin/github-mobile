import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { colors } from "./styles/base";
import Routing from "./view/components/Routing";
import { StateProvider } from "./state/StateProvider";

export const SearchContext = createContext({});

export default function App() {
  const [textValue, setTextValue] = useState("");

  return (
    <StateProvider>
      <Routing />
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.black,
  },
});

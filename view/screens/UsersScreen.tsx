import React from "react";
import {
  Image,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../styles/base";
import { useAppState } from "../../state/useState";
import List from "../components/List";

export default function UsersScreen() {
  const { searchData, isLoading } = useAppState();

  if (isLoading) {
    return (
      <View
        style={{
          marginTop: "60%",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {searchData.length > 0 && (
        <FlatList
          data={searchData}
          style={{}}
          renderItem={({ item }) => (
            <List key={item.id} onPress={() => void console.log("")}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 14,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 43, height: 43, borderRadius: 1111 }}
                  source={{ uri: item.avatar }}
                />
                <Text
                  style={{
                    color: colors.primary.white,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {item.userName}
                </Text>
              </View>
            </List>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 55 : 0,
    backgroundColor: "#19191a",
  },
});

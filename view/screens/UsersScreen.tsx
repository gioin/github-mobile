import React from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Linking,
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
          marginTop: "80%",
        }}
      >
        <ActivityIndicator color={colors.primary.blueIOS} size={35} />
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
            <List key={item.id} onPress={() => void Linking.openURL(item.url)}>
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
    backgroundColor: colors.secondary.black,
  },
});

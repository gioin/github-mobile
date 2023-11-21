import React from "react";
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, fonts } from "../../styles/base";
import { RepoIcon, UserIcon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import useSearchAPI from "../../api/search/useSearchApi";
import { useAppState } from "../../state/useState";
import List from "../components/List";

export default function SearchScreen() {
  const navigation = useNavigation<any>();
  const { textValue } = useAppState();
  const { fetchDataFromApi } = useSearchAPI();

  return (
    <View>
      {textValue && (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
          <FlatList
            scrollEnabled={false}
            data={[
              { id: 2, name: "user", icon: <UserIcon /> },
              { id: 1, name: "repository", icon: <RepoIcon /> },
            ]}
            renderItem={({ item }) => (
              <List
                onPress={() => {
                  if (item.name === "user") {
                    fetchDataFromApi(textValue);
                    navigation.navigate("People");
                  }
                }}
              >
                <View style={styles.content}>
                  <View style={{ flexDirection: "row", gap: 20 }}>
                    <View style={{ marginTop: Platform.OS === "ios" ? 0 : 3 }}>
                      {item.icon}
                    </View>
                    <Text style={styles.text}>{textValue}</Text>
                  </View>
                  {item.name === "repository" && (
                    <Text style={styles.notWorkingText}>Not working yet</Text>
                  )}
                </View>
              </List>
            )}
          />
        </ScrollView>
      )}
      {!textValue && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50%",
          }}
        >
          <Text
            style={{
              color: colors.primary.white,
              textAlign: "center",
              fontSize: fonts.lg,
              marginBottom: 10,
              letterSpacing: 0.1,
              fontWeight: "bold",
            }}
          >
            Find your stuff.
          </Text>
          <Text
            style={{
              color: colors.secondary.white,
              width: "80%",
              textAlign: "center",
              letterSpacing: 0.1,
              fontSize: 15,
            }}
          >
            Search all of Github for People, Repositories, Organizations,
            Issues,and Pull Requests.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    backgroundColor: colors.secondary.black,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  text: { color: colors.primary.white, fontSize: 16 },
  notWorkingText: {
    color: colors.secondary.white,
    fontSize: 12,
    marginRight: "6%",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    marginTop: 3,
    right: 0,
  },
});

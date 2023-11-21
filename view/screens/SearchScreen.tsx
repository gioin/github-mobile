import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
        <View style={styles.bottomPart}>
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
                    navigation.navigate("Users");
                  }
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 20 }}>
                    {item.icon}
                    <Text style={styles.text}>{textValue}</Text>
                  </View>
                  {item.name === "repository" && (
                    <Text
                      style={{
                        color: colors.primary.white,
                        fontSize: 12,
                        marginRight: "10%",
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: 3,
                      }}
                    >
                      Not working yet
                    </Text>
                  )}
                </View>
              </List>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomPart: {
    paddingTop: 6,
    backgroundColor: "#19191a",
  },
  text: { color: colors.primary.white, fontSize: fonts.primary },
});

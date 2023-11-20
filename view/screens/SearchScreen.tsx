import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import CustomSearchInput from "../components/inputs/CustomSearchInput";
import { colors, fonts } from "../../styles/base";
import { RepoIcon, UserIcon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { SearchContext } from "../../App";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchScreen() {
  const navigation = useNavigation();
  const { textValue }: any = useContext(SearchContext);

  return (
    <View>
      {textValue && (
        <View style={styles.bottomPart}>
          <FlatList
            scrollEnabled={false}
            data={[
              { id: 1, name: "repository", icon: <RepoIcon /> },
              { id: 2, name: "user", icon: <UserIcon /> },
            ]}
            renderItem={({ item }) => (
              <View>
                <TouchableHighlight
                  style={styles.searchOption}
                  underlayColor={colors.hover}
                  onPress={() => console.log("Pressed!")}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 20,
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 20 }}>
                      {item.icon}
                      <Text style={styles.text}>{textValue}</Text>
                    </View>
                    <View>
                      <AntDesign name="right" size={16} color={"#5d5e61"} />
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
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
  searchOption: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 10,
    paddingVertical: 18,
    alignItems: "center",
    color: colors.primary.white,
  },
  text: { color: colors.primary.white, fontSize: fonts.primary },
});

import React from "react";
import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {
  ArrowLeft,
  CloseIcon,
  RepoIcon,
  UserIcon,
} from "../../../assets/icons";
import { colors, fonts } from "../../../styles/base";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchList?: { [key: string]: any }[] | null;
  onChange?: (value: any) => void;
  isLoading?: boolean;
}

const CustomSearchInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = "text", searchList, isLoading, onChange, ...props }, ref) => {
    const [value, setValue] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const inputRef = useRef(null);

    const handleInputChange = (text: string) => {
      setValue(text);
    };
    const handleClearInput = () => {
      setValue("");
    };

    return (
      <View>
        <View style={styles.topPart}>
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => console.log("Back icon pressed")}
          >
            <ArrowLeft />
          </TouchableOpacity>
          <View style={styles.container}>
            <TextInput
              value={value}
              style={styles.input}
              onChangeText={handleInputChange}
              placeholder="Search GitHub"
              placeholderTextColor="#6e767d"
            />
            {value.length > 0 && (
              <TouchableOpacity
                onPress={handleClearInput}
                style={styles.clearIconContainer}
              >
                <CloseIcon />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {value && (
          <View style={styles.bottomPart}>
            {[
              { name: "repository", icon: <RepoIcon /> },
              { name: "user", icon: <UserIcon /> },
            ].map((e, i) => (
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
                      gap: 20,
                      paddingHorizontal: 16,
                    }}
                  >
                    {e.icon}
                    <Text style={styles.text}>{value}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  searchOption: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 18,
    alignItems: "center",
    color: colors.primary.white,
  },
  text: { color: colors.primary.white, fontSize: fonts.primary },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  bottomPart: { paddingTop: 6 },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    paddingBottom: 1,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderTopColor: "none",
    borderBottomColor: colors.border,
  },
  input: {
    fontSize: fonts.primary,
    color: colors.primary.white,
    height: 45,
    flex: 1,
  },
  clearIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  backIconContainer: {
    paddingRight: 22,
  },
});

export default CustomSearchInput;

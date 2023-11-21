import React from "react";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
} from "react-native";
import { CloseIcon } from "../../../assets/icons";
import { colors, fonts } from "../../../styles/base";
import { useAppState } from "../../../state/useState";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchList?: { [key: string]: any }[] | null;
  onChange?: (value: any) => void;
  isLoading?: boolean;
}

const CustomSearchInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = "text", searchList, isLoading, onChange, ...props }, ref) => {
    const [value, setValue] = useState("");
    const [clicked, setClicked] = useState(false);
    const { setTextValue }: any = useAppState();
    const PlatformIOS = Platform.OS === "ios";

    const handleInputChange = (text: string) => {
      setValue(text);
    };
    const handleClearInput = () => {
      setValue("");
      setTextValue("");

      console.log("helllooo");
    };

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={PlatformIOS ? styles.containerIOS : styles.container}>
          <TextInput
            value={value}
            autoFocus
            style={PlatformIOS ? styles.inputIOS : styles.input}
            onChangeText={(text) => {
              handleInputChange(text);
              setTextValue(text);
              if (onChange !== undefined) onChange(text);
            }}
            placeholder="Search GitHub"
            placeholderTextColor="#6e767d"
            onFocus={() => {
              setClicked(true);
            }}
          />
          {value.length > 0 && (
            <TouchableOpacity
              onPress={handleClearInput}
              style={styles.clearIconContainer}
            >
              {PlatformIOS ? (
                <View
                  style={{
                    padding: 1,
                    backgroundColor: "#7a797e",
                    borderRadius: 111,
                  }}
                >
                  <CloseIcon size={15} color="#19191a" />
                </View>
              ) : (
                <CloseIcon />
              )}
            </TouchableOpacity>
          )}
        </View>
        <View>
          {clicked && PlatformIOS && (
            <Text
              style={{
                color: colors.primary.blueIOS,
                fontSize: 17,
                marginLeft: 16,
              }}
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            >
              Cancel
            </Text>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
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
    marginLeft: 10,
  },
  containerIOS: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.primary.black,
    borderRadius: 10,
    backgroundColor: "#19191a",
  },
  input: {
    fontSize: fonts.primary,
    color: colors.primary.white,
    height: 45,
    flex: 1,
  },
  inputIOS: {
    fontSize: 16,
    color: colors.primary.white,
    height: 20,
    flex: 1,
  },
  clearIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomSearchInput;

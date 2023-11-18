import React from "react";
import { forwardRef, InputHTMLAttributes, useRef, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can replace FontAwesome with your desired icon set

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
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => console.log("Back icon pressed")}
        >
          <Icon name="arrow-left" size={20} color="#6e767d" />
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
              <Icon name="close" size={20} color="#6e767d" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 8,
    margin: 10,
    width: "80%",
    borderWidth: 1,
    borderTopColor: "none",
    borderBottomColor: "#30363d",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#e6edf3",
    height: 30,
  },
  clearIconContainer: {
    padding: 5,
  },
  backIconContainer: {
    paddingRight: 10,
  },
});

export default CustomSearchInput;

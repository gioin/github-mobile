import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import { colors } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";

interface ListProps extends TouchableHighlightProps {
  children?: ReactNode;
  showArrow?: boolean;
}

const List = forwardRef(
  (
    { children, showArrow = true, ...props }: ListProps,
    ref: ForwardedRef<TouchableHighlight>
  ) => {
    return (
      <TouchableHighlight
        style={styles.searchOption}
        underlayColor={colors.hover}
        {...props}
        ref={ref}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            width: "100%",
          }}
        >
          {children}
          {showArrow && Platform.OS === "ios" && (
            <View style={{ position: "absolute", right: 20 }}>
              <AntDesign name="right" size={16} color={"#5d5e61"} />
            </View>
          )}
        </View>
      </TouchableHighlight>
    );
  }
);

export default List;

const styles = StyleSheet.create({
  searchOption: {
    flexDirection: "row",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    borderBottomColor: Platform.OS === "ios" ? colors.border : "auto",
    gap: 10,
    paddingVertical: 18,
    alignItems: "center",
    color: colors.primary.white,
  },
});

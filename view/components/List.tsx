import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import { colors } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";

interface ListProps extends TouchableHighlightProps {
  children: ReactNode;
}

const List = forwardRef(
  (
    { children, ...props }: ListProps,
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
          <View style={{ position: "absolute", right: 20 }}>
            <AntDesign name="right" size={16} color={"#5d5e61"} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
);

export default List;

const styles = StyleSheet.create({
  searchOption: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 10,
    paddingVertical: 18,
    alignItems: "center",
    color: colors.primary.white,
  },
});

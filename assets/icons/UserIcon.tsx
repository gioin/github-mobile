import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export const UserIcon: React.FC = () => {
  return (
    <View style={styles.icon}>
      <Svg width={22} height={22} viewBox="0 0 16 16" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
          fill="#fefefe"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
});

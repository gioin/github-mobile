import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export const ArrowLeft: React.FC = () => {
  return (
    <View>
      <Svg width={20} height={20} viewBox="0 0 24 24" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.0358 12C22.0358 12.4142 21.7 12.75 21.2858 12.75L2.78577 12.75C2.37155 12.75 2.03577 12.4142 2.03577 12C2.03577 11.5858 2.37155 11.25 2.78577 11.25L21.2858 11.25C21.7 11.25 22.0358 11.5858 22.0358 12Z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.8161 4.46967C10.109 4.76256 10.109 5.23744 9.8161 5.53033L3.5232 11.8232C3.42557 11.9209 3.42557 12.0791 3.5232 12.1768L9.8161 18.4697C10.109 18.7626 10.109 19.2374 9.8161 19.5303C9.5232 19.8232 9.04833 19.8232 8.75544 19.5303L2.46254 13.2374C1.77912 12.554 1.77913 11.446 2.46254 10.7626L8.75544 4.46967C9.04833 4.17678 9.5232 4.17678 9.8161 4.46967Z"
          fill="#fff"
        />
      </Svg>
    </View>
  );
};

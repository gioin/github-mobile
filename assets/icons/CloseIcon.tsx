import React from "react";
import { Svg, Path } from "react-native-svg";

interface YourSvgComponentProps {
  className?: string;
  color?: string;
}

export const CloseIcon = ({ color }: YourSvgComponentProps) => (
  <Svg height="16" width="16" fill={color || "#7c8590"}>
    <Path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z" />
  </Svg>
);
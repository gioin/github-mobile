import { Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  primary: { black: "#02040a", white: "#fefefe" },
  secondary: { black: "#111419", white: "#7c8590" },
  hover: "#171b20",
  border: "#30363d",
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 18,
};

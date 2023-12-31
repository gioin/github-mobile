import { Dimensions, Platform } from "react-native";

const PlatformIOS = Platform.OS === "ios";
export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  primary: {
    black: "#02040a",
    white: "#fefefe",
    gray: "#21262d",
    blueIOS: "#007aff",
  },
  secondary: { black: !PlatformIOS ? "#111419" : "#19191a", white: "#6e767d" },
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
  lg: 21,
  primary: 16,
};

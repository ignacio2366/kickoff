import layout from "../styles/layout";
import { PixelRatio } from "react-native";

const useTheme = () => {
  const pixel = PixelRatio.getFontScale();
  const fonts = {
    regularfont: "regular",
    boldfont: "bold",
    mediumfont: "medium",
  };

  const fontsize = {
    header: 51 / pixel,
    regular: 14 / pixel,
    splash: 28 / pixel,
  };

  const color = {
    primary: "#D82A34",
    dark: "#1C1F24",
    secondary: "#8796A5",
    nav: "#1D1E24",
    white: "#FFFFFF",
    lightred: "#FFECEE",
    header: "#414358",
  };
  return { fonts, color, layout, fontsize };
};

export default useTheme;

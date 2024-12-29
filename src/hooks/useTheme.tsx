import layout from "../styles/layout";

const useTheme = () => {
  const fonts = {
    regularfont: "regular",
    boldfont: "bold",
    mediumfont: "medium",
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
  return { fonts, color, layout };
};

export default useTheme;

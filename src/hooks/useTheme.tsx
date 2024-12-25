import layout from "../styles/layout";

const useTheme = () => {
  const fonts = {
    regularfont: "regular",
    boldfont: "bold",
  };

  const color = {
    red: "red",
  };
  return { fonts, color, layout };
};

export default useTheme;

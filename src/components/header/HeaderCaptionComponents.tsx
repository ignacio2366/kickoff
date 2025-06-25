import useTheme from "@/hooks/useTheme";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ICLogoBrand from "../../assets/svg/ic-shoeslogo.svg";
import { Button } from "../button";
import { useCallback } from "react";
const { layout, color, fonts, fontsize } = useTheme();
function HeaderCaption(): JSX.Element {
  const testing = useCallback(() => {
    console.log("Pressed", fontsize.regular);
  }, []);
  return (
    <View style={[style.container, layout.colcenter]}>
      <Text style={style.caption}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem
        fugit non nemo hic, minus et
      </Text>

      <View style={[style.brand, layout.rowcenter]}>
        <ICLogoBrand height={42} width={150} />
        <Button onPress={testing} label="View" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "auto",
    paddingHorizontal: 16,
  },
  caption: {
    fontFamily: fonts.regularfont,
    fontSize: fontsize.regular,
    color: color.header,
    textAlign: "left",
    textOverflow: "normal",
  },
  brand: {
    marginTop: 36,
    gap: 16,
  },
});

export default HeaderCaption;

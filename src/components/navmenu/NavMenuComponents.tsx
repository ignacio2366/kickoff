import useTheme from "@/hooks/useTheme";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ICLogo from "../../assets/svg/snickers-logo.svg";
import ICMenu from "../../assets/svg/ic-menu.svg";
import ICCart from "../../assets/svg/ic-cart.svg";

import { useCallback } from "react";

const { layout, color, fonts } = useTheme();
const NavMenu = (): JSX.Element => {
  const test = useCallback(() => {
    console.log("Testing");
  }, []);
  return (
    <View style={[_style.navcontainer, layout.colcenter]}>
      <ICLogo height={36} />
      <View style={_style.menucontainer}>
        <Pressable onPress={test}>
          <ICMenu width={24} height={36} />
        </Pressable>
        <Pressable>
          <ICCart width={28} height={36} />
        </Pressable>
      </View>
    </View>
  );
};

const _style = StyleSheet.create({
  navcontainer: {
    width: "100%",
  },
  menucontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-start",
  },
});
export default NavMenu;

import { StyleSheet, Text, View } from "react-native";
import NavMenu from "../navmenu/NavMenuComponents";
import useTheme from "@/hooks/useTheme";

const { layout, fonts, color } = useTheme();
const Header = (): JSX.Element => {
  return (
    <View style={[layout.colstart, _style.headercontainer]}>
      <NavMenu />
      <View style={_style.caption}>
        <Text style={_style.headerSnikers}>You're Snikers</Text>
        <Text style={_style.headerCollection}>Collections</Text>
      </View>
    </View>
  );
};

const _style = StyleSheet.create({
  headercontainer: {
    backgroundColor: color.lightred,
    paddingHorizontal: 16,
    height: "auto",
    gap: 20,
    paddingBottom: 24,
  },
  caption: {
    width: "100%",
  },
  headerSnikers: {
    fontFamily: fonts.mediumfont,
    fontSize: 51,
    color: color.header,
    textAlign: "justify",
    lineHeight: 60,
  },
  headerCollection: {
    fontFamily: fonts.mediumfont,
    fontSize: 51,
    color: color.primary,
    textAlign: "justify",
    lineHeight: 60,
  },
});
export default Header;

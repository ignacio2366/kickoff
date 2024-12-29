import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    regular: require("../src/assets/fonts/PoppinsRegular.ttf"),
    medium: require("../src/assets/fonts/PoppinsMedium.ttf"),
    bold: require("../src/assets/fonts/PoppinsBold.ttf"),
    italic: require("../src/assets/fonts/PoppinsItalic.ttf"),
  });
  return (
    <>
      <StatusBar
        hidden={false}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />

      <Slot />
    </>
  );
}

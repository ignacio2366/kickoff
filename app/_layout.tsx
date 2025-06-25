import { ROUTE } from "@/constants/Route";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    regular: require("../src/assets/fonts/PoppinsRegular.ttf"),
    medium: require("../src/assets/fonts/PoppinsMedium.ttf"),
    semibold: require("../src/assets/fonts/Poppins-SemiBold.ttf"),
    bold: require("../src/assets/fonts/PoppinsBold.ttf"),
    italic: require("../src/assets/fonts/PoppinsItalic.ttf"),
  });
  useEffect(() => {
    loaded ? console.log(" fonts loaded") : console.log(" font error loading");
  }, [loaded]);
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

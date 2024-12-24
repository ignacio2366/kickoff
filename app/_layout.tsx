import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    regular: require("../assets/fonts/PoppinsRegular.ttf"),
    medium: require("../assets/fonts/PoppinsMedium.ttf"),
    bold: require("../assets/fonts/PoppinsBold.ttf"),
    italic: require("../assets/fonts/PoppinsItalic.ttf"),
  });
  return (
    <>
      <Slot />
    </>
  );
}

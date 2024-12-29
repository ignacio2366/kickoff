import { useRef, useEffect } from "react";
import { StatusBar, StyleSheet, View, BackHandler } from "react-native";
import LottieView from "lottie-react-native";
import useTheme from "../hooks/useTheme";
import { COLOR } from "../constants/Colors";
import layout from "../styles/layout";
import LOGO from "../assets/svg/snickers-logo.svg";
import { router } from "expo-router";
import { ROUTE } from "@/constants/Route";
const { color, fonts } = useTheme();

function SplashScreen(): JSX.Element {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

    setTimeout(() => {
      router.push(ROUTE.home);
    }, 100);
  }, []);
  return (
    <>
      <StatusBar hidden={true} translucent />
      <View style={[styles.container, layout.colcenter]}>
        <LOGO width={120} height={120} />
        <LottieView
          autoPlay
          ref={animationRef}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/xmas.json")}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: COLOR.lightred,
    gap: 8,
  },
  animationContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  caption: {
    fontFamily: "regular",
    fontSize: 24,
  },
});

export default SplashScreen;

import { useRef, useEffect } from "react";
import { Button, StatusBar, StyleSheet, Text, Image, View } from "react-native";
import LottieView from "lottie-react-native";
import useTheme from "../hooks/useTheme";
import { COLOR } from "../constants/Colors";
import layout from "../styles/layout";
import XSAD from "../assets/svg/snickers-logo.svg";
const { color, fonts } = useTheme();

function SplashScreen(): JSX.Element {
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);
  return (
    <>
      <StatusBar hidden={true} />
      <View style={[styles.container, layout.colcenter]}>
        <XSAD width={250} height={100} />
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
  text: {
    fontFamily: fonts.boldfont,
    color: color.red,
    fontSize: 25,
  },
});

export default SplashScreen;

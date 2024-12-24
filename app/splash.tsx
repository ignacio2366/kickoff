import { useRef, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
export default function App() {
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animationRef}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/xmas.json")}
      />
      <Text style={styles.caption}> HAPPY BADNEWS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  caption: {
    fontFamily: "regular",
    fontSize: 24,
  },
});

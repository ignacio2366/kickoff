import { View } from "react-native";
import SplashScreen from "@/src/screen/SplashScreen";
import useTheme from "@/src/hooks/useTheme";
const { layout } = useTheme();
export default function Splash() {
  return (
    <View style={layout.containerfluid}>
      <SplashScreen />
    </View>
  );
}

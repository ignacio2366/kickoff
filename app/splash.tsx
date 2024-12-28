import useTheme from "@/hooks/useTheme";
import SplashScreen from "@/screen/SplashScreen";
import { View } from "react-native";

const { layout } = useTheme();
export default function Splash() {
  return (
    <View style={layout.containerfluid}>
      <SplashScreen />
    </View>
  );
}

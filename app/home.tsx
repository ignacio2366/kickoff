import { COLOR } from "@/constants/Colors";
import HomePageScreen from "@/screen/HomePageScreen";
import layout from "@/styles/layout";
import { SafeAreaView, StatusBar } from "react-native";

const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={layout.containerfluid}>
      <StatusBar backgroundColor={COLOR.lightred} />
      <HomePageScreen />
    </SafeAreaView>
  );
};
export default Home;

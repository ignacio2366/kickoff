import { Button } from "@/components";
import HeaderCaption from "@/components/header/HeaderCaptionComponents";
import Header from "@/components/header/HeaderComponent";
import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";

const { layout } = useTheme();
const HomePageScreen = (): JSX.Element => {
  return (
    <View style={layout.containerfluid}>
      <Header />
      <HeaderCaption />
    </View>
  );
};

export default HomePageScreen;

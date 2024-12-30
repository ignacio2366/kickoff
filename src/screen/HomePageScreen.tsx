import CarouselItems from "@/components/cart/CarouselItems";
import HeaderCaption from "@/components/header/HeaderCaptionComponents";
import Header from "@/components/header/HeaderComponent";
import useTheme from "@/hooks/useTheme";
import { ScrollView } from "react-native";

const { layout } = useTheme();
const HomePageScreen = (): JSX.Element => {
  return (
    <ScrollView style={[layout.containerfluid]}>
      <Header />
      <HeaderCaption />
      <CarouselItems />
    </ScrollView>
  );
};

export default HomePageScreen;

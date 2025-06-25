import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";
import ItemCart from "./ItemCart";

const { layout, fonts, fontsize } = useTheme();
const CarouselItems = (): JSX.Element => {
  return (
    <View style={{ marginTop: 32 }}>
      <Text style={style.title}>New Items Arrive</Text>
      <View style={style.carousel}>
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  carousel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    marginVertical: 32,
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.semiboldfont,
    fontSize: fontsize.regular,
    textTransform: "capitalize",
  },
});

export default CarouselItems;

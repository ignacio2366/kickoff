import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";
import ItemCart from "./ItemCart";

const { layout } = useTheme();
const CarouselItems = (): JSX.Element => {
  return (
    <>
      <Text>New Items Arrive</Text>
      <View style={_style.carousel}>
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </View>
    </>
  );
};

const _style = StyleSheet.create({
  carousel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
});

export default CarouselItems;

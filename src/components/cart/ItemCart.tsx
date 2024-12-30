import useTheme from "@/hooks/useTheme";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
const { layout, color, fonts } = useTheme();
const ItemCart = (): JSX.Element => {
  return (
    <View style={[_style.cart]}>
      <ImageBackground
        source={require("./../../assets/images/nitro-shoes.png")}
        resizeMode="contain"
        height={200}
        width={200}
        style={_style.image}
      >
        <Text style={_style.badge}>New</Text>
      </ImageBackground>
      <View style={[layout.rowbetween, _style.details]}>
        <View style={[_style.left]}>
          <Text>(120 reviews)</Text>
          <Text>Lorem Ipsum</Text>
          <Text>7500 php</Text>
        </View>
        <View style={_style.right}>
          <Text>24 Solds</Text>
          <Text>SA</Text>
        </View>
      </View>
    </View>
  );
};

const _style = StyleSheet.create({
  cart: {
    width: 171,
    height: "auto",

    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image: {
    height: 150,
    width: "100%",
    backgroundColor: "#F7F7F7",
    borderTopLeftRadius: 32,
  },
  badge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: color.primary,
    borderTopLeftRadius: 8,
    color: color.white,
    fontFamily: fonts.mediumfont,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 10,
    borderWidth: 0,
  },
  details: {
    width: "100%",
  },
  left: {
    width: "65%",
  },
  right: {
    width: "35%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ItemCart;

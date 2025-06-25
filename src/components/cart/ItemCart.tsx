import useTheme from "@/hooks/useTheme";

import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import AddCartBtn from "../button/AddCartBtn";

const { layout, color, fonts } = useTheme();
const ItemCart = (): JSX.Element => {
  const testing = useCallback(() => {
    console.log("Pressed");
  }, []);
  return (
    <View style={[style.cart]}>
      <ImageBackground
        source={require("./../../assets/images/nitro-shoes.png")}
        resizeMode="contain"
        height={200}
        width={200}
        style={style.image}
      >
        <Text style={style.badge}>New</Text>
      </ImageBackground>
      <View style={[layout.rowbetween, style.details]}>
        <View style={[style.left]}>
          <Text style={style.txtreview}>24 Solds</Text>
          <Text style={style.txtname}>Lorem Ipsum</Text>
          <View style={layout.rowstart}>
            <Text style={style.txtprice}>7500</Text>
            <Text style={style.txtreview}>php</Text>
          </View>
        </View>
        <View style={style.right}>
          <AddCartBtn onPress={testing} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cart: {
    width: 171,
    height: "auto",

    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 4,
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
    right: 12,
    backgroundColor: color.primary,
    borderTopLeftRadius: 8,
    color: color.white,
    fontFamily: fonts.mediumfont,
    paddingVertical: 2,
    paddingHorizontal: 9,
    fontSize: 8,
  },
  details: {
    width: "100%",
  },
  left: {
    width: "65%",
    paddingHorizontal: 4,
  },
  right: {
    width: "35%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 8,
  },
  txtreview: {
    fontFamily: fonts.regularfont,
    color: color.secondary,
    fontSize: 12,
  },
  txtname: {
    color: color.dark,
    fontSize: 14,
    fontFamily: fonts.boldfont,
  },
  txtprice: {
    color: color.dark,
    fontSize: 14,
    fontFamily: fonts.semiboldfont,

    letterSpacing: 0,
  },
});

export default ItemCart;

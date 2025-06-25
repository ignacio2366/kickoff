import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import ICAddCart from "../../assets/svg/ic-addcart.svg";
const AddCartBtn: React.FC<PressableProps> = (props) => {
  return (
    <Pressable {...props}>
      <ICAddCart style={style.image} width={28} height={28} />
    </Pressable>
  );
};
const style = StyleSheet.create({
  image: {
    height: 24,
    width: 24,
  },
});
export default AddCartBtn;

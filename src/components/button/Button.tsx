import useTheme from "@/hooks/useTheme";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

interface Props {
  style?: ViewStyle;
  textstyle?: TextStyle;

  label: string;
  onPress: () => void;
}

const { color, fonts } = useTheme();
export const Button = ({ label, onPress, style, textstyle }: Props) => {
  return (
    <Pressable style={style || _style.button} onPress={onPress}>
      <Text style={textstyle || _style.label}>{label}</Text>
    </Pressable>
  );
};

const _style = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 32,
    backgroundColor: color.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    color: color.white,
    fontFamily: fonts.regularfont,
    fontSize: 16,
  },
});

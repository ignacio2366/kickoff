import useTheme from "@/hooks/useTheme";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle;
  label: string;
  onPress: () => void;
}

const { color, fonts } = useTheme();
export const Button = ({ style, label, onPress }: Props) => {
  return (
    <Pressable style={style || _style.button} onPress={onPress}>
      <Text style={_style.label}>{label}</Text>
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

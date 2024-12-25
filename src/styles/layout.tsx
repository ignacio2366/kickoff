import { ViewStyle } from "react-native";

export default {
  containerfluid: {
    flexDirection: "column",
    flex: 1,
    height: "auto",
  },
  container: {
    flexDirection: "column",
    flex: 1,
    height: "auto",
    paddingHorizontal: 16,
  },
  rowstart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  colstart: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  colcenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
} as const satisfies Record<string, ViewStyle>;

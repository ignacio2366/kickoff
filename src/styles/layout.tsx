import { ViewStyle } from "react-native";

export default {
  containerfluid: {
    flexDirection: "column",
    flex: 1,
    height: "auto",
    gap: 8,
  },
  container: {
    flexDirection: "column",
    flex: 1,
    height: "auto",
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  rowstart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  rowcenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  colstart: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    gap: 8,
  },
  colcenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
} as const satisfies Record<string, ViewStyle>;

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
    paddingVertical: 0,
  },
  rowstart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rowbetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  colcenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
} as const satisfies Record<string, ViewStyle>;

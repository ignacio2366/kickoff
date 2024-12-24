import { ROUTE } from "@/constants/Route";
import { Redirect, Slot, Stack } from "expo-router";

export default function Mobile() {
  return <Redirect href={ROUTE.splash} />;
}

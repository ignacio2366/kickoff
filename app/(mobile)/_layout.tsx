import { ROUTE } from "@/constants/Route";
import { Redirect } from "expo-router";

export default function Mobile() {
  return <Redirect href={ROUTE.home} />;
}

import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { numbers } from "./numbers";

export const data: WheelData[] = numbers.map(number => {
  return {
    option: number.value.toString(),
    style: { backgroundColor: number.color }
  }
});
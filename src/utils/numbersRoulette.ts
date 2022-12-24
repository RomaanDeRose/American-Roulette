import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { Color } from "../models/Chances.enums";
import { BLACK_COLOR, GREEN_COLOR, RED_COLOR } from "./constants/colors";
import { numbers } from "./numbers";

export const data: WheelData[] = numbers.map(number => {
  return {
    option: number.value,
    style: { backgroundColor: ((number.color === Color.BLACK) ? BLACK_COLOR : (number.color === Color.RED) ? RED_COLOR : GREEN_COLOR) }
  }
});
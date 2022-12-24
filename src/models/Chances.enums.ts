import { BetNumber } from "./Number.interface";

export enum Color {
  RED,
  BLACK,
}

export enum Parity {
  ODD,
  EVEN,
}

export enum Size {
  MINOR,
  MAJOR,
}

export enum Column {
  FIRST_COLUMN,
  SECOND_COLUMN,
  THIRD_COLUMN,
}

export enum Dozen {
  FIST_DOZEN,
  SECOND_DOZEN,
  THIRD_DOZEN,
}

export interface Chance {
  name: string,
  numbers: BetNumber[],
  ratio: number
}
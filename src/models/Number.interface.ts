import { Color, Column, Dozen, Parity, Size } from "./Chances.enums";

export interface Number {
    value: number,
    color: Color,
    parity: Parity,
    size: Size,
    column: Column,
    dozen: Dozen
}

// export const numbers: [
//     Number, Number, Number, Number, Number,
//     Number, Number, Number, Number, Number,
//     Number, Number, Number, Number, Number,
//     Number, Number, Number, Number, Number,
//     Number, Number, Number, Number, Number,
//     Number, Number, Number, Number, Number,
//     Number, Number, Number, Number, Number,
//     Number, Number
// ] = []
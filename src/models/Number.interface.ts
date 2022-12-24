import { Color, Column, Dozen, Parity, Size } from "./Chances.enums";

export interface BetNumber {
    value: string,
    color: Color | null,
    parity: Parity | null,
    size: Size | null,
    column: Column | null,
    dozen: Dozen | null
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
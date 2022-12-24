import { Chance, Color, Column, Dozen, Parity, Size } from "../models/Chances.enums"
import { BetNumber } from "../models/Number.interface"
const numbers: BetNumber[] = [
    {
      value: '0',
      color: null,
      size: null,
      parity: null,
      dozen: null,
      column: null
    }, {
      value: '32',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '15',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '19',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '4',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.FIST_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '21',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '2',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.FIST_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '25',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '17',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '34',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '6',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.FIST_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '27',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '13',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '36',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '11',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.FIST_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '30',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '8',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.FIST_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '23',
      color: Color.RED,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '10',
      color: Color.BLACK,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.FIST_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '5',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.FIST_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '24',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '16',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '33',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '1',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.FIST_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '20',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '14',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '31',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '9',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.FIST_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '22',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.SECOND_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '18',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.SECOND_DOZEN,
      column:Column.THIRD_COLUMN
    }, {
      value: '29',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '7',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.FIST_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '28',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.FIRST_COLUMN
    }, {
      value: '12',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.EVEN,
      dozen: Dozen.FIST_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '35',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.ODD,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.SECOND_COLUMN
    }, {
      value: '3',
      color: Color.RED,
      size: Size.MINOR,
      parity: Parity.ODD,
      dozen: Dozen.FIST_DOZEN,
      column: Column.THIRD_COLUMN
    }, {
      value: '26',
      color: Color.BLACK,
      size: Size.MAJOR,
      parity: Parity.EVEN,
      dozen: Dozen.THIRD_DOZEN,
      column: Column.SECOND_COLUMN
    }
]

const red: Chance = {
    name: 'red',
    numbers: [],
    ratio: 2
}

const black: Chance = {
    name: 'black',
    numbers: [],
    ratio: 2
}

const even: Chance = {
    name: 'even',
    numbers: [],
    ratio: 2
}

const odd: Chance = {
    name: 'odd',
    numbers: [],
    ratio: 2
}

const minor: Chance = {
    name: 'minor',
    numbers: [],
    ratio: 2
}

const major: Chance = {
    name: 'major',
    numbers: [],
    ratio: 2
}

const dozen1: Chance = {
    name: '1st',
    numbers: [],
    ratio: 3
}

const dozen2: Chance = {
    name: '2nd',
    numbers: [],
    ratio: 3
}

const dozen3: Chance = {
    name: '3rd',
    numbers: [],
    ratio: 3
}

const column1: Chance = {
    name: 'first column',
    numbers: [],
    ratio: 3
}

const column2: Chance = {
    name: 'second column',
    numbers: [],
    ratio: 3
}

const column3: Chance = {
    name: 'third column',
    numbers: [],
    ratio: 3
}

const dozens = [dozen1, dozen2, dozen3];

const columns = [column1, column2, column3];

const colors = {red: red, black: black};

const sizes = {minor: minor, major: major};

const parities = {even: even, odd: odd};

const chances = [red, black, even, odd, minor, major, ...dozens, ...columns];

setCategories(numbers);

function setCategories(numbers: BetNumber[]) {
  numbers.forEach(number => {
    setColor(number);
    setSize(number);
    setParity(number);
    setDozen(number);
    setColumn(number);
  })
}

function setColor(number: BetNumber) {
  switch (number.color) {
    case Color.BLACK: black.numbers.push(number); break;
    case Color.RED: red.numbers.push(number); break;
    default: break;
  }
}

function setSize(number: BetNumber) {
  switch (number.size) {
    case Size.MAJOR: major.numbers.push(number); break;
    case Size.MINOR: minor.numbers.push(number); break;
    default: break;
  }
}

function setParity(number: BetNumber) {
  switch (number.parity) {
    case Parity.EVEN: even.numbers.push(number); break;
    case Parity.ODD: odd.numbers.push(number); break;
    default: break;
  }
}

function setDozen(number: BetNumber) {
  switch (number.dozen) {
    case Dozen.FIST_DOZEN: dozen1.numbers.push(number); break;
    case Dozen.SECOND_DOZEN: dozen2.numbers.push(number); break;
    case Dozen.THIRD_DOZEN: dozen3.numbers.push(number); break;
    default: break;
  }
}

function setColumn(number: BetNumber) {
  switch (number.column) {
    case Column.FIRST_COLUMN: column1.numbers.push(number); break;
    case Column.SECOND_COLUMN: column2.numbers.push(number); break;
    case Column.THIRD_COLUMN: column3.numbers.push(number); break;
    default: break;
  }
}

export {numbers, chances, dozens, columns, colors, sizes, parities};
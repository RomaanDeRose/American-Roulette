import { GREEN_COLOR, RED_COLOR, BLACK_COLOR } from "./constants/colors"
const numbers = [
    {
      value: '0',
      color: GREEN_COLOR,
    }, {
      value: '32',
      color: RED_COLOR,
    }, {
      value: '15',
      color: BLACK_COLOR,
    }, {
      value: '19',
      color: RED_COLOR,
    }, {
      value: '4',
      color: BLACK_COLOR,
    }, {
      value: '21',
      color: RED_COLOR,
    }, {
      value: '2',
      color: BLACK_COLOR,
    }, {
      value: '25',
      color: RED_COLOR,
    }, {
      value: '17',
      color: BLACK_COLOR,
    }, {
      value: '34',
      color: RED_COLOR,
    }, {
      value: '6',
      color: BLACK_COLOR,
    }, {
      value: '27',
      color: RED_COLOR,
    }, {
      value: '13',
      color: BLACK_COLOR,
    }, {
      value: '36',
      color: RED_COLOR,
    }, {
      value: '11',
      color: BLACK_COLOR,
    }, {
      value: '30',
      color: RED_COLOR,
    }, {
      value: '8',
      color: BLACK_COLOR,
    }, {
      value: '23',
      color: RED_COLOR,
    }, {
      value: '10',
      color: BLACK_COLOR,
    }, {
      value: '5',
      color: RED_COLOR,
    }, {
      value: '24',
      color: BLACK_COLOR,
    }, {
      value: '16',
      color: RED_COLOR,
    }, {
      value: '33',
      color: BLACK_COLOR,
    }, {
      value: '1',
      color: RED_COLOR,
    }, {
      value: '20',
      color: BLACK_COLOR,
    }, {
      value: '14',
      color: RED_COLOR,
    }, {
      value: '31',
      color: BLACK_COLOR,
    }, {
      value: '9',
      color: RED_COLOR,
    }, {
      value: '22',
      color: BLACK_COLOR,
    }, {
      value: '18',
      color: RED_COLOR,
    }, {
      value: '29',
      color: BLACK_COLOR,
    }, {
      value: '7',
      color: RED_COLOR,
    }, {
      value: '28',
      color: BLACK_COLOR,
    }, {
      value: '12',
      color: RED_COLOR,
    }, {
      value: '35',
      color: BLACK_COLOR,
    }, {
      value: '3',
      color: RED_COLOR,
    }, {
      value: '26',
      color: BLACK_COLOR,
    }
]

const red = {
    name: 'red',
    numbers: [],
    ratio: 2
}

const black = {
    name: 'black',
    numbers: [],
    ratio: 2
}

const even = {
    name: 'even',
    numbers: [],
    ratio: 2
}

const odd = {
    name: 'odd',
    numbers: [],
    ratio: 2
}

const minor = {
    name: 'minor',
    numbers: [],
    ratio: 2
}

const major = {
    name: 'major',
    numbers: [],
    ratio: 2
}

const dozen1 = {
    name: '1st',
    numbers: [],
    ratio: 3
}

const dozen2 = {
    name: '2nd',
    numbers: [],
    ratio: 3
}

const dozen3 = {
    name: '3rd',
    numbers: [],
    ratio: 3
}

const column1 = {
    name: 'first column',
    numbers: [],
    ratio: 3
}

const column2 = {
    name: 'second column',
    numbers: [],
    ratio: 3
}

const column3 = {
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

setNumbersCategories(numbers);

function setNumbersCategories(numbers) {
  numbers.forEach(number => {
    const i = Number(number.value);
    if (i < 19) {
      minor.numbers.push(number);
      if (i < 13) {
        dozen1.numbers.push(number);
      } else {
        dozen2.numbers.push(number);
      }
    } else {
      major.numbers.push(number);
      if (i < 25) {
        dozen2.numbers.push(number);
      } else {
        dozen3.numbers.push(number);
      }
    }

    if (number.color === BLACK_COLOR) {
      black.numbers.push(number);
    } else {
      red.numbers.push(number);
    }
    
    if (i%2 === 0) {
      even.numbers.push(number);
    } else {
      odd.numbers.push(number);
    }

    if (i%3 === 0) {
      column3.numbers.push(number);
    } else if ((i - 2)%3 === 0) {
      column2.numbers.push(number);
    } else {
      column1.numbers.push(number);
    }
  });
}

export {numbers, chances, dozens, columns, colors, sizes, parities};
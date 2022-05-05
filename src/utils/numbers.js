const numbers = [
    {
        value: 0,
        color: 'none',
        bets: 0,
    }, {
        value: 1,
        color: 'red',
        bets: 0,
    }, {
        value: 2,
        color: 'black',
        bets: 0,
    }, {
        value: 3,
        color: 'red',
        bets: 0,
    }, {
        value: 4,
        color: 'black',
        bets: 0,
    }, {
        value: 5,
        color: 'red',
        bets: 0,
    }, {
        value: 6,
        color: 'black',
        bets: 0,
    }, {
        value: 7,
        color: 'red',
        bets: 0,
    }, {
        value: 8,
        color: 'black',
        bets: 0,
    }, {
        value: 9,
        color: 'red',
        bets: 0,
    }, {
        value: 10,
        color: 'black',
        bets: 0,
    }, {
        value: 11,
        color: 'black',
        bets: 0,
    }, {
        value: 12,
        color: 'red',
        bets: 0,
    }, {
        value: 13,
        color: 'black',
        bets: 0,
    }, {
        value: 14,
        color: 'red',
        bets: 0,
    }, {
        value: 15,
        color: 'black',
        bets: 0,
    }, {
        value: 16,
        color: 'red',
        bets: 0,
    }, {
        value: 17,
        color: 'black',
        bets: 0,
    }, {
        value: 18,
        color: 'red',
        bets: 0,
    }, {
        value: 19,
        color: 'red',
        bets: 0,
    }, {
        value: 20,
        color: 'black',
        bets: 0,
    }, {
        value: 21,
        color: 'red',
        bets: 0,
    }, {
        value: 22,
        color: 'black',
        bets: 0,
    }, {
        value: 23,
        color: 'red',
        bets: 0,
    }, {
        value: 24,
        color: 'black',
        bets: 0,
    }, {
        value: 25,
        color: 'red',
        bets: 0,
    }, {
        value: 26,
        color: 'black',
        bets: 0,
    }, {
        value: 27,
        color: 'red',
        bets: 0,
    }, {
        value: 28,
        color: 'black',
        bets: 0,
    }, {
        value: 29,
        color: 'black',
        bets: 0,
    }, {
        value: 30,
        color: 'red',
        bets: 0,
    }, {
        value: 31,
        color: 'black',
        bets: 0,
    }, {
        value: 32,
        color: 'red',
        bets: 0,
    }, {
        value: 33,
        color: 'black',
        bets: 0,
    }, {
        value: 34,
        color: 'red',
        bets: 0,
    }, {
        value: 35,
        color: 'black',
        bets: 0,
    }, {
        value: 36,
        color: 'red',
        bets: 0,
    }
]

const red = {
    name: 'red numbers',
    numbers: [],
    ratio: 2,
    bets: 0
}

const black = {
    name: 'black numbers',
    numbers: [],
    ratio: 2,
    bets: 0
}

const pair = {
    name: 'pair numbers',
    numbers: [],
    ratio: 2,
    bets: 0
}

const odd = {
    name: 'odd numbers',
    numbers: [],
    ratio: 2,
    bets: 0
}

const minor = {
    name: 'minor numbers',
    numbers: [],
    ratio: 2,
    bets: 0
}

const major = {
    name: 'major numbers',
    numbers: [],
    ratio: 2,
    bets: 0
}

const dozen1 = {
    name: '1st',
    numbers: [],
    ratio: 3,
    bets: 0
}

const dozen2 = {
    name: '2nd',
    numbers: [],
    ratio: 3,
    bets: 0
}

const dozen3 = {
    name: '3rd',
    numbers: [],
    ratio: 3,
    bets: 0
}

const column1 = {
    name: 'first column',
    numbers: [],
    ratio: 3,
    bets: 0
}

const column2 = {
    name: 'second column',
    numbers: [],
    ratio: 3,
    bets: 0
}

const column3 = {
    name: 'third column',
    numbers: [],
    ratio: 3,
    bets: 0
}

const dozens = [dozen1, dozen2, dozen3];

const columns = [column1, column2, column3];

const chances = [red, black, pair, odd, minor, major, ...dozens, ...columns];

for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

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

    if (number.color === 'black') {
        black.numbers.push(number);
    } else {
        red.numbers.push(number);
    }
    
    if (i%2 === 0) {
        pair.numbers.push(number);
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
}

export {numbers, chances, dozens, columns};
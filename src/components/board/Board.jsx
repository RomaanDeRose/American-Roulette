import { useContext, useState } from "react";
import { useAudio } from "../../hooks/useAudio";
import Fichas from "../../assets/audio/fichas-roulette.mp3";
import { numbers, chances } from "../../utils/numbers";
import "./Board.scss";
import CasinoContext from "../../contexts/CasinoContext";


const [zero, ...restNumbers] = numbers;
const colors = [chances[0], chances[1]];
const parities = [chances[2], chances[3]];
const sizes = [chances[4], chances[5]];
const dozens = [chances[6], chances[7], chances[8]];
const columns = [chances[9], chances[10], chances[11]];

const [pair, odd] = parities;
const [minor, major] = sizes;

function Board() {

  const {selectedNumbers, setSelectedNumbers} = useContext(CasinoContext);

  const [preselectedNumbers, setPreselectedNumbers] = useState([]);

  const [toggle] = useAudio(Fichas, 2);

  const userChanceBet = (chance, numbers) => {

    numbers.forEach(number => {
      number.bets++;
    })
    
    const isBet = chance.bets === 0;
    
    chance.bets++;
    
    console.log(chance)
    if (isBet) {
      setSelectedNumbers([
        ...selectedNumbers,
        ...numbers
      ]);
    } else {
      setSelectedNumbers([
        ...selectedNumbers
      ]);
    }

    

  }

  const userFullBet = (number) => {
    if (selectedNumbers.map((n) => n.value).includes(number.value)) {
      const existedBetNumber = selectedNumbers.map((n) => {
        if (n.value === number.value) {
          return {
            ...n,
            bets: n.bets + 1,
          };
        }
        return n;
      });
      setSelectedNumbers(existedBetNumber);
    } else {
      setSelectedNumbers([
        ...selectedNumbers,
        {
          value: number.value,
          color: number.color,
          bets: number.bets + 1,
        },
      ]);
    }
    toggle();
  };

  function handleHover(numbers) {
    const values = numbers.map(number => number.value);
    setPreselectedNumbers([...values]);
    console.log(values, preselectedNumbers);
  }

  return (
    <div id="Board">
      <div className="container">
        <span
          className="number number--zero"
          style={{ cursor: "pointer" }}
          onClick={() => userFullBet({ value: 0, color: "green", bets: 0 })}
        >
          {zero.value}
        </span>
        <div className="common-numbers">
          {restNumbers.map((number) => (
            <span
              className={`
                number
                ${preselectedNumbers.includes(number.value) ? 'number--preselected' : ''}
              `}
              key={number.value}
              style={{ background: number.color }}
              onClick={() => {
                userFullBet(number);
              }}
            >
              {number.value}
            </span>
          ))}
        </div>

        <div className="columns">
          {columns.map((column, i) => (
            <span className="column" key={column.name} 
            onClick={() => { userChanceBet(columns[columns.length + (-i-1)], columns[columns.length + (-i-1)].numbers); }}
            onMouseOver={() => handleHover(columns[columns.length + (-i-1)].numbers)} 
            onMouseLeave={() => handleHover([])}
            >
              {column.name} 2:1
            </span>
          ))}
        </div>

        <div className="dozens">
          {dozens.map((dozen, i) => (
            <span className="dozen" key={dozen.name} 
            onClick={() => { userChanceBet(dozen, dozen.numbers); }}
            onMouseOver={() => handleHover(dozen.numbers)} 
            onMouseLeave={() => handleHover([])}
            >
              {dozen.name} 2:1
            </span>
          ))}
        </div>

        <div className="double-chances">
          <span className="chance chance__size" 
          onClick={() => { userChanceBet(minor, minor.numbers); }}
          onMouseOver={() => handleHover(minor.numbers)} 
          onMouseLeave={() => handleHover([])}
          >
            {minor.name}
          </span>
          <span className="chance chance__parity" 
          onClick={() => { userChanceBet(pair, minor.numbers); }}
          onMouseOver={() => handleHover(pair.numbers)} 
          onMouseLeave={() => handleHover([])}
          >
            {pair.name}
          </span>

          {colors.map((color, i) => (
            <span className="chance chance__color" key={color.name} 
            onClick={() => { userChanceBet(color, color.numbers); }} 
            onMouseOver={() => handleHover(color.numbers)} 
            onMouseLeave={() => handleHover([])}>
              {color.name}
            </span>
          ))}

          <span className="chance chance__parity" 
          onClick={() => { userChanceBet(odd, odd.numbers); }} 
          onMouseOver={() => handleHover(odd.numbers)} 
          onMouseLeave={() => handleHover([])}
          >
            {odd.name}
          </span>
          <span className="chance chance__size" 
          onClick={() => { userChanceBet(major, major.numbers); }}
          onMouseOver={() => handleHover(major.numbers)} 
          onMouseLeave={() => handleHover([])}
          >
            {major.name}
          </span>
        </div>
      </div>

    </div>
  );
}

export default Board;

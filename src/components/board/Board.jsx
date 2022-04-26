import "./Board.scss";
import { numbers, chances } from "../../utils/numbers";

const [zero, ...restNumbers] = numbers;
export const colors = [chances[0], chances[1]];
const parities = [chances[2], chances[3]];
const sizes = [chances[4], chances[5]];
const dozens = [chances[6], chances[7], chances[8]];
const columns = [chances[9], chances[10], chances[11]];

const [pair, odd] = parities;
const [minor, major] = sizes;

function Board({ selectedNumbers, setSelectedNumbers }) {
  const userBet = (number) => {
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
  };

  return (
    <div id="Board">
      <div className="container">
        <span
          className="number number--zero"
          onClick={() => userBet({ value: 0, color: "green", bets: 0 })}
        >
          {zero.value}
        </span>
        <div className="common-numbers">
          {restNumbers.map((number) => (
            <span
              className="number"
              key={number.value}
              style={{ background: number.color }}
              onClick={() => {
                userBet(number);
                console.log(number, number.value);
              }}
            >
              {number.value}
            </span>
          ))}
        </div>
        <div className="columns">
          {columns.map((column) => (
            <span className="column" key={column.name}>
              {column.name} 2:1
            </span>
          ))}
        </div>
        <div className="dozens">
          {dozens.map((dozen) => (
            <span className="dozen" key={dozen.name}>
              {dozen.name} 2:1
            </span>
          ))}
        </div>
        <div className="double-chances">
          <span className="chance chance__size">{minor.name}</span>
          <span className="chance chance__parity">{pair.name}</span>
          {colors.map((color) => (
            <span className="chance chance__color" key={color.name}>
              {color.name}
            </span>
          ))}
          <span className="chance chance__parity">{odd.name}</span>
          <span className="chance chance__size">{major.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Board;

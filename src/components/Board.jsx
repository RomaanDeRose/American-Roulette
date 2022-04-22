import "./Board.scss";
import { numbers, chances } from "../utils/numbers";

const [zero, ...restNumbers] = numbers;

function Board({ selectedNumbers, setSelectedNumbers }) {
  console.log(chances);
  console.log(restNumbers);

  const userBet = (number) => {
    console.log(number, number.value);
    if (selectedNumbers.map((n) => n.value).includes(number.value)) {
      alert("Ya apostaste el número: " + number.value);
    } else {
      setSelectedNumbers([
        ...selectedNumbers,
        {
          value: number.value,
          color: number.color,
        },
      ]);
    }
  };

  return (
    <div id="Board">
      <div>
        <span
          style={{
            background: "green",
            color: "white",
            display: "inline-block",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => userBet({ value: 0, color: "green" })}
        >
          {zero.value}
        </span>
        <div className="common-numbers">
          {restNumbers.map((number) => (
            <span
              className="number"
              key={number.value}
              style={{ background: number.color, color: "white" }}
              onClick={() => userBet(number)}
            >
              {number.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;

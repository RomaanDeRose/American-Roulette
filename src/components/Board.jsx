import "./Board.scss";
import { numbers, chances } from "../utils/numbers";

const [zero, ...restNumbers] = numbers;

function Board({ selectedNumbers, setSelectedNumbers }) {
  console.log(chances);
  console.log(restNumbers);

  return (
    <div id="Board">
      <div>
        <span style={{ background: "green", color: "white" }}>
          {zero.value}
        </span>
        <div className="common-numbers">
          {restNumbers.map((number) => (
            <span
              className="number"
              key={number.value}
              style={{ background: number.color, color: "white" }}
              onClick={() =>
                setSelectedNumbers([
                  ...selectedNumbers,
                  {
                    value: number.value,
                    color: number.color,
                  },
                ])
              }
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

import "./Board.scss";
import { numbers, chances } from "../utils/numbers";

const [zero, ...restNumbers] = numbers;
function Board() {
  console.log(chances);
  return (
    <div id="Board">
      <div>
        <span style={{ background: "green", color: "white" }}>
          {zero.value}
        </span>
        <div>
          {restNumbers.map((number) => (
            <span
              key={number.value}
              style={{ background: number.color, color: "white" }}
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

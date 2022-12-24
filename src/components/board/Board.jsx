import { data as numbers } from "../../utils/numbersRoulette";
import Columns from "./components/chances/triple/Columns";
import Dozens from "./components/chances/triple/Dozens";
import DoubleChances from "./components/chances/double/DoubleChances";
import Number from "./components/numbers/Number";
import StreetsAndLines from "./components/numbers/StreetsAndLines/StreetsAndLines";
import "./Board.scss";

function Board() {
  const [zero, ...restNumbers] = numbers;
  const orderedNumbers = restNumbers.sort((n1, n2) => +n1.option - (+n2.option));

  return (
    <div id="Board">
      <div className="container">
        <div className="dirty-numbers">
          <Number number={zero} />
        </div>
        <div className="common-numbers">
          {orderedNumbers.map((number, i) => (
            <Number number={number} key={i}/>
          ))}
        </div>
        <StreetsAndLines/>
      <Columns />

      <Dozens />

      <DoubleChances />
      </div>
    </div>
  );
}

export default Board;

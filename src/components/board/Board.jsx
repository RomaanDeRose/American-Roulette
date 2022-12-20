import { numbers } from "../../utils/numbers";
import Columns from "./components/chances/triple/Columns";
import Dozens from "./components/chances/triple/Dozens";
import DoubleChances from "./components/chances/double/DoubleChances";
import Number from "./components/numbers/Number";
import StreetsAndLines from "./components/numbers/StreetsAndLines/StreetsAndLines";
import "./Board.scss";

function Board() {
  const [zero, ...restNumbers] = numbers;
  return (
    <div id="Board">
      <div className="container">
        <div className="dirty-numbers">
          <Number number={zero} />
        </div>
        <div className="common-numbers">
          {restNumbers.map((number, i) => (
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

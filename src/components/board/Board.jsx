import { useContext, useState } from "react";
import { useAudio } from "../../hooks/useAudio";
import Fichas from "../../assets/audio/fichas-roulette.mp3";
import Ficha from "../../assets/images/ficha.png";
import { numbers } from "../../utils/numbers";
import "./Board.scss";
import Columns from "./components/chances/triple/Columns";
import Dozens from "./components/chances/triple/Dozens";
import { CasinoContext } from "../../contexts/CasinoContext";
import { BoardContext } from "../../contexts/BoardContext";
import DoubleChances from "./components/chances/double/DoubleChances";
import Line from "./components/numbers/Line";
import Number from "./components/numbers/Number";
import { useParams } from "react-router-dom";

function Board() {
  const { selectedNumbers, setSelectedNumbers, userFullBet } =
    useContext(CasinoContext);

  const { preselectedNumbers, setPreselectedNumbers } =
    useContext(BoardContext);

  const [toggle] = useAudio(Fichas, 2);

  const [zero, ...restNumbers] = numbers;

  const lines = [];

  for (let i = 1; i < 37; i = i + 3) {
    lines.push(<Line numbers={[i, i + 1, i + 2]} key={`${i}-${i+2}`}/>)
  }

  return (
    <div id="Board">
      <div className="container">
        <div className="lines">
          { lines }
        </div>
        <div className="dirty-numbers">
          <Number number={zero} />
        </div>

        <div className="common-numbers">
          {restNumbers.map((number, i) => (
            <Number number={number} key={i}/>
          ))}
        </div>

        <Columns />

        <Dozens />

        <DoubleChances />
      </div>
    </div>
  );
}

export default Board;

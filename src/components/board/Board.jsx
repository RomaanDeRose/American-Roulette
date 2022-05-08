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

  const { rouletteType } = useParams();

  console.log(rouletteType);

  const [zero, ...restNumbers] = numbers;

  const lines = [];

  for (let i = 1; i < 37; i = i + 3) {
    lines.push(<Line numbers={[i, i + 1, i + 2]} key={`${i}-${i+2}`}/>)
  }

  // if(rouletteType === "european") {
  //   var [zero, ...restNumbers] = numbers;
  // } else if(rouletteType === "american") {
  //   // numbers.unshift({
  //   //   value: '00',
  //   //   color: null,
  //   //   bets: 0,
  //   // })
  //   var [doubleZero, zero, ...restNumbers] = numbers;
  //}


  // const userChanceBet = (chance, numbers) => {
  //   numbers.forEach((number) => {
  //     number.bets++;
  //   });

  //   const isBet = chance.bets === 0;

  //   chance.bets++;

  //   if (isBet) {
  //     setSelectedNumbers([...selectedNumbers, ...numbers]);
  //   } else {
  //     setSelectedNumbers([...selectedNumbers]);
  //   }
  // };

  // const userFullBet = (number) => {
  //   if (selectedNumbers.map((n) => n.value).includes(number.value)) {
  //     const existedBetNumber = selectedNumbers.map((n) => {
  //       if (n.value === number.value) {
  //         return {
  //           ...n,
  //           bets: n.bets + 1,
  //         };
  //       }
  //       return n;
  //     });
  //     setSelectedNumbers(existedBetNumber);
  //   } else {
  //     setSelectedNumbers([
  //       ...selectedNumbers,
  //       {
  //         value: number.value,
  //         color: number.color,
  //         bets: number.bets + 1,
  //       },
  //     ]);
  //   }
  //   toggle();
  // };

  return (
    <div id="Board">
      <div className="container">
        <div className="lines">
          { lines }
        </div>
        <div className="dirty-numbers">
          <Number number={zero} />
          {/* {rouletteType === "american" && <Number number={doubleZero} />} */}
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

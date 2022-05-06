import { useContext, useState } from "react";
import { useAudio } from "../../hooks/useAudio";
import Fichas from "../../assets/audio/fichas-roulette.mp3";
import { numbers, chances } from "../../utils/numbers";
import "./Board.scss";
import Columns from "./components/chances/triple/Columns";
import Dozens from "./components/chances/triple/Dozens";
import { CasinoContext } from "../../contexts/CasinoContext";
import { BoardContext } from "../../contexts/BoardContext"
import DoubleChances from "./components/chances/double/DoubleChances";

const [zero, ...restNumbers] = numbers;

function Board() {

  const { selectedNumbers, setSelectedNumbers } = useContext(CasinoContext);

  const { preselectedNumbers, setPreselectedNumbers } = useContext(BoardContext);

  const [toggle] = useAudio(Fichas, 2);

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

  function handleHover(numbers) {
    const values = numbers.map((number) => number.value);
    setPreselectedNumbers([...values]);
  }

  return (
    <div id="Board">
      
      <div className="container">
        <span
          className="number number--zero"
          style={{ cursor: "pointer" }}
          // onClick={() => userFullBet({ value: 0, color: "green", bets: 0 })}
        >
          {zero.value}
        </span>
        <div className="common-numbers">
          {restNumbers.map((number) => (
            <span
              className={`
                number
                ${
                  preselectedNumbers.includes(number.value)
                    ? "number--preselected"
                    : ""
                }
              `}
              key={number.value}
              style={{ background: number.color }}
              // onClick={() => {
              //   userFullBet(number);
              // }}
            >
              {number.value}
            </span>
          ))}
        </div>

        <Columns />

        <Dozens/>

        <DoubleChances/>

      </div>
    </div>
  );
}

export default Board;

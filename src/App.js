import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { data } from "./utils/numbersRoulette";
import { useAudio } from "./hooks/useAudio";
import Board from "./components/board/Board";
import HistorialBets from "./components/historialBets/HistorialBets";
import Ruleta from "./assets/audio/roullette.mp3";
// import { colors } from "./components/board/Board";
import "./App.css";

function App() {
  const [toggle] = useAudio(Ruleta);

  const [isFirstSpin, setIsFirstSpin] = useState(true);

  const [isHitBet, setIsHitBet] = useState(false);

  // Ruleta girando boolean
  const [mustSpin, setMustSpin] = useState(false);

  // Índice número ganador
  const [prizeNumber, setPrizeNumber] = useState(20);

  // Números seleccionados
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const [lastNumber, setLastNumber] = useState({ value: null, color: null });

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    toggle();
  };

  const checkBets = () => {
    setIsHitBet(
      selectedNumbers.some(
        (number) => number.value === data[prizeNumber].option
      )
    );
  };

  // // Ex numberBet
  // const winNumber = (
  //   <span style={{ backgroundColor: data[prizeNumber].style.backgroundColor }}>
  //     {data[prizeNumber].option}
  //   </span>
  // );

  const resultMessage = <h3 className="win">Acertaste!</h3>;

  return (
    <div className="App">
      <h1 className="title">Ruleta Europea!</h1>

      {isHitBet && !mustSpin && resultMessage}

      <HistorialBets lastNumber={lastNumber} />

      <Wheel
        textColors={["#fff"]}
        fontSize={18}
        textDistance={79}
        outerBorderColor={["#2F1D18"]}
        outerBorderWidth={15}
        innerRadius={55}
        innerBorderColor={["#2F1D18"]}
        innerBorderWidth={20}
        radiusLineColor={"#e6b219"}
        radiusLineWidth={2}
        spinDuration={0.63}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setIsFirstSpin(false);
          checkBets();
          setLastNumber({
            value: data[prizeNumber].option,
            color: data[prizeNumber].style.backgroundColor,
          });
        }}
      />

      <button onClick={handleSpinClick}>SPIN</button>

      {/* <h2 style={{display: isFirstSpin && 'none'}}>
        {!mustSpin && <>Último número: {winNumber}</>}
      </h2> */}

      {isFirstSpin || (
        <h2>
          Último número:{" "}
          <span style={{ backgroundColor: lastNumber.color }}>
            {lastNumber.value}
          </span>
        </h2>
      )}

      {!mustSpin || <h2>ruleta girando...</h2>}

      <p>
        {selectedNumbers.length > 0 ? (
          <>
            <p>elegiste el/los número/s</p>
            {selectedNumbers.map((number) => (
              <>
                <span
                  key={number.value}
                  style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    backgroundColor: number.color,
                    margin: "0 0.5rem 1.8rem 0.5rem",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    position: "relative",
                  }}
                  onClick={() => {
                    setSelectedNumbers([
                      ...selectedNumbers.filter(
                        (n) => n.value !== number.value
                      ),
                    ]);
                  }}
                >
                  {number.value}
                  <span
                    style={{
                      display: "block",
                      width: "16px",
                      height: "16px",
                      lineHeight: "16px",
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "50%",
                      border: "3px dotted blue",
                      position: "absolute",
                      bottom: "-25px",
                      left: "4px",
                    }}
                  >
                    {number.bets}
                  </span>
                </span>
              </>
            ))}
          </>
        ) : (
          "No has seleccionado ningún número, cagón"
        )}
      </p>
      <Board
        selectedNumbers={selectedNumbers}
        setSelectedNumbers={setSelectedNumbers}
      />
    </div>
  );
}

export default App;

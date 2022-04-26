import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Board from "./components/Board";
import { data } from "./utils/numbersRoulette";
import "./App.css";

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(32);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const numberBet = (
    <span style={{ backgroundColor: data[prizeNumber].style.backgroundColor }}>
      {data[prizeNumber].option}
    </span>
  );

  return (
    <div className="App">
      <h2 className="title">Ruleta Europea!</h2>
      {selectedNumbers.some(
        (number) => number.value === data[prizeNumber].option
      ) &&
        !mustSpin && <h3 className="win">Acertaste!</h3>}
      <Wheel
        textColors={["#fff"]}
        fontSize={18}
        textDistance={79}
        outerBorderColor={["#000"]}
        outerBorderWidth={15}
        innerRadius={55}
        innerBorderColor={["#000"]}
        innerBorderWidth={20}
        radiusLineColor={"#e6b219"}
        radiusLineWidth={2}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
      <h2>
        {!mustSpin ? <>Último número: {numberBet}</> : "ruleta girando..."}
      </h2>
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
          "No has seleccionado ningun numero"
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

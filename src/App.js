import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./App.css";

import Board from "./components/Board";

const data = [
  { option: 0, style: { backgroundColor: "#318D42" } },
  { option: 32, style: { backgroundColor: "#E31C2E" } },
  { option: 15, style: { backgroundColor: "#000700" } },
  { option: 19, style: { backgroundColor: "#E31C2E" } },
  { option: 4, style: { backgroundColor: "#000700" } },
  { option: 21, style: { backgroundColor: "#E31C2E" } },
  { option: 2, style: { backgroundColor: "#000700" } },
  { option: 25, style: { backgroundColor: "#E31C2E" } },
  { option: 17, style: { backgroundColor: "#000700" } },
  { option: 34, style: { backgroundColor: "#E31C2E" } },
  { option: 6, style: { backgroundColor: "#000700" } },
  { option: 27, style: { backgroundColor: "#E31C2E" } },
  { option: 13, style: { backgroundColor: "#000700" } },
  { option: 36, style: { backgroundColor: "#E31C2E" } },
  { option: 11, style: { backgroundColor: "#000700" } },
  { option: 30, style: { backgroundColor: "#E31C2E" } },
  { option: 8, style: { backgroundColor: "#000700" } },
  { option: 23, style: { backgroundColor: "#E31C2E" } },
  { option: 10, style: { backgroundColor: "#000700" } },
  { option: 5, style: { backgroundColor: "#E31C2E" } },
  { option: 24, style: { backgroundColor: "#000700" } },
  { option: 16, style: { backgroundColor: "#E31C2E" } },
  { option: 33, style: { backgroundColor: "#000700" } },
  { option: 1, style: { backgroundColor: "#E31C2E" } },
  { option: 20, style: { backgroundColor: "#000700" } },
  { option: 14, style: { backgroundColor: "#E31C2E" } },
  { option: 31, style: { backgroundColor: "#000700" } },
  { option: 9, style: { backgroundColor: "#E31C2E" } },
  { option: 22, style: { backgroundColor: "#000700" } },
  { option: 18, style: { backgroundColor: "#E31C2E" } },
  { option: 29, style: { backgroundColor: "#000700" } },
  { option: 7, style: { backgroundColor: "#E31C2E" } },
  { option: 28, style: { backgroundColor: "#000700" } },
  { option: 12, style: { backgroundColor: "#E31C2E" } },
  { option: 35, style: { backgroundColor: "#000700" } },
  { option: 3, style: { backgroundColor: "#E31C2E" } },
  { option: 26, style: { backgroundColor: "#000700" } },
];

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const conditional =
    data[prizeNumber].style.backgroundColor === "#318D42"
      ? {
          backgroundColor: "#318D42",
          padding: "4px 8px",
          borderRadius: "8px",
        }
      : data[prizeNumber].style.backgroundColor === "#000700"
      ? {
          backgroundColor: "#000700",
          padding: "4px 8px",
          borderRadius: "8px",
        }
      : { backgroundColor: "#E31C2E", padding: "4px 8px", borderRadius: "8px" };

  const numberBet = <span style={conditional}>{data[prizeNumber].option}</span>;

  const usuario = 18;

  return (
    <div className="App">
      <h2 className="title">Ruleta Americana!</h2>
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
        onStopSpinning={() => setMustSpin(false)}
      />
      <button onClick={handleSpinClick}>SPIN</button>
      <h2>
        {!mustSpin ? <>Último número: {numberBet}</> : "ruleta girando..."}
      </h2>
      <p>
        Eligiste el numero:{" "}
        <span
          style={{
            fontSize: "1.7rem",
            fontWeight: "bold",
            backgroundColor: "#E31C2E",
            padding: "4px 8px",
            borderRadius: "8px",
          }}
        >
          {usuario}
        </span>
      </p>
      {data[prizeNumber].option === usuario && !mustSpin && (
        <h3 className="win">"Acertaste!"</h3>
      )}
      {data[prizeNumber].option !== usuario && !mustSpin && (
        <h3 className="lose">"Perdiste. Gira de nuevo"</h3>
      )}
      <Board></Board>
    </div>
  );
}

export default App;

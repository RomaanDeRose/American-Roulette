import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Board from "./components/Board";
import { data } from "./utils/numbersRoulette";
import "./App.css";

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
      <Board />
    </div>
  );
}

export default App;

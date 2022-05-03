import React, { useState } from "react";

import Board from "./components/board/Board";

import "./App.css";
import Roulette from "./components/roulette/Roulette";

function App() {

  const [rouletteTypes, setRouletteType] = useState(["american", "european"]);

  function translateType(rouletteType) {
    switch (rouletteType) {
      case "european":
        return "Europea"
      case "american":
        return "Americana"    
    }
  }

  function changeType () {
    const invertedTypes = rouletteTypes.reverse();
    setRouletteType([...invertedTypes]);
    console.log(rouletteTypes);
  }

  return (
    <div className="App">
      <button onClick={ changeType }>Cambiar a Ruleta { translateType(rouletteTypes[1]) }</button>
      <Roulette type={rouletteTypes[0]}/>
      <Board
        // selectedNumbers={selectedNumbers}
        // setSelectedNumbers={setSelectedNumbers}
      />
    </div>
  );
}

export default App;

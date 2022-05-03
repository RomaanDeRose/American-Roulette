import React, { useState } from "react";

import Board from "./components/board/Board";

import "./App.css";
import Roulette from "./components/roulette/Roulette";
import CasinoContext from "./contexts/CasinoContext";

function App() {

  const [selectedNumbers, setSelectedNumbers] = useState([]);
  
  const [rouletteTypes, setRouletteType] = useState(["american", "european"]);

  const data = {selectedNumbers, setSelectedNumbers, rouletteTypes, setRouletteType};

  return (
    <div className="App">
      <CasinoContext.Provider value={data}>
        <Roulette type={rouletteTypes[0]}/>
        <Board
          // selectedNumbers={selectedNumbers}
          // setSelectedNumbers={setSelectedNumbers}
        />
      </CasinoContext.Provider>
    </div>
  );
}

export default App;

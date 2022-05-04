import React from "react";

import Board from "./components/board/Board";

import "./App.css";
import Roulette from "./components/roulette/Roulette";
import CasinoContextProvider from "./contexts/CasinoContext";

function App() {
  return (
    <div className="App">
      <CasinoContextProvider>
        <Roulette />
        <Board />
      </CasinoContextProvider>
    </div>
  );
}

export default App;

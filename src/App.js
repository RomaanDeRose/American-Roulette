import React from "react";
import { Routes, Route } from "react-router-dom";
import CasinoContextProvider from "./contexts/CasinoContext";
import Home from "./components/home/Home";
import Roulette from "./components/roulette/Roulette";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CasinoContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </CasinoContextProvider>
    </div>
  );
}

export default App;

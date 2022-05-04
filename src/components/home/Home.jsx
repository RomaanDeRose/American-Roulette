import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CasinoContext } from "../../contexts/CasinoContext";
import "./Home.scss";

function Home() {
  const { rouletteTypes } = useContext(CasinoContext);

  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-container_title">Bienvenido!</h1>
        <h3 className="home-container_subtitle">¿Que querés jugar?</h3>
        <div className="home-container_options">
          <Link to={`/${rouletteTypes[0]}`}>Ruleta Americana</Link>
          <Link to={`/${rouletteTypes[1]}`}>Ruleta Europea</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

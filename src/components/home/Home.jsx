import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-container_title">Bienvenido!</h1>
        <h2 className="home-container_subtitle">¿Que querés jugar?</h2>
        <div className="home-container_options">
          <Link to={`/roulette`}>Ruleta</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import "./HistorialBets.scss";

function HistorialBets({ lastNumber }) {
  const [allNumber, setAllNumber] = useState([]);

  useEffect(() => {
    lastNumber.value && lastNumber.color
      ? setAllNumber([...allNumber, lastNumber])
      : setAllNumber([]);
  }, [lastNumber]);

  return (
    <div className="historial-bets">
      <h3>Historial de apuestas</h3>
      <div className="historialContainer">
        <div className="historialContainer--show">
          {allNumber.length > 0 ? (
            allNumber.map((number, index) => {
              return (
                <div key={index} className="historialContainer--show--number">
                  <span
                    style={{
                      backgroundColor: number.color,
                    }}
                  >
                    {number.value}
                  </span>
                </div>
              );
            })
          ) : (
            <p>No has girado la ruleta</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistorialBets;

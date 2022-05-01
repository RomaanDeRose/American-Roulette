import React, { useState, useEffect } from "react";
import "./HistorialBets.scss";

function HistorialBets({ lastNumber }) {
  const [allNumber, setAllNumber] = useState([]);

  useEffect(() => {
    lastNumber.value !== null && lastNumber.color !== null
      ? setAllNumber([...allNumber, lastNumber])
      : setAllNumber([]);
  }, [lastNumber]);

  return (
    <div className="historial-bets">
      <div className="historialContainer">
        <div className="historialContainer--show">
          {allNumber.length > 0 ? (
            allNumber.map((number, index) => {
              return (
                <div key={index} className="historialContainer--show--number">
                  <span
                    style={{
                      textAlign:
                        number.color === "#000700"
                          ? "start"
                          : number.color === "#318D42"
                          ? "center"
                          : number.color === "#E31C2E"
                          ? "end"
                          : "none",
                      color: number.color,
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

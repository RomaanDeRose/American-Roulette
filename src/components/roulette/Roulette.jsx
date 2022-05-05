import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Wheel } from "react-custom-roulette";
import { data } from "../../utils/numbersRoulette";
import { useAudio } from "../../hooks/useAudio";
import Ruleta from "../../assets/audio/roullette.mp3";
import HistorialBets from "../historialBets/HistorialBets";
import Board from "../board/Board";
import { CasinoContext } from "../../contexts/CasinoContext";
import BoardContextProvider from "../../contexts/BoardContext";
// import { changeType, translateType } from "../../utils/rouletteTypes.services";

function Roulette() {
  const { selectedNumbers, setSelectedNumbers } = useContext(CasinoContext);

  const { rouletteType } = useParams();

  const [toggle] = useAudio(Ruleta);

  const [rouletteData, setRouletteData] = useState(data);

  const [isFirstSpin, setIsFirstSpin] = useState(true);

  const [isHitBet, setIsHitBet] = useState(false);

  // Ruleta girando boolean
  const [mustSpin, setMustSpin] = useState(false);

  // Índice número ganador
  const [prizeNumber, setPrizeNumber] = useState(20);

  const [lastNumber, setLastNumber] = useState({ value: null, color: null });

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * rouletteData.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    toggle();
  };

  const checkBets = () => {
    setIsHitBet(
      selectedNumbers.some(
        (number) => number.value === rouletteData[prizeNumber].option
      )
    );
  };

  // const toastNumber = () => toast(lastNumber.value);

  const resultMessage = <h3 className="win">Acertaste!</h3>;

  useEffect(() => {
    // const [actualType] = rouletteTypes;
    if (rouletteType === "american") {
      if (data.length === 37) {
        data.splice(19, 0, {
          option: "00",
          style: { backgroundColor: "#318D42" },
        });
        setRouletteData([...data]);
      }
    } else {
      if (data.length === 38) {
        data.splice(19, 1);
        setRouletteData([...data]);
      }
    }
  }, [rouletteType]);

  return (
    <>
      {/* <button onClick={() => changeType(rouletteTypes, setRouletteType)}>
        Cambiar a Ruleta {translateType(rouletteTypes[1])}
      </button> */}
      {isHitBet && !mustSpin && resultMessage}

      <HistorialBets lastNumber={lastNumber} />
      <Wheel
        textColors={["#fff"]}
        fontSize={18}
        textDistance={79}
        outerBorderColor={["#2F1D18"]}
        outerBorderWidth={15}
        innerRadius={55}
        innerBorderColor={["#2F1D18"]}
        innerBorderWidth={20}
        radiusLineColor={"#e6b219"}
        radiusLineWidth={2}
        spinDuration={0.64}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={rouletteData}
        onStopSpinning={() => {
          setMustSpin(false);
          setIsFirstSpin(false);
          checkBets();
          setLastNumber({
            value: rouletteData[prizeNumber].option,
            color: rouletteData[prizeNumber].style.backgroundColor,
          });
          toast(rouletteData[prizeNumber].option);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>

      {/* {!isFirstSpin && (
        <span style={{ color: "transparent" }}>{toast(lastNumber.value)}</span>
      )} */}

      {!mustSpin || <h2>ruleta girando...</h2>}

      <p>
        {selectedNumbers.length > 0 ? (
          <>
            <p>elegiste el/los número/s</p>
            {selectedNumbers.map((number) => (
              <>
                <span
                  key={number.value}
                  className="selected-number"
                  style={{
                    backgroundColor: number.color,
                  }}
                  onClick={() => {
                    setSelectedNumbers([
                      ...selectedNumbers.filter(
                        (n) => n.value !== number.value
                      ),
                    ]);
                  }}
                >
                  {number.value}
                  <span className="chip">{number.bets}</span>
                </span>
              </>
            ))}
          </>
        ) : (
          "No has seleccionado ningún número, cagón"
        )}
      </p>

      <BoardContextProvider>
        <Board />
      </BoardContextProvider>

      <Toaster
        position="top-left"
        toastOptions={{
          duration: 2000,
          style: {
            background: lastNumber.color,
            color: "#fff",
            fontSize: "6rem",
            fontWeight: "900",
            borderRadius: "20px",
            padding: "18px 25px",
          },
        }}
      />
    </>
  );
}

export default Roulette;

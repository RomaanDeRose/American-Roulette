import Board from "../board/Board";
import BoardContextProvider from "../../contexts/BoardContext";
import RouletteWheel from "../wheel/RouletteWheel";

function Roulette() {

  return (
    <>
      <RouletteWheel/>
      <BoardContextProvider>
        <Board />
      </BoardContextProvider>
    </>
  );
}

export default Roulette;

// Confetti 
// import ReactCanvasConfetti from "react-canvas-confetti";
// const getInstance = useCallback((instance) => {
//   refAnimationInstance.current = instance;
// }, []);
{/* <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />  */}
// const canvasStyles = {
//   position: "fixed",
//   zIndex: 10000,
//   pointerEvents: "none",
//   width: "100%",
//   height: "100%",
//   top: 0,
//   left: 0,
// };

// Historial de apuestas
// import HistorialBets from "../historialBets/HistorialBets";
{/* <HistorialBets lastNumber={lastNumber} /> */}

// const fire = useCallback(() => {
//   makeShot(0.25, {
//     spread: 26,
//     startVelocity: 55,
//   });

//   makeShot(0.2, {
//     spread: 60,
//   });

//   makeShot(0.35, {
//     spread: 100,
//     decay: 0.91,
//     scalar: 0.8,
//   });

//   makeShot(0.1, {
//     spread: 120,
//     startVelocity: 25,
//     decay: 0.92,
//     scalar: 1.2,
//   });

//   makeShot(0.1, {
//     spread: 120,
//     startVelocity: 45,
//   });
// }, [makeShot]);

{/* <Toaster
position="top-left"
toastOptions={{
  duration: 3000,
  style: {
    background: lastNumber.color,
    color: "#fff",
    fontSize: "6rem",
    fontWeight: "900",
    borderRadius: "20px",
    padding: "18px 25px",
  },
}}
/> */}
// import toast, { Toaster } from "react-hot-toast";
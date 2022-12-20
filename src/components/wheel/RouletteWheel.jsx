import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { data as rouletteData } from "../../utils/numbersRoulette";
import SpinButton from "../spin-button/SpinButton";

function RouletteWheel() {
  const [mustStartSpinning, setMustStartSpinning] = useState(false);
  function toggleSpin () {
    setMustStartSpinning(!mustStartSpinning);
  }
  return ( 
    <>
      <Wheel
      textColors={["#fff"]}
      fontSize={18}
      textDistance={79}
      outerBorderColor={["silver"]}
      outerBorderWidth={15}
      innerRadius={55}
      innerBorderColor={["#2F1D18"]}
      innerBorderWidth={20}
      radiusLineColor={"#FAF8FF"}
      radiusLineWidth={2}
      spinDuration={0.64}
      mustStartSpinning={mustStartSpinning}
      prizeNumber={24}
      data={rouletteData}
      onStopSpinning={() => {
        toggleSpin();
      }}/>
      <SpinButton spin={toggleSpin}/>
    </>

  );
}

export default RouletteWheel;
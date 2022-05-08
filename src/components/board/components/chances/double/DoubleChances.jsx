import { BoardContext } from "../../../../../contexts/BoardContext";
import { useContext } from "react";
import { colors, sizes, parities } from "../../../../../utils/numbers";
import Color from "./Color";
import Size from "./Size";
import Parity from "./Parity";
import "./DoubleChances.scss";


function DoubleChances() {

    const {red, black} = colors;
    const {minor, major} = sizes;
    const {even, odd} = parities;

    const { preselectedNumbers, setPreselectedNumbers } = useContext(BoardContext);

    function handleHover(numbers) {
        const values = numbers.map((number) => number.value);
        setPreselectedNumbers([...values]);
      }

    return ( 
        <div className="double-chances">
            <Size size={minor} handleHover={handleHover}/>
            <Parity parity={even} handleHover={handleHover}/>
            <Color color={red} handleHover={handleHover}/>
            <Color color={black} handleHover={handleHover}/>
            <Parity parity={odd} handleHover={handleHover}/>
            <Size size={major} handleHover={handleHover}/>
        </div>
     );
}

export default DoubleChances;
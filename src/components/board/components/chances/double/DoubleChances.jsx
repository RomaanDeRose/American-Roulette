import { colors, sizes, parities } from "../../../../../utils/numbers";
import Color from "./Color";
import Size from "./Size";
import Parity from "./Parity";


function DoubleChances() {

    const {red, black} = colors;
    const {minor, major} = sizes;
    const {even, odd} = parities;

    return ( 
        <div className="double-chances">
            <Size size={minor}/>
            <Parity parity={even}/>
            <Color color={red}/>
            <Color color={black}/>
            <Parity parity={odd}/>
            <Size size={major}/>
        </div>
     );
}

export default DoubleChances;
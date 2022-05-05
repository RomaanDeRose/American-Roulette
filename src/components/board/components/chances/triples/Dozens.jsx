import { TripleChance as Dozen } from "./TripleChance";
import { dozens } from "../../../../../utils/numbers";

function Dozens() {

    return ( 
        <div id="dozens">
            {dozens.map(dozen => 
                <Dozen key={dozen.name} numbers={dozen.numbers} name={dozen.name}/>
            )}
        </div>
     );

}

export default Dozens;
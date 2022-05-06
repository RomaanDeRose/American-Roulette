import { TripleChanceItem as Dozen } from "./TripleChanceItem";
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
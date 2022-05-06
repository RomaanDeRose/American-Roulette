import { TripleChanceItem as Column } from "./TripleChanceItem";
import { columns } from "../../../../../utils/numbers";

function Columns() {

    return ( 
        <div id="columns">
            {columns.map(column => 
                <Column key={column.name} numbers={column.numbers}/>
            )}
        </div>
     );

}

export default Columns;
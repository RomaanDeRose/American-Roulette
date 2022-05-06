import { useContext } from "react";
import { BoardContext } from "../../../../../contexts/BoardContext";

export function TripleChance({ name, numbers }) {

    const isDozen = name ? true : false;

    const renderText = () => {
        if (isDozen) {
            return <span>{name[0]}<sup>{name[1] + name[2]}</sup> 12</span>;
        } else {
            
            return <span>2 <small>to</small> 1</span>;
        }
    }

    const { preselectedNumbers, setPreselectedNumbers } = useContext(BoardContext);

    function handleHover(numbers) {
        const values = numbers.map((number) => number.value);
        setPreselectedNumbers([...values]);
        console.log(values, preselectedNumbers);
      }

    return ( 
        <span
            className={isDozen ? "dozen" : "column"}
            onMouseOver={() =>
                handleHover(numbers)
            }
            onMouseLeave={() => handleHover([])}
        >
            
            { renderText() }

      </span>
    );
}
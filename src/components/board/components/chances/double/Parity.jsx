function Parity({ parity }) {

    const isPair = parity.name === 'even';
    const isOdd = parity.name === 'odd';

    if(!isPair && !isOdd) {
        throw new Error("parity is not valid.");
    }

    return ( 
        <div
            className={`chance chance__parity chance__parity--${parity.name}`}
            key={parity.name}
            // onClick={() => {
            //   userChanceBet(color, color.numbers);
            // }}
            // onMouseOver={() => handleHover(color.numbers)}
            // onMouseLeave={() => handleHover([])}
            >
            <span>{parity.name}</span>
            
        </div>
     );
}

export default Parity;
function Color({ color, handleHover }) {

    const isRed = color.name === 'red';
    const isBlack = color.name === 'black';

    if(!isRed && !isBlack) {
        throw new Error("color is not valid.");
    }

    return ( 
        <div
            className={`chance chance__color chance__color--${color.name}`}
            key={color.name}
            // onClick={() => {
            //   userChanceBet(color, color.numbers);
            // }}
            onMouseOver={() => handleHover(color.numbers)}
            onMouseLeave={() => handleHover([])}
            >
            <span></span>
        </div>
     );
}

export default Color;
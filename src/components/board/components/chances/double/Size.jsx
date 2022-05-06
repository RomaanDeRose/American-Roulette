function Size({ size, handleHover }) {

    const isMinor = size.name === 'minor';
    const isMajor = size.name === 'major';

    const firstNumber = size.numbers[0].value;
    const lastNumber = size.numbers[size.numbers.length - 1].value;

    if(!isMinor && !isMajor) {
        throw new Error("size is not valid.");
    }

    return ( 
        <div
            className={`chance chance__size chance__size--${size.name}`}
            key={size.name}
            // onClick={() => {
            //   userChanceBet(color, size.numbers);
            // }}
            onMouseOver={() => handleHover(size.numbers)}
            onMouseLeave={() => handleHover([])}
            >
            <span>{firstNumber} <small>to</small> {lastNumber}</span>
            
        </div>
     );
}

export default Size;
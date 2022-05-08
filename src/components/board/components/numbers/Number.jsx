function Number({ number } ) {
    const isDirtyNumber = number.value === 0 || number.value === '00';
    return ( 
        <span
            className={`number ${isDirtyNumber ? 'number--zero' : ""}`}
            style={{ background: number?.color }}
            // onClick={() => {
            // userFullBet(number, toggle);
            // }}
        >
            {number?.value}
            {/* {selectedNumbers.map((n) => n.value).includes(number.value) ? (
            <img src={Ficha} alt={`ficha-${number.bets}`} />
            ) : (
            ""
            )} */}
        </span>
     );
}

export default Number;
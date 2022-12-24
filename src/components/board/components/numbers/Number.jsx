function Number({ number } ) {
  const isZeroNumber = number.option === '0';
  return ( 
    <span 
    className={`number ${isZeroNumber ? 'number--zero' : ""}`} 
    style={{ background: number.style.backgroundColor }} 
    onClick={() => console.log(number.option)}>
      {number.option}
    </span>
  );
}

export default Number;
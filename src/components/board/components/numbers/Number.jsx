function Number({ number } ) {
  const isZeroNumber = number.value === 0;
  return ( 
    <span 
    className={`number ${isZeroNumber ? 'number--zero' : ""}`} 
    style={{ background: number.color }} 
    onClick={() => console.log(number.value)}>
      {number.value}
    </span>
  );
}

export default Number;
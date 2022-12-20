function MultipleNumbers({ numbers, className }) {
  return ( 
    <span className={className} onClick={() => console.log(numbers)}>
    </span>
  );
}

export default MultipleNumbers;
function Line({ numbers }) {

    return ( 
        <span className="line" onClick={() => console.log(numbers, numbers.length)}>
        </span>
     );
}

export default Line;
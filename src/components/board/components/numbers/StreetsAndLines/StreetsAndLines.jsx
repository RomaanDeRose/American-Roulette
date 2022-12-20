import MultipleNumbers from "../MultipleNumbers/MultipleNumbers";
import './StreetsAndLines.scss';

function StreetsAndLines() {
  const streets = [],
        lines = [];
  for (let i = 1; i < 37; i = i + 3) {
    streets.push(<MultipleNumbers numbers={[i, i + 1, i + 2]} key={`${i}-${i+2}`} className={"street"}/>);
  }
  for (let i = 3; i < 34; i = i + 3) {
    lines.push(<MultipleNumbers numbers={[i-2, i-1, i, i+1, i+2, i+3]} key={`${i}-${i+5}`} className={"line"}/>);
  }
  const getStreetsAndLines = () => {
    const streetsAndLines = [];
    for (let i = 0; i < streets.length; i++) {
      streetsAndLines.push(streets[i], lines[i])
    }
    return streetsAndLines;
  }
  return ( 
    <div className="streets-and-lines">
      { getStreetsAndLines() }
    </div>
   );
}

export default StreetsAndLines;
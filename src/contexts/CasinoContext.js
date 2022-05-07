import { useState, createContext } from "react";

const CasinoContext = createContext();

function CasinoContextProvider({ children }) {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const [rouletteTypes, setRouletteType] = useState(["american", "european"]);

  const userFullBet = (number, toggle) => {
    if (selectedNumbers.map((n) => n.value).includes(number.value)) {
      const existedBetNumber = selectedNumbers.map((n) => {
        if (n.value === number.value) {
          return {
            ...n,
            bets: n.bets + 1,
          };
        }
        return n;
      });
      setSelectedNumbers(existedBetNumber);
    } else {
      setSelectedNumbers([
        ...selectedNumbers,
        {
          value: number.value,
          color: number.color,
          bets: number.bets + 1,
        },
      ]);
    }
    toggle();
  };

  console.log(selectedNumbers);

  return (
    <CasinoContext.Provider
      value={{
        selectedNumbers,
        setSelectedNumbers,
        rouletteTypes,
        setRouletteType,
        userFullBet,
      }}
    >
      {children}
    </CasinoContext.Provider>
  );
}

export { CasinoContext };
export default CasinoContextProvider;

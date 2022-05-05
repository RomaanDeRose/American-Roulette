import { useState, createContext } from "react";

const CasinoContext = createContext();

function CasinoContextProvider({ children }) {

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const [rouletteTypes, setRouletteType] = useState(["american", "european"]);
  
  return (
    <CasinoContext.Provider
      value={{
        selectedNumbers,
        setSelectedNumbers,
        rouletteTypes,
        setRouletteType
      }}
    >
      {children}
    </CasinoContext.Provider>
  );
}

export { CasinoContext };
export default CasinoContextProvider;

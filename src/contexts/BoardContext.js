import { createContext, useState } from "react";

const BoardContext = createContext();

function BoardContextProvider({children}) {

    const [ preselectedNumbers, setPreselectedNumbers ] = useState([]);

    return ( 
        <BoardContext.Provider 
            value={{
                preselectedNumbers,
                setPreselectedNumbers
            }}
        >
            {children}
        </BoardContext.Provider>
     );
}
export { BoardContext };
export default BoardContextProvider;
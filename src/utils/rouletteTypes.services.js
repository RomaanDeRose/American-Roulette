export function translateType(rouletteType) {
    switch (rouletteType) {
      case "european":
        return "Europea"
      case "american":
        return "Americana"    
    }
  }

export function changeType (rouletteTypes, setRouletteType) {
    const invertedTypes = rouletteTypes.reverse();
    setRouletteType([...invertedTypes]);
    console.log(rouletteTypes);
  }
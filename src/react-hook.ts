import { useState, useCallback } from "react";
import { convertNumberToWordsInNepaliSystem } from "./index";

export const useNepaliNumberSystem = () => {
  const [result, setResult] = useState<string>("");

  const convert = useCallback((num: number | string, local?: "np" | "en") => {
    const converted = convertNumberToWordsInNepaliSystem(num, local);
    setResult(converted);
    return converted;
  }, []);

  return { convert, result };
};

export default useNepaliNumberSystem;

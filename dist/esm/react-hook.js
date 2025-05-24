import { useState, useCallback } from "react";
import { convertNumberToWordsInNepaliSystem } from "./index";
export const useNepaliNumberSystem = () => {
    const [result, setResult] = useState("");
    const convert = useCallback((num, local) => {
        const converted = convertNumberToWordsInNepaliSystem(num, local);
        setResult(converted);
        return converted;
    }, []);
    return { convert, result };
};
export default useNepaliNumberSystem;
//# sourceMappingURL=react-hook.js.map
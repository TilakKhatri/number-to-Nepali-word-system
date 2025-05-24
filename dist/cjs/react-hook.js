"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNepaliNumberSystem = void 0;
const react_1 = require("react");
const index_1 = require("./index");
const useNepaliNumberSystem = () => {
    const [result, setResult] = (0, react_1.useState)("");
    const convert = (0, react_1.useCallback)((num, local) => {
        const converted = (0, index_1.convertNumberToWordsInNepaliSystem)(num, local);
        setResult(converted);
        return converted;
    }, []);
    return { convert, result };
};
exports.useNepaliNumberSystem = useNepaliNumberSystem;
exports.default = exports.useNepaliNumberSystem;
//# sourceMappingURL=react-hook.js.map
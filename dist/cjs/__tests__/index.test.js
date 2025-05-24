"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('convertNumberToWordsInNepaliSystem', () => {
    it('should convert 123 to Nepali words', () => {
        expect((0, index_1.convertNumberToWordsInNepaliSystem)('123', 'np')).toMatch(/एक सय तेइस|एक सय तेइस/);
    });
    it('should convert 123 to English words', () => {
        expect((0, index_1.convertNumberToWordsInNepaliSystem)('123', 'en')).toMatch(/One Hundred Twenty Three/);
    });
    it('should convert large number with decimals to Nepali words', () => {
        const result = (0, index_1.convertNumberToWordsInNepaliSystem)('4567896789678.6788', 'np');
        expect(result).toMatch(/रुपैयाँ/);
        expect(result).toMatch(/पैसा/);
        expect(result).toMatch(/खर्ब/);
        expect(result).toMatch(/अर्ब/);
        expect(result).toMatch(/करोड/);
    });
    it('should convert large number with decimals to English words', () => {
        const result = (0, index_1.convertNumberToWordsInNepaliSystem)('4567896789678.6788', 'en');
        expect(result).toMatch(/Rupees/);
        expect(result).toMatch(/Paisa/);
        expect(result).toMatch(/Kharab/);
        expect(result).toMatch(/Arab/);
        expect(result).toMatch(/Crore/);
    });
});
//# sourceMappingURL=index.test.js.map
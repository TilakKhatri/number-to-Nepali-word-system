"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_hook_1 = require("../react-hook");
describe('useNepaliNumberSystem', () => {
    it('should convert 123 to Nepali words', () => {
        const { result } = (0, react_1.renderHook)(() => (0, react_hook_1.useNepaliNumberSystem)());
        let output = '';
        (0, react_1.act)(() => {
            output = result.current.convert('123', 'np');
        });
        expect(output).toMatch(/एक सय तेइस|एक सय तेइस/);
        expect(result.current.result).toMatch(/एक सय तेइस|एक सय तेइस/);
    });
    it('should convert 123 to English words', () => {
        const { result } = (0, react_1.renderHook)(() => (0, react_hook_1.useNepaliNumberSystem)());
        let output = '';
        (0, react_1.act)(() => {
            output = result.current.convert('123', 'en');
        });
        expect(output).toMatch(/One Hundred Twenty Three/);
        expect(result.current.result).toMatch(/One Hundred Twenty Three/);
    });
    it('should convert large number with decimals to Nepali words', () => {
        const { result } = (0, react_1.renderHook)(() => (0, react_hook_1.useNepaliNumberSystem)());
        let output = '';
        (0, react_1.act)(() => {
            output = result.current.convert('4567896789678.6788', 'np');
        });
        expect(output).toMatch(/रुपैयाँ/);
        expect(output).toMatch(/पैसा/);
        expect(output).toMatch(/खर्ब/);
        expect(output).toMatch(/अर्ब/);
        expect(output).toMatch(/करोड/);
        expect(result.current.result).toMatch(/रुपैयाँ/);
        expect(result.current.result).toMatch(/पैसा/);
    });
    it('should convert large number with decimals to English words', () => {
        const { result } = (0, react_1.renderHook)(() => (0, react_hook_1.useNepaliNumberSystem)());
        let output = '';
        (0, react_1.act)(() => {
            output = result.current.convert('4567896789678.6788', 'en');
        });
        expect(output).toMatch(/Rupees/);
        expect(output).toMatch(/Paisa/);
        expect(output).toMatch(/Kharab/);
        expect(output).toMatch(/Arab/);
        expect(output).toMatch(/Crore/);
        expect(result.current.result).toMatch(/Rupees/);
        expect(result.current.result).toMatch(/Paisa/);
    });
});
//# sourceMappingURL=react-hook.test.js.map
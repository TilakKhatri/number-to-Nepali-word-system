"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../jquery-plugin");
const jquery_1 = __importDefault(require("jquery"));
describe('jQuery nepaliNumberSystem plugin', () => {
    beforeAll(() => {
        document.body.innerHTML =
            '<div id="num">123</div><div id="largeNum">4567896789678.6788</div>';
    });
    it('should convert number to Nepali words in DOM', () => {
        (0, jquery_1.default)('#num').nepaliNumberSystem({ local: 'np' });
        expect((0, jquery_1.default)('#num').text()).toMatch(/एक सय तेइस|एक सय तेइस/);
    });
    it('should convert number to English words in DOM', () => {
        (0, jquery_1.default)('#num').text('123');
        (0, jquery_1.default)('#num').nepaliNumberSystem({ local: 'en' });
        expect((0, jquery_1.default)('#num').text()).toMatch(/One Hundred Twenty Three/);
    });
    it('should convert large number with decimals to Nepali words in DOM', () => {
        (0, jquery_1.default)('#largeNum').nepaliNumberSystem({ local: 'np' });
        const result = (0, jquery_1.default)('#largeNum').text();
        expect(result).toMatch(/रुपैयाँ/);
        expect(result).toMatch(/पैसा/);
        expect(result).toMatch(/खर्ब/);
        expect(result).toMatch(/अर्ब/);
        expect(result).toMatch(/करोड/);
    });
    it('should convert large number with decimals to English words in DOM', () => {
        (0, jquery_1.default)('#largeNum').text('4567896789678.6788');
        (0, jquery_1.default)('#largeNum').nepaliNumberSystem({ local: 'en' });
        const result = (0, jquery_1.default)('#largeNum').text();
        expect(result).toMatch(/Rupees/);
        expect(result).toMatch(/Paisa/);
        expect(result).toMatch(/Kharab/);
        expect(result).toMatch(/Arab/);
        expect(result).toMatch(/Crore/);
    });
});
//# sourceMappingURL=jquery-plugin.test.js.map
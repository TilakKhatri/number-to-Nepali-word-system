"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const index_1 = require("./index");
jquery_1.default.fn.nepaliNumberSystem = function (options) {
    const settings = jquery_1.default.extend({
        local: 'np',
    }, options);
    return this.each(function () {
        var _a;
        const $this = (0, jquery_1.default)(this);
        const num = $this.text().trim() || ((_a = $this.val()) === null || _a === void 0 ? void 0 : _a.toString().trim()) || '0';
        const result = (0, index_1.convertNumberToWordsInNepaliSystem)(num, settings.local);
        $this.text(result);
    });
};
//# sourceMappingURL=jquery-plugin.js.map
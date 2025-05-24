import $ from 'jquery';
import { convertNumberToWordsInNepaliSystem } from './index';
$.fn.nepaliNumberSystem = function (options) {
    const settings = $.extend({
        local: 'np',
    }, options);
    return this.each(function () {
        var _a;
        const $this = $(this);
        const num = $this.text().trim() || ((_a = $this.val()) === null || _a === void 0 ? void 0 : _a.toString().trim()) || '0';
        const result = convertNumberToWordsInNepaliSystem(num, settings.local);
        $this.text(result);
    });
};
//# sourceMappingURL=jquery-plugin.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumberToWordsInNepaliSystem = void 0;
const convertNumberToWordsInNepaliSystem = (num, local) => {
    if (isNaN(Number(num)))
        return '';
    const stringNumber = num.toString();
    const result = handleNumberString(stringNumber, local);
    if (result.type === 'decimal') {
        return local === 'np'
            ? `${result.beforeDecimal} रुपैयाँ ${result.afterDecimal} पैसा`
            : `${result.beforeDecimal} Rupees ${result.afterDecimal} Paisa`;
    }
    else {
        return local === 'np'
            ? `${result.converted} रुपैयाँ`
            : `${result.converted} Rupees`;
    }
};
exports.convertNumberToWordsInNepaliSystem = convertNumberToWordsInNepaliSystem;
const handleNumberString = (num, local) => {
    const zeroTo99 = [];
    const zeroTo9 = [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
    ];
    const ones = '|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fourteen|Fifteen|Sixteen|Seventeen|Eighteen|Nineteen'.split('|');
    const tens = '||Twenty|Thirty|Forty|Fifty|Sixty|Seventy|Eighty|Ninety'.split('|');
    const nepaliZeroTo99 = [
        'शून्य',
        'एक',
        'दुई',
        'तीन',
        'चार',
        'पाँच',
        'छ',
        'सात',
        'आठ',
        'नौ',
        'दस',
        'एघार',
        'बाह्र',
        'तेह्र',
        'चौध',
        'पन्ध्र',
        'सोह्र',
        'सत्र',
        'अठार',
        'उन्नाइस',
        'बीस',
        'एक्काइस',
        'बाइस',
        'तेइस',
        'चौबिस',
        'पच्चिस',
        'छब्बिस',
        'सत्ताइस',
        'अठ्ठाइस',
        'उनन्तिस',
        'तीस',
        'एकतीस',
        'बत्तिस',
        'तेत्तिस',
        'चौँतिस',
        'पैँतिस',
        'छत्तिस',
        'सैँतिस',
        'अठतीस',
        'उनन्चालिस',
        'चालीस',
        'एकचालीस',
        'बयालीस',
        'त्रिचालिस',
        'चवालीस',
        'पैँतालीस',
        'छयालिस',
        'सच्चालिस',
        'अठचालीस',
        'उनन्चास',
        'पचास',
        'एकाउन्न',
        'बाउन्न',
        'त्रिपन्न',
        'चवन्न',
        'पचपन्न',
        'छपन्न',
        'सन्ताउन्न',
        'अन्ठाउन्न',
        'उनन्साठी',
        'साठी',
        'एकसट्ठी',
        'बयसट्ठी',
        'त्रिसट्ठी',
        'चौंसट्ठी',
        'पैंसट्ठी',
        'छयसट्ठी',
        'सतसट्ठी',
        'अठसट्ठी',
        'उनन्सत्तरी',
        'सत्तरी',
        'एकहत्तर',
        'बहत्तर',
        'त्रिहत्तर',
        'चौहत्तर',
        'पचहत्तर',
        'छयहत्तर',
        'सतहत्तर',
        'अठहत्तर',
        'उनासी',
        'असी',
        'एकासी',
        'बयासी',
        'त्रियासी',
        'चौरासी',
        'पचासी',
        'छयासी',
        'सतासी',
        'अठासी',
        'उनान्नब्बे',
        'नब्बे',
        'एकान्नब्बे',
        'बयान्नब्बे',
        'त्रियान्नब्बे',
        'चौरान्नब्बे',
        'पन्चानब्बे',
        'छयान्नब्बे',
        'सन्तान्नब्बे',
        'अन्ठान्नब्बे',
        'उनान्सय',
    ];
    for (let i = 0; i < 100; i++) {
        const t = Math.floor(i / 10);
        const o = i % 10;
        zeroTo99.push(t < 2 ? ones[i] : tens[t] + (o ? ' ' + ones[o] : ''));
    }
    if (num.includes('.')) {
        const [whole, decimal] = num.split('.');
        return {
            type: 'decimal',
            original: num,
            beforeDecimal: local === 'np'
                ? convertToNepali(whole, nepaliZeroTo99)
                : convert(whole, zeroTo99),
            afterDecimal: local === 'np'
                ? convertFirstThreeDigitsToWordsInNepali(decimal, nepaliZeroTo99)
                : convertFirstThreeDigitsToWords(decimal, zeroTo9),
        };
    }
    else {
        return {
            type: 'integer',
            original: num,
            converted: local === 'np'
                ? convertToNepali(num, nepaliZeroTo99)
                : convert(num, zeroTo99),
        };
    }
};
const convertFirstThreeDigitsToWordsInNepali = (numberStr, zeroTo9) => {
    return zeroTo9[parseInt(numberStr.slice(0, 2))] || '';
};
const convertFirstThreeDigitsToWords = (numberStr, zeroTo9) => {
    return numberStr
        .slice(0, 2)
        .split('')
        .map((digit) => zeroTo9[parseInt(digit)])
        .join(' ');
};
const convertToNepali = (x, nepaliZeroTo99) => {
    const place = 'हजार|लाख|करोड|अर्ब|खर्ब|नील|पद्म|शंख'.split('|');
    let countNumLength = x.length;
    if (x === '0' || x === '00')
        return 'शून्य';
    x =
        countNumLength === 0
            ? '00'
            : countNumLength === 1 || countNumLength % 2 === 0
                ? '0' + x
                : x;
    countNumLength = x.length;
    let r = '';
    const units = x.charCodeAt(countNumLength - 2) * 10 +
        x.charCodeAt(countNumLength - 1) -
        528;
    if (units !== 0) {
        r = nepaliZeroTo99[units];
    }
    countNumLength -= 2;
    if (countNumLength >= 1) {
        const hundreds = x.charCodeAt(countNumLength - 1) - 48;
        if (hundreds !== 0) {
            const v = nepaliZeroTo99[hundreds];
            r = v + ' सय' + (r ? ' ' + r : '');
        }
        countNumLength -= 1;
    }
    for (let i = 0; countNumLength > 0; i++) {
        const placeValue = x.charCodeAt(countNumLength - 2) * 10 +
            x.charCodeAt(countNumLength - 1) -
            528;
        if (placeValue !== 0) {
            const v = nepaliZeroTo99[placeValue];
            r = v + ' ' + place[i] + (r ? ' ' + r : '');
        }
        countNumLength -= 2;
    }
    return r || 'शून्य';
};
const convert = (x, zeroTo99) => {
    const place = 'Thousand|Lakh|Crore|Arab|Kharab|Nil'.split('|');
    let countNumLength = x.length;
    x =
        countNumLength === 0
            ? '00'
            : countNumLength === 1 || countNumLength % 2 === 0
                ? '0' + x
                : x;
    countNumLength = x.length;
    let r = zeroTo99[x.charCodeAt((countNumLength -= 2)) * 10 +
        x.charCodeAt(countNumLength + 1) -
        528];
    if (countNumLength >= 1) {
        const v = zeroTo99[x.charCodeAt((countNumLength -= 1)) - 48];
        if (v)
            r = v + ' Hundred' + (r ? ' ' + r : '');
    }
    for (let i = 0; countNumLength > 0; i++) {
        const v = zeroTo99[x.charCodeAt((countNumLength -= 2)) * 10 +
            x.charCodeAt(countNumLength + 1) -
            528];
        if (v)
            r = v + ' ' + place[i] + (r ? ' ' + r : '');
    }
    return r || 'Zero';
};
// Export for global scope
if (typeof window !== 'undefined') {
    window.nepaliNumberSystem = {
        convertNumberToWordsInNepaliSystem,
    };
}
// Default export for UMD
exports.default = {
    convertNumberToWordsInNepaliSystem,
};
//# sourceMappingURL=index.js.map
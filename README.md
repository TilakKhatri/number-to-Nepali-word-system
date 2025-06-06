# Nepali Number System

A TypeScript library to convert numbers to Nepali words representation. Supports both Nepali and English output formats.

## Installation

```bash
npm install nepali-number-system
```

## Usage

### Basic Usage

```typescript
import { convertNumberToWordsInNepaliSystem } from 'nepali-number-system';

// Convert to Nepali words
console.log(convertNumberToWordsInNepaliSystem(123, 'np'));
// Output: एक सय तेइस रुपैयाँ

// Convert to English words
console.log(convertNumberToWordsInNepaliSystem(123, 'en'));
// Output: One Hundred Twenty Three Rupees

// With decimal numbers
console.log(convertNumberToWordsInNepaliSystem('123.45', 'np'));
// Output: एक सय तेइस रुपैयाँ पैंतालीस पैसा
```

### jQuery Plugin

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/nepali-number-system.min.js"></script>
<script>
  $(document).ready(function() {
    // Convert number to Nepali words
    const result = $.convertToNepaliWords(123, 'np');
    console.log(result);
  });
</script>
```

### React 
```typescript
import { convertNumberToWordsInNepaliSystem } from 'nepali-number-system';
function MyComponent() {
  const { convertToWords } = useNepaliNumberConverter();
  
  const handleConvert = () => {
    const result = convertToWords(123, 'np');
    console.log(result);
  };

  return (
    <button onClick={handleConvert}>
      Convert Number
    </button>
  );
```

OR
### React Hook


```typescript
import { useNepaliNumberConverter } from 'nepali-number-system';

function MyComponent() {
  const { convertToWords } = useNepaliNumberConverter();
  
  const handleConvert = () => {
    const result = convertToWords(123, 'np');
    console.log(result);
  };

  return (
    <button onClick={handleConvert}>
      Convert Number
    </button>
  );
}
```
## Note 
```
We are only taking 2 digits after decimal, It depends on the respective organization rules.
```
## Features

- Convert numbers to Nepali words
- Support for both Nepali and English output
- Handle decimal numbers (Rupees and Paisa)
- Support for large numbers (up to शंख)
- Multiple module formats (CommonJS, ES Modules, UMD)
- TypeScript support
- jQuery plugin
- React hook

## License
MIT License
Copyright (c) 2025 Tilak Khatri

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

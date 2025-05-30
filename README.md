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
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

import React, { useState } from 'react';
import { useNepaliNumberSystem } from '../src/react-hook';

const NepaliNumberConverter: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [language, setLanguage] = useState<'np' | 'en'>('np');
  const { convert, result } = useNepaliNumberSystem();

  const handleConvert = () => {
    convert(number, language);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#333', textAlign: 'center' }}>
        Nepali Number Converter
      </h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
          }}
        />

        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>
            <input
              type="radio"
              checked={language === 'np'}
              onChange={() => setLanguage('np')}
            />
            Nepali
          </label>
          <label>
            <input
              type="radio"
              checked={language === 'en'}
              onChange={() => setLanguage('en')}
            />
            English
          </label>
        </div>

        <button
          onClick={handleConvert}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Convert
        </button>
      </div>

      {result && (
        <div
          style={{
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontSize: '18px',
            lineHeight: '1.5',
          }}
        >
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default NepaliNumberConverter;

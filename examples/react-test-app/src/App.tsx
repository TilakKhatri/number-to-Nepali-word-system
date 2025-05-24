import { useState } from 'react'
import { convertNumberToWordsInNepaliSystem } from '../../../dist/esm'
import './App.css'

function App() {
  const [number, setNumber] = useState('')
  const [language, setLanguage] = useState<'np' | 'en'>('np')
  const [result, setResult] = useState('')

  const handleConvert = () => {
    try {
      const converted = convertNumberToWordsInNepaliSystem(number, language)
      setResult(converted)
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Nepali Number Converter</h1>
      
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
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '15px' }}>
            <input
              type="radio"
              checked={language === 'np'}
              onChange={() => setLanguage('np')}
            /> Nepali
          </label>
          <label>
            <input
              type="radio"
              checked={language === 'en'}
              onChange={() => setLanguage('en')}
            /> English
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
            cursor: 'pointer'
          }}
        >
          Convert
        </button>
      </div>

      {result && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#000000',
            borderRadius: '4px',
            fontSize: '18px',
            lineHeight: '1.5'
          }}
        >
          {result}
        </div>
      )}
    </div>
  )
}

export default App

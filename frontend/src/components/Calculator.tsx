import { useState } from "react";

const Calculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<string | null>(null);
  
    const handleCalculate = () => {
      try {
        let delimiter = /,|\n/;
        let value = input;
  
        if (input.startsWith("//")) {
          const match = input.match(/^\/\/(.)\n(.*)$/);
          if (match) {
            delimiter = new RegExp(match[1]);
            value = match[2];
          }
        }
  
        const parts = value.split(delimiter).map(Number);
        const negatives = parts.filter(n => n < 0);
        if (negatives.length > 0) {
          setResult(`Error: negative numbers not allowed - ${negatives.join(', ')}`);
          return;
        }
  
        const sum = parts.reduce((acc, val) => acc + val, 0);
        setResult(`Sum: ${sum}`);
      } catch {
        setResult('Error: Invalid input');
      }
    };
  
    return (
      <div>
        <input
          placeholder="Enter numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleCalculate}>Calculate</button>
        {result && <p>{result}</p>}
      </div>
    );
  };
  
  export default Calculator;
// AddComponent.tsx

import React, { useState, useEffect } from 'react';
import { addNumberWithWASM } from './logic'; // Import the Intent

const AddNumberWithWASM: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleAdd = async () => {
    try {
      const res = await addNumberWithWASM(num1, num2); // Call Intent
      setResult(res); // Update the result
    } catch (error) {
      console.error("Error performing addition:", error);
    } 
  };

  return (
    <div>
      <h2>WebAssembly Add Function</h2>
      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleAdd}> add </button>
      <div>
        {result !== null && <h3>Result: {result}</h3>}
      </div>
    </div>
  );
};

export default AddNumberWithWASM;
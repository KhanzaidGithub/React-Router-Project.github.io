import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Using eval for simplicity; in production, use a safer method
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border  rounded-lg shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-end p-2 border-b ">
          <div className="text-xl font-bold">{result || input || '0'}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick('1')} className="p-4 ">1</button>
          <button onClick={() => handleClick('2')} className="p-4 ">2</button>
          <button onClick={() => handleClick('3')} className="p-4 ">3</button>
          <button onClick={() => handleClick('+')} className="p-4  ">+</button>
          <button onClick={() => handleClick('4')} className="p-4 ">4</button>
          <button onClick={() => handleClick('5')} className="p-4 ">5</button>
          <button onClick={() => handleClick('6')} className="p-4 ">6</button>
          <button onClick={() => handleClick('-')} className="p-4 ">-</button>
          <button onClick={() => handleClick('7')} className="p-4  ">7</button>
          <button onClick={() => handleClick('8')} className="p-4 ">8</button>
          <button onClick={() => handleClick('9')} className="p-4 ">9</button>
          <button onClick={() => handleClick('*')} className="p-4">*</button>
          <button onClick={handleClear} className="col-span-2 p-4">C</button>
          <button onClick={() => handleClick('0')} className="p-4 ">0</button>
          <button onClick={() => handleClick('/')} className="p-4">/</button>
          <button onClick={handleCalculate} className="col-span-4 ">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;













// import React, { useState } from 'react';

// const Calculator = () => {
//   const [input, setInput] = useState('');

//   const handleClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setInput('');
//   };

//   const handleCalculate = () => {
//     try {
//       setInput(eval(input).toString());
//     } catch {
//       setInput('Error');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-200">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <div className="mb-4">
//           <input
//             type="text"
//             value={input}
//             readOnly
//             className="w-full p-4 text-right border border-gray-300 rounded-lg"
//           />
//         </div>
//         <div className="grid grid-cols-4 gap-2">
//           <button onClick={() => handleClick('1')} className="bg-gray-300 p-4 rounded-lg">1</button>
//           <button onClick={() => handleClick('2')} className="bg-gray-300 p-4 rounded-lg">2</button>
//           <button onClick={() => handleClick('3')} className="bg-gray-300 p-4 rounded-lg">3</button>
//           <button onClick={handleClear} className="bg-red-500 text-white p-4 rounded-lg">C</button>
//           <button onClick={() => handleClick('4')} className="bg-gray-300 p-4 rounded-lg">4</button>
//           <button onClick={() => handleClick('5')} className="bg-gray-300 p-4 rounded-lg">5</button>
//           <button onClick={() => handleClick('6')} className="bg-gray-300 p-4 rounded-lg">6</button>
//           <button onClick={() => handleClick('/')} className="bg-yellow-500 p-4 rounded-lg">/</button>
//           <button onClick={() => handleClick('7')} className="bg-gray-300 p-4 rounded-lg">7</button>
//           <button onClick={() => handleClick('8')} className="bg-gray-300 p-4 rounded-lg">8</button>
//           <button onClick={() => handleClick('9')} className="bg-gray-300 p-4 rounded-lg">9</button>
//           <button onClick={() => handleClick('*')} className="bg-yellow-500 p-4 rounded-lg">*</button>
//           <button onClick={() => handleClick('0')} className="bg-gray-300 p-4 rounded-lg">0</button>
//           <button onClick={() => handleClick('.')} className="bg-gray-300 p-4 rounded-lg">.</button>
//           <button onClick={handleCalculate} className="bg-green-500 text-white p-4 rounded-lg col-span-2">=</button>
//           <button onClick={() => handleClick('-')} className="bg-yellow-500 p-4 rounded-lg">-</button>
//           <button onClick={() => handleClick('+')} className="bg-yellow-500 p-4 rounded-lg">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;


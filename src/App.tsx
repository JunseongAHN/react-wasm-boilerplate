import AddNumberWithWASM from "./feature/addNumberWithWASM/view";

function App() {
  return (
      <div className="App">
        <h1>Welcome to WebAssembly App</h1>
        <AddNumberWithWASM />
      </div>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// // import createModule from "./matrixMultiply.mjs";

// // declare global {
//   interface WASM {
//   }
// // }

// let wasmG:WASM;

// async function initializeWASM(): Promise<any> { // 'any' or a specific type if you know the shape of the exports
//   try {
//     // Fetch the WASM file
//     const response = await fetch('calc.wasm');
    
//     if (!response.ok) {
//       throw new Error(`Failed to fetch WASM file: ${response.statusText}`);
//     }
    
//     // Read the response as an ArrayBuffer
//     const bytes = await response.arrayBuffer();

//     // Instantiate the WebAssembly module
//     const { instance } = await WebAssembly.instantiate(bytes, { imports: {} });

//     console.log("WASM instance exports:", instance);

//     // You can access WebAssembly exports here
//     // If you know the exports, you can access them like so:
//     // window.fib = instance.exports.fib; // if fib is exported

//     return instance.exports; // Return the exports from the WASM instance

//   } catch (error) {
//     console.error("Error loading WASM:", error);
//     return null; // Or handle accordingly, depending on your needs
//   }
// }

// function wrapMatrixMultiply(Module) {
//   // JS-friendly wrapper around the WASM call
//   return function (firstMatrix, secondMatrix) {
//     // multiplies two square matrices (as 2-D arrays) of the same size and returns the result
//     const length = firstMatrix.length;

//     // set up input arrays with the input data
//     const flatFirst = new Float32Array(firstMatrix.flat());
//     const flatSecond = new Float32Array(secondMatrix.flat());
//     const buffer1 = Module._malloc(
//       flatFirst.length * flatFirst.BYTES_PER_ELEMENT
//     );
//     const buffer2 = Module._malloc(
//       flatSecond.length * flatSecond.BYTES_PER_ELEMENT
//     );
//     Module.HEAPF32.set(flatFirst, buffer1 >> 2);
//     Module.HEAPF32.set(flatSecond, buffer2 >> 2);

//     // allocate memory for the result array
//     const resultBuffer = Module._malloc(
//       flatFirst.length * flatFirst.BYTES_PER_ELEMENT
//     );

//     // make the call
//     const resultPointer = Module.ccall(
//       "matrixMultiply",
//       "number",
//       ["number", "number", "number", "number"],
//       [buffer1, buffer2, resultBuffer, length]
//     );

//     // get the data from the returned pointer into an flat array
//     const resultFlatArray = [];
//     for (let i = 0; i < length ** 2; i++) {
//       resultFlatArray.push(
//         Module.HEAPF32[resultPointer / Float32Array.BYTES_PER_ELEMENT + i]
//       );
//     }

//     // convert the flat array back into an array of arrays
//     const result = [];
//     while (resultFlatArray.length) {
//       result.push(resultFlatArray.splice(0, length));
//     }
//     Module._free(buffer1);
//     Module._free(buffer2);
//     Module._free(resultBuffer);
//     return result;
//   };
// }

// function App() {
//   const [add, setAdd] = useState();
//   const [matrixMultiply, setMatrixMultiply] = useState();
//   const [wasm, setWasm] = useState<any>(null); // Track the WASM exports
//   // useEffect(
//   //   // useEffect here is roughly equivalent to putting this in componentDidMount for a class component
//   //   () => {
//   //     createModule().then((Module) => {
//   //       // need to use callback form (() => function) to ensure that `add` is set to the function
//   //       // if you use setX(myModule.cwrap(...)) then React will try to set newX = myModule.cwrap(currentX), which is wrong
//   //       setAdd(() => Module.cwrap("add", "number", ["number", "number"]));
//   //       setMatrixMultiply(() => wrapMatrixMultiply(Module));
//   //     });
//   //   },
//   //   []
//   // );

//   // useEffect(() => {
//   //   // Load the WASM module when the component mounts
//   //   const loadWasm = async () => {
//   //     try {
//   //       // Dynamically import the Emscripten-generated JavaScript file
//   //       const wasmModule = await import('calc.js');
        
//   //       // Initialize the WASM module (this returns a promise)
//   //       await wasmModule.onRuntimeInitialized();
        
//   //       // Get the exported add function from the WASM module
//   //       const add = wasmModule._add;
        
//   //       // Set the add function to the state so we can use it later
//   //       setAddWasm(() => add);
//   //     } catch (error) {
//   //       console.error('Error loading WASM module:', error);
//   //     }
//   //   };

//   //   loadWasm();
//   // }, []);


//   // const loadWASM = async () => {
//   //   const wasmExports = await initializeWASM();
//   //   if (wasmExports) {
//   //     setWasm(wasmExports); // Update state with the WASM exports
//   //     setAdd(wasmExports.add); // Assuming `add` is a function exported from WASM
//   //     setMatrixMultiply(wasmExports.matrixMultiply); // Assuming `matrixMultiply` is a function
//   //   }
//   // };

//   console.log("useEffect START");

//   useEffect(() => {
//     console.log("useEffect!!!!");

//     const loadWASM = async () => {
//       const wasmExports = await initializeWASM();
//       console.log("you got here!!", wasmExports);
//       if (wasmExports) {
//         // Set WASM as a global variable
//         wasmG = wasmExports;

//         // Update state to trigger re-render
//         setWasm(wasmExports);
//         setAdd(wasmExports.add); // Assuming `add` is a function exported from WASM
//         setMatrixMultiply(wasmExports.matrixMultiply); // Assuming `matrixMultiply` is a function
//         console.log("HWERE!!!!",wasmG, wasmG.add(1, 2));
//       }
//     };

//     loadWASM(); // Trigger the WASM initialization

//   }, []); // Empty dependency array to run only once when the component mounts



//   // console.log("window.fib",window.fib);

//   // if (!add || !matrixMultiply) {
//   //   return "Loading webassembly...";
//   // }

//   // const result = matrixMultiply(
//   //   [
//   //     [1, 2],
//   //     [3, 4],
//   //   ],
//   //   [
//   //     [5, 6],
//   //     [7, 8],
//   //   ]
//   // );

//   return (
//     <div className="App">
//       <p>Pls work</p>
//       {/* <div>1 + 2 = {add(1, 2)}</div>
//       <div>[[1, 2], [3, 4]] @ [[5, 6], [7, 8]] = {JSON.stringify(result)}</div> */}
//     </div>
//   );
// }

// export default App;

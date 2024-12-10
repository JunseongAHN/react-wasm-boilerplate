import { getWasmInstance } from '../../wasm/initalizeWASM';

// The Intent handles actions and updates the state or calls the Model (WASM)
export const addNumberWithWASM = async (num1: number, num2: number): Promise<number> => {
  let wasm = getWasmInstance();
  if (wasm) {
    return wasm.add("a");
  } else {
    throw new Error("WASM add function is not available.");
  }
};
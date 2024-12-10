import { getWasmInstance } from '../../wasm/initalizeWASM';

// The Intent handles actions and updates the state or calls the Model (WASM)
export const addNumberWithWASM = async (num1: number, num2: number): Promise<number> => {
  let wasm = getWasmInstance();
  if (wasm) {
    // even wasm.add("a") or wasm.add(3,2,3)
    // doesn't cause error since it is not binded
    return wasm.add_noBinding(num1, num2);
  } else {
    throw new Error("WASM add function is not available.");
  }
};

// The Intent handles actions and updates the state or calls the Model (WASM)
export const subNumberWithWASM = async (num1: number, num2: number): Promise<number> => {
  let wasm = getWasmInstance();
  if (wasm) {
    // even wasm.add("a") or wasm.add(3,2,3)
    // doesn't cause error since it is not binded
    return wasm.sub_noBinding(num1, num2);
  } else {
    throw new Error("WASM sub function is not available.");
  }
};

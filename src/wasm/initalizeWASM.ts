// wasmInit.ts

// Declare a global variable to store the WASM instance
let wasmInstance: any = null;

// Function to initialize the WASM module
export const initializeWASM = async (): Promise<any> => {
  if (wasmInstance) {
    // If already initialized, return the existing instance
    return wasmInstance;
  }

  try {
    // Fetch the WASM file
    const response = await fetch('calc.wasm');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch WASM file: ${response.statusText}`);
    }

    // Read the response as an ArrayBuffer
    const bytes = await response.arrayBuffer();

    // Instantiate the WebAssembly module
    const { instance } = await WebAssembly.instantiate(bytes, { imports: {} });

    console.log("WASM instance exports:", instance);

    // Store the instance globally
    wasmInstance = instance.exports;

    return wasmInstance;

  } catch (error) {
    console.error("Error loading WASM:", error);
    return null; // Or handle accordingly, depending on your needs
  }
};

// Export the WASM instance directly to use it elsewhere
export const getWasmInstance = (): any => wasmInstance;
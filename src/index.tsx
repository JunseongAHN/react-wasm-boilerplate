import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeWASM } from "./wasm/initalizeWASM";


const startApp = async () => {
  // Initialize WASM before rendering the app
  await initializeWASM();

  // Now render the App once WASM is initialized
  ReactDOM.render(<App />, document.getElementById('root'));
};

// Start the app
startApp();
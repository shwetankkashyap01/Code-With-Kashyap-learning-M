import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  addToRef,
  animateCurrentElements,
} from "./dataLayer/animation";
import { StateProvider } from "./StateProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider
      addToRef={addToRef}
      animateCurrentElements={animateCurrentElements}
    >
      <App />
    </StateProvider>
  </React.StrictMode>
);



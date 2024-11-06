import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <h2 id="gameName">TicTacToe</h2>
      <App />
    </div>
  </StrictMode>
);

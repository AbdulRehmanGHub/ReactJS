// // we are going to use React - but the more focus will be on use of images in React.

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const app = (
  <div>
    <App />
  </div>
);

root.render(app);

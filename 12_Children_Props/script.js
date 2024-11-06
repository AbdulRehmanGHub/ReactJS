import React from "react";
import ReactDOM from "react-dom/client";
import AppleCounter from "./components/AppleCounter";
import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = (
  <>
    <AppleCounter />
  </>
);

root.render(container);

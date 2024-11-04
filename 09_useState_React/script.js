import React from "react";
import ReactDOM from "react-dom/client";
// import Counter from "./components/Counter";
import AppleCounter from "./components/appleCounter";
import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = (
  <>
    {/* <Counter /> */}
    <AppleCounter />
  </>
);

root.render(container);

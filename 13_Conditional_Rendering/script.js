import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = (
  <>
    <Counter />
  </>
);

root.render(container);

import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = (
  <div>
    <Header />
    <Main />
    <Card />
    <Footer />
  </div>
);

root.render(container);

// import { user } from " /data.js";        // // we can import data from another file by this way.
// console.log(user);

import React from "react";
import ReactDOM from "react-dom/client";

// // code for hot reloading -- this method of parcel allows us to keep changing code without reloading page again and again. We can get code from Parcel website.

if (module.hot) {
  module.hot.accept();
}

// console.log(React);

// document.body.innerHTML =
//   "<h2>React with Parcel</h2> <br> <p>'The zero configuration build tool for the web JavaScript CSS HTML TypeScript React images SASS SVG Vue libraries Less CoffeeScript Node Stylus Pug Electron Elm WebGL extensions GraphQL MDX XML  Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application'</p>";

// // written without JSX - for concept clearing
const container = React.createElement("div", { className: "container" }, [
  React.createElement("h1", { key: 1 }, "React with Parcel"),
  React.createElement(
    "p",
    { key: 2 },
    "The zero configuration build tool for the web JavaScript CSS HTML TypeScript React images SASS SVG Vue libraries Less CoffeeScript Node Stylus Pug Electron Elm WebGL extensions GraphQL MDX XML  Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application."
  ),
  React.createElement(
    "p",
    { key: 3, style: { color: "blue" } },
    "Install: npm install --save-dev parcel"
  ),
  React.createElement(
    "p",
    { key: 4, style: { color: "blue" } },
    "Run Command: npx parcel index.html(or any file name)"
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

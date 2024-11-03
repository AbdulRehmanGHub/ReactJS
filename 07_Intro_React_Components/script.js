import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./style..css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// function Card(props) {
//   // // destructuring of objects. ES6 concept
//   const { key, title, thumbnail, category, price } = props;
//   return (
//     <div key={key} className="card">
//       <div className="image">
//         <img src={thumbnail} alt={title} />
//       </div>
//       <div className="text">
//         <h3>{title}</h3>
//         <p>{category}</p>
//         <p>
//           ${price} &nbsp;
//           <span>${(price * 1.5).toFixed(2)}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// fetch("https://dummyjson.com/products/search?q=phone")
//   .then((res) => res.json())
//   .then((data) => {
//     root.render(
//       <div className="container">
//         <h2 className="heading">React Components</h2>
//         <div className="cards">
//           {data.products.map((product) => {
//             return Card({
//               key: product.id,
//               thumbnail: product.thumbnail,
//               title: product.title,
//               price: product.price,
//               category: product.category,
//               // // now, we can change the order of these items here.
//             });
//           })}
//         </div>
//       </div>
//     );
//   });

// // Before Starting the React Components, we must know these things.

// // React element declaration and it's essential properties. There are more properties, but these are necessary.
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: "h1",
//   ref: null,
//   props: {
//     children: "Basic Syntax",
//   },
// });

// // Using JSX - The above one is same and provide the same and more properties of react element.
// const h1 = <h1>Basic Syntax</h1>
// console.log(h1);

// // We can even give function as type

// function printAbdul() {
//   return <h2 style={{ color: "teal" }}>Abdul</h2>;
// }

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: printAbdul,
//   ref: null,
//   props: {},
// });

// // ------------------------------------------------------

// function Card(props) {
//   const { key, title, thumbnail, category, price } = props;
//   return (
//     <div className="container">
//       <div className="cards">
//         <div key={key} className="card">
//           <div className="image">
//             <img src={thumbnail} alt={title} />
//           </div>
//           <div className="text">
//             <h3>{title}</h3>
//             <p>{category}</p>
//             <p>
//               ${price} &nbsp;
//               <span>${(price * 1.5).toFixed(2)}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Method 1 - to create a react component.
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
//   props: {
//     title: "Dell Laptop e3570",
//     thumbnail:
//       "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
//     category: "phone",
//     price: "99.99",
//     key: 1,
//   },
// });

// // Simple and best practice to create a React Component
// root.render(
//   <Card
//     title="Dell Laptop e3570"
//     thumbnail="https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png"
//     category="phone"
//     price="99.99"
//   />
// );

// // we can do this in above function.
// root.render(
//   <Card
//     key={key}
//     title={title}
//     thumbnail={thumbnail}
//     category={category}
//     price={price}
//   />
// );

// // this is the same above function - I've copy paste it here. We are applying props in this functions

function Card(props) {
  const { id, title, thumbnail, category, price } = props;
  return (
    <div key={id} className="card">
      <div className="image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>
          ${price} &nbsp;
          <span>${(price * 1.5).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products/search?q=phone")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        <h2 className="heading">React Components</h2>
        <div className="cards">
          {data.products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                category={product.category}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    );
  });

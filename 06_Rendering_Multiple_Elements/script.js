import React from "react";
import ReactDOM from "react-dom/client";

// // we can import styles from another files also.

// console.log(React);
// console.log(ReactDOM);

// // Through React Elements Method
// const container = React.createElement("div", { className: "container" }, [
//   React.createElement(
//     "h2",
//     { key: 1, className: "heading" },
//     "Redering Multiple Elements"
//   ),

//   React.createElement("p", { key: 2, className: "para" }, "paragraph"),
// ]);

// const products = fetch("https://dummyjson.com/products")
//   .then((res) =>
//     res.json().then((data) => {
//       const products = data.products;
//       // console.log(products);

//       // // Through JSX method - simple and easy
//       const container = (
//         <div
//           className="contnainer"
//           style={{
//             margin: 0,
//             padding: 0,
//             minHeight: "100vh",
//             backgroundColor: "#dadada",
//             fontFamily: "cursive",
//           }}
//         >
//           <h2 className="heading" style={{ padding: "12px" }}>
//             Rendering Multiple Elements
//           </h2>

//           <div
//             className="cards"
//             style={{
//               padding: "6px 8px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-evenly",
//               flexWrap: "wrap",
//               rowGap: "20px",
//               columnGap: "16px",
//             }}
//           >
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="card"
//                 style={{
//                   border: "1px solid #000",
//                   boxShadow: "1px 1px 10px teal",
//                   width: "300px",
//                   minHeight: "280px",
//                   borderTopRightRadius: "12px",
//                   borderTopLeftRadius: "12px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <div
//                   className="image"
//                   style={{ width: "100%", height: "200px" }}
//                 >
//                   <img
//                     src={product.thumbnail}
//                     alt={product.title}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//                 <div
//                   className="text"
//                   style={{
//                     minHeight: "80px",
//                     padding: "4px",
//                     backgroundColor: "teal",
//                     color: "#fff",
//                   }}
//                 >
//                   <h3 style={{ margin: "2px 0", fontSize: "16px" }}>
//                     {`${product.title}`}
//                   </h3>
//                   <p style={{ margin: "2px 0", fontSize: "12px" }}>
//                     {product.category}
//                   </p>
//                   <p style={{ margin: "2px 0", fontSize: "14px" }}>
//                     ${product.price.toFixed(2)} &nbsp;
//                     <span style={{ textDecoration: "line-through" }}>
//                       ${(product.price * 2).toFixed(2)}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );

//       const root = ReactDOM.createRoot(document.querySelector("#root"));
//       root.render(container);
//     })
//   )
//   .catch((error) => console.log("Error fetching products:", error));

// // Method 2 - we can make this more concise by implementing the styling in style.css file separately.
// Importing the CSS file
import "./style..css";

fetch("https://dummyjson.com/products/search?q=phone")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;

    const container = (
      <div className="container">
        <h2 className="heading">Rendering Multiple Products</h2>

        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="text">
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>
                  ${product.price.toFixed(2)} &nbsp;
                  <span>${(product.price * 1.5).toFixed(2)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(container);
  })
  .catch((error) => console.error("Error fetching products:", error));

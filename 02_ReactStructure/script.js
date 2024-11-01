// // Basic Structure to print Hello World
// const root = ReactDom.createRoot(document.querySelector("root"));
// root.render(<h1>Hello World!</h1>);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// // passing/creating a sinlge object
// const h2 = React.createElement(
//   "h2",
//   { className: "hihello", id: "ididid" },
//   "Hello React"
// );
// root.render(h2);

// passing/creating multiple objects, elements etc -- we need an array for this and every object/element must have a unique key.
// Note: Siblings keys must Not be same
const container = React.createElement("div", { className: "container" }, [
  React.createElement("div", { key: 1, className: "section" }, [
    React.createElement(
      "h2",
      { id: "heading", key: 2 },
      "Hi, Welcome to React"
    ),

    React.createElement(
      "p",
      { id: "para", key: 3 },
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
    ),
  ]),

  // // adding and styling image
  React.createElement("img", {
    key: 10,
    src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    style: { width: 200, backgroundColor: "#dadada", borderRadius: "20px" },
  }),

  // // creating form
  React.createElement(
    "form",
    {
      key: 11,
      className: "form",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        margin: "1rem 0 3rem 0",
      },
    },
    [
      React.createElement(
        "h3",
        { key: 1, className: "formHeading" },
        "Fill the Form"
      ),
      React.createElement("input", {
        key: 2,
        type: "text",
        placeholder: "enter name",
      }),
      React.createElement("input", {
        key: 3,
        type: "password",
        placeholder: "enter password",
      }),
    ]
  ),

  // now, we can copy and paste this, or anything we can do like making img, p, etc...
  React.createElement(
    "div",
    {
      className: "hi",
      key: 4,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    },
    [
      React.createElement(
        "h2",
        {
          id: "heading",
          key: 5,
          style: { backgroundColor: "black", color: "white" },
        },
        "Hi, Welcome to React"
      ),

      React.createElement(
        "p",
        { id: "para", key: 6 },
        "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
      ),
    ]
  ),
]);

root.render(container);

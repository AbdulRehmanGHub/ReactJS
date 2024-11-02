const root = ReactDOM.createRoot(document.querySelector("#root"));

const user = "abdul"; // // this is example, that we can write JS logic, or variables in our JSX coding.

// // Just like we write simple HTML and JS. Easy.
const container = (
  <div>
    <p>
      Hi, {user}. Your age is {10 + 12}.
    </p>
    <h2>Welcome to JSX</h2>

    <p>
      Browsers don’t understand JSX out of the box, so most React users rely on
      a compiler like Babel to transform JSX code into regular JavaScript. Many
      preconfigured toolkits like Create React App or Next.js also include a JSX
      transform under the hood.
    </p>

    <img
      src="https://velog.velcdn.com/images/jellyjw/post/a2775176-d873-4ac1-b59d-9c06186bdddb/image.png"
      style={{ width: "460px" }}
    ></img>

    <p>
      Babel is a JavaScript compiler.
      <span>Use next generation JavaScript, today.</span>
    </p>
  </div>
);

// console.log(container);

root.render(container);

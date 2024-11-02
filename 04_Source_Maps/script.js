const root = ReactDOM.createRoot(document.querySelector("#root"));

const user = "abdul"; // // this is example, that we can write JS logic, or variables in our JSX coding.

// // Just like we write simple HTML and JS. Easy.
const container = (
  <div>
    <p>
      Hi, {user}. Your age is {10 + 12}.
    </p>
    <h2>Welcome to JSX, Source Maps</h2>

    <p>
      Source maps allow you to map a transformed file back to the original
      source file. The main purpose of source maps is to aid debugging and help
      with investigating issues from release builds.
    </p>

    <img
      src="https://web.dev/static/articles/source-maps/image/developer-tools-applies-ea66f57e838eb.png"
      style={{ width: "500px" }}
    ></img>

    <p>
      Babel is a JavaScript compiler.
      <span>Use next generation JavaScript, today.</span>
    </p>
  </div>
);

console.log(container);

root.render(container);

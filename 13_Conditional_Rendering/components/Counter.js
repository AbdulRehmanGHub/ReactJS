// // Conditional Rendering is just a condition like if else, ternary condition. We can also render the complete components based on conditional rendering.
// // Example: if user is loggedIn show dashboard, else signin page.
// // if(){return 1} return 0;
// // "hello" ? true : false;
// // count === 10 && "Max Count Reached";
// // More info: https://react.dev/learn/conditional-rendering

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", margin: "2rem 0"}}>
      <h2>Count: {count}</h2>

      {/* Applying basic if else condition */}
      <button onClick={() => {if(count !== 20){setCount(count + 1)}}}>+ Count</button>
      <button onClick={() => {if(count !== 0){setCount(count - 1)}}}>- Count</button>

      {/* Using ternary condition */}
      <p>{count === 20 ? "full" : count === 0 ? "empty" : ""}</p>

      {/* Using && --- this is not a good place to use && here but this is just for understanding. */}
      <p style={{color: "green"}}>{count === 20 && "Max"}</p>
      <p style={{color: "red"}}>{count === 0 && "Min"}</p>
    </div>
  );
};

export default Counter;
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+ Count</button>
      <button onClick={() => setCount(count - 1)}>- Count</button>
    </div>
  );
};

export default Counter;

// // I've used useState Hook, and this is a basic example of useState.

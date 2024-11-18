import React, { useState } from "react";

const UseStateComp = () => {
  const [counter, setCounter] = useState(0);

  const decreaseCount = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="container">
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </>
  );
};

export default UseStateComp;

{
  /* we can also create the function above and call upon onClick as we did in case of Decrease Button. In small projects like counter, max min finder, math small projects we can use inline set method but in case of large projects we should keep the function separate to avoid complexity. */
}

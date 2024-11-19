import React, { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

const UseCallbackComp = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // // ChildComp is also running with counter2 button clicked each time.
//    const handleClick = () => setCounter1(counter1);

  // // Using Callback
  const handleClick = useCallback(() => setCounter1(counter1 + 1), [counter1]);

  return (
    <div className="container">
      <h1>{counter2}</h1>
      <ChildComp handleClick={handleClick} />
      <button onClick={() => setCounter2(counter2 + 1)}>Count ++</button>
    </div>
  );
};

export default UseCallbackComp;

// // In the given scenario, when we click the counter2 button to change the value, then counter1(from other component ChildComp) is also run, which is making issue here. To handle this issue we use the useCallback hook to avoid such issues.
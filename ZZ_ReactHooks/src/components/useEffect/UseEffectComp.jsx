import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  // let's say i want to run useEffect on button click every time. useEffect is useful if we want to fetch data from other sources, or effect on some change. useEffect is a React Hook that lets you synchronize a component with an external system.
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect run");

    // like we want to see the counter at title
    document.title = `Count = ${count}`;
  }, [count]);

  useEffect(() => {
    const apiData = async () => {
      const api = await fetch("https://dummyjson.com/quotes");
      const res = await api.json();
      console.table(res.quotes);
    };
    apiData();
  }, []);

  // if we don't pass the count in [], then useEffect will not apply / run for title change.

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
};

export default UseEffectComp;

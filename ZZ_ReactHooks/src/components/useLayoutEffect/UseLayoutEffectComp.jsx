import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectComp = () => {
  const [bgColor, setBgColor] = useState("green");

  // // useEffect will run after the useLayoutEffect
  useEffect(() => {
    console.log("useEffect is running..");
  }, []);

  // // useLayoutEffect will run first
  useLayoutEffect(() => {
    console.log("useLayoutEffect is running..");
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div className="container">
      <h1>BG Colorizer</h1>
      <button onClick={() => setBgColor("orange")}>Change Color</button>
    </div>
  );
};

export default UseLayoutEffectComp;

// UseLayoutEffect and UseEffect are both same with same methods and concept. But the UseLayoutEffect is running first then useEffect is run. Generally useEffect is used widely, but if we want some basic changes to our window, document, then useLayoutEffect is good.
// useLayoutEffect can hurt performance. Prefer useEffect when possible.
// useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

import { useRef } from "react";

// // useRef is a React Hook that lets us reference a value that’s not needed for rendering.

const UseRefComp = () => {
  const myRef = useRef();
  //   console.log(myRef);

  const inpFocus = () => {
    myRef.current.focus();
    // console.log(myRef.current);
  };

  return (
    <div className="container">
      <h1>Focus on Input</h1>
      <input ref={myRef} type="text" />
      <button onClick={inpFocus}>Let Focus</button>
    </div>
  );
};

export default UseRefComp;

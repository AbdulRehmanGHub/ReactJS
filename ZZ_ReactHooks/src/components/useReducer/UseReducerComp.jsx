import React, { useReducer } from "react";

const UseReducerComp = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <>
      <div className="container">
        <h1>{state.count}</h1>
        <button
          onClick={() => dispatch({ type: "Increment" })}
          value={"Increment"}
        >
          Increase
        </button>
        <button
          onClick={() => dispatch({ type: "Decrement" })}
          value={"Decrement"}
        >
          Decrease
        </button>
      </div>
    </>
  );
};

export default UseReducerComp;

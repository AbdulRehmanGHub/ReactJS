import { useMemo, useState } from "react";

const UseMemoComp = () => {
  const [inputVal, setInputVal] = useState("");

  const calcResult = (input) => {
    return input.length;
  };

  const memoizedResult = useMemo(() => calcResult(inputVal), [inputVal]);

  return (
    <div className="container">
      <h1>Char Counter</h1>
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        type="text"
      />
      <span>Char Length = {memoizedResult}</span>
    </div>
  );
};

export default UseMemoComp;

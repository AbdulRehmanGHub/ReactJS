// // According to React official Docs, we should avoid children props as much as possible.
// // More info: https://react.dev/reference/react/Children

import Arrow from "./Arrow";
import ArrowImg from "../assets/arrow.png";
import Basket from "./Basket";

import { useState } from "react";

const AppleCounter = () => {
  const totalApples = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalApples - rightAppleCount
  );

  const leftClick = () => {
    if (leftAppleCount < 10) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };

  const rightClick = () => {
    if (rightAppleCount < 10) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };
  return (
    <div className="container" style={{ display: "flex" }}>
      <Basket appleCount={leftAppleCount} basketName={"basket1"} />
      {/* <Arrow clickHandler={leftClick} imgUrl={ArrowImg} title={"leftArrow"} /> */}

      {/* We can declare Arrow Button like this with closing tag, by doing so we will get another props called children. */}
      <Arrow clickHandler={leftClick} imgUrl={ArrowImg} title={"leftArrow"}>
        {/* We can pass anything here, like object, function, text etc. */}
        {/* Hello World */}
        {/* function hi() {console.log("hello")} */}
      </Arrow>

      <Arrow
        clickHandler={rightClick}
        imgUrl={ArrowImg}
        rotate
        title={"rightArrow"}
      />
      <Basket appleCount={rightAppleCount} basketName={"basket2"} />
    </div>
  );
};

export default AppleCounter;

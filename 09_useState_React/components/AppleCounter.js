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
      <Arrow clickHandler={leftClick} imgUrl={ArrowImg} title={"leftArrow"} />
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

// // Imperative Programming
// // We have also build this appleCounter using simple JS. which is called the imperative programming. The whole page or DOM is redering after each count. Which is not good in memory, optimization, speed point of view.

// // Declarative Programming
// // Here in React, we used Declarative programming. The useState method allows us to only render/change the part of page which is changing such as in our case count. The whole page and functions are same. But only change occuring is in count increase and decrease. Which is reliable, fast, optimize.

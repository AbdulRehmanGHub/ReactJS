import Arrow from "./Arrow";
import ArrowImg from "../assets/arrow.png";
import Basket from "./Basket";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const totalApples = 10;

let rightAppleCount = 0;
let leftAppleCount = totalApples - rightAppleCount;
const Counter = () => {
  const leftClick = () => {
    if (leftAppleCount < 10) {
      rightAppleCount--;
      leftAppleCount++;
    }

    root.render(<Counter />);
  };

  const rightClick = () => {
    if (rightAppleCount < 10) {
      rightAppleCount++;
      leftAppleCount--;
    }

    root.render(<Counter />);
  };
  return (
    <>
      <div className="container">
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

      {/* we can do this, it will re render page everytime which is not the good practice. It will also give us warning that please not use render multiple times like that. So, this is just for example. We have used it above also in func but that method is also not recommended. Although it's working fine but we have a better things like Hooks(useState) etc to do the same thing in a better way. */}

      {/* <div>
        <button
          onClick={() => {
            root.render(<Counter />);
          }}
        >
          Re Render
        </button>
      </div> */}
    </>
  );
};

export default Counter;

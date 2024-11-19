import React from "react";
import Relative from "./Relative";

const Me = () => {
  const gift = {
    item1: "someItem1",
    item2: "someItem2",
    item3: "someItem3",
  };

  return (
    <div className="container">
      <h1>Gift/Parcel Status</h1>
      <Relative gift={gift} />
    </div>
  );
};

export default Me;

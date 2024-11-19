import React, { useEffect } from "react";

const ChildComp = ({ handleClick }) => {
  useEffect(() => {
    console.log("ChildComp is running.");
  }, [handleClick]);

  return <div></div>;
};

export default ChildComp;

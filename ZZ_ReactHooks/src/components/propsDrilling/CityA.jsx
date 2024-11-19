import React from "react";
import CityB from "./CityB";

const CityA = ({gift}) => {
  return (
    <div>
      <CityB gift={gift} />
    </div>
  );
};

export default CityA;

import React from "react";

const Friend = ({ gift }) => {
  console.log("friend received ", gift);

  return (
    <div>
      Friend
      <br /> <br />
      {/* parcel includes */}
      <p>{gift.item1}</p>
      <p>{gift.item2}</p>
      <p>{gift.item3}</p>
    </div>
  );
};

export default Friend;

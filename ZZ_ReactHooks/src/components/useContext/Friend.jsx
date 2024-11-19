import React, { useContext } from "react";
import MyContext from "./context/MyContext";

const Friend = () => {
  const data = useContext(MyContext);
  console.log("data is coming from context ", data);

  return (
    <div>
      Friend
      <br /> <br />
      {/* parcel includes */}
      <p>{data.gift.item1}</p>
      <p>{data.gift.item2}</p>
      <p>{data.gift.item3}</p>
      <p>Special Gift for you..</p>
    </div>
  );
};

export default Friend;

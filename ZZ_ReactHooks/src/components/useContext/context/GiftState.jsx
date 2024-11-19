import MyContext from "./MyContext";

const GiftState = (props) => {
  const gift = {
    item1: "someItem1",
    item2: "someItem2",
    item3: "someItem3",
  };

  return (
    <MyContext.Provider value={{ gift }}>{props.children}</MyContext.Provider>
  );
};

export default GiftState;

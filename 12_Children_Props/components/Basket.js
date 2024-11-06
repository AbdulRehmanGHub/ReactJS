const Basket = ({ appleCount, basketName }) => {
  return (
    <div className="basket">
      <p>{basketName}</p>
      <p>{appleCount} Apples</p>
    </div>
  );
};

export default Basket;

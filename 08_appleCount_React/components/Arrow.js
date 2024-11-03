const Arrow = ({ imgUrl, rotate, title, clickHandler }) => {
  return (
    <div>
      <img
        src={imgUrl}
        alt="arrow-img"
        style={{ transform: rotate ? "rotate(180deg)" : "none" }}
        className="btn"
        title={title}
        onClick={clickHandler}
      />
    </div>
  );
};

export default Arrow;

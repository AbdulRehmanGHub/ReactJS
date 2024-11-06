const Arrow = ({ imgUrl, rotate, title, clickHandler, children }) => {
  // console.log(children);

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

      {/* We can use children for this purpose, like we are showing the text inside buttons etc. */}
      {/* {title} */}
    </div>
  );
};

export default Arrow;

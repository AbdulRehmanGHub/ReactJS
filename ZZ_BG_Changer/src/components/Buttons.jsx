const Buttons = ({ setColor }) => {
  return (
    <>
      <button
        onClick={() => setColor("white")}
        className="white text-black text-xl w-[100px] h-8 bg-white rounded-sm hover:bg-slate-400"
      >
        White
      </button>

      <button
        onClick={() => setColor("#b91c1c")}
        className="red text-white text-xl w-[100px] h-8 bg-red-600 rounded-sm hover:bg-red-700 "
      >
        Red
      </button>

      <button
        onClick={() => setColor("#1d4ed8")}
        className="blue text-white text-xl w-[100px] h-8 bg-blue-600 rounded-sm hover:bg-blue-700 "
      >
        Blue
      </button>

      <button
        onClick={() => setColor("#c2410c")}
        className="orange text-white text-xl w-[100px] h-8 bg-orange-600 rounded-sm hover:bg-orange-700 "
      >
        Orange
      </button>

      <button
        onClick={() => setColor("#0f766e")}
        className="teal text-white text-xl w-[100px] h-8 bg-teal-600 rounded-sm hover:bg-teal-700 "
      >
        Teal
      </button>

      <button
        onClick={() => setColor("#7e22ce")}
        className="purple text-white text-xl w-[100px] h-8 bg-purple-600 rounded-sm hover:bg-purple-700 "
      >
        Purple
      </button>

      <button
        onClick={() => setColor("#111")}
        className="black text-white text-xl w-[100px] h-8 bg-black rounded-sm hover:bg-gray-700 "
      >
        Black
      </button>

      <button
        onClick={() => setColor("#15803d")}
        className="green text-white text-xl w-[100px] h-8 bg-green-600 rounded-sm hover:bg-green-700 "
      >
        Green
      </button>

      <button
        onClick={() => setColor("#a16207")}
        className="yellow text-black text-xl w-[100px] h-8 bg-yellow-600 rounded-sm hover:bg-yellow-700 "
      >
        Yellow
      </button>
    </>
  );
};

export default Buttons;

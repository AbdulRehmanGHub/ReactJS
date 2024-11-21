import { useState } from "react";
import Buttons from "./Buttons";

const BG_Changer = () => {
  const [color, setColor] = useState("#212121");

  return (
    <div
      className="full-body w-full min-h-screen flex flex-col items-center"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-center text-3xl py-2 text-green-400 font-bold">
        BG Changer
      </h2>

      <div className="flex justify-center items-center flex-wrap gap-6 bg-slate-900 w-[94%] min-h-[80px] px-4 py-4 rounded-xl mx-auto absolute bottom-24">
        {/* we can make all buttons here, or we can make another component for buttons */}
        <Buttons setColor={setColor} />
      </div>
    </div>
  );
};

export default BG_Changer;

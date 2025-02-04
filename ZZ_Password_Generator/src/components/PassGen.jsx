import { useCallback, useEffect, useRef, useState } from "react";

const PassGen = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordLength, setPasswordLength] = useState("0");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (specialCharsAllowed) str += `!@#$%^&*()_+-=[]{};':"|,.<>/?~`;

    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      //   console.log(pass);
    }
    setPasswordValue(pass);
  }, [passwordLength, numberAllowed, specialCharsAllowed, setPasswordValue]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, numberAllowed, specialCharsAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordValue);
  }, [passwordValue]);

  return (
    <div className="max-w-md bg-slate-700 rounded-lg">
      <div className="flex flex-col gap-4 text-center px-4 py-2">
        <h2 className="text-3xl font-semibold">Random Password Generator</h2>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3">
            <input
              type="text"
              placeholder="Select range of password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              readOnly
              className="px-2 py-2 outline-none border-[1px] rounded-md w-full"
              ref={passwordRef}
            />

            <button
              onClick={copyPasswordToClipBoard}
              className="text-3xl pb-1 cursor-pointer"
              title="Copy"
            >
              📋
            </button>
          </div>

          <div className="flex">
            <span>Range: </span>
            <input
              type="range"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              id="range"
              min={6}
              max={30}
              className="px-2 py-1 outline-none border-2 rounded-md w-4/5 mx-auto cursor-pointer"
            />

            <label htmlFor="range">{passwordLength}</label>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="number-check"
                defaultChecked={numberAllowed}
                value={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="cursor-pointer"
              />

              <label htmlFor="number-check" className="cursor-pointer">
                Numbers
              </label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="chars-check"
                defaultChecked={specialCharsAllowed}
                value={specialCharsAllowed}
                onChange={() => setSpecialCharsAllowed((prev) => !prev)}
                className="cursor-pointer"
              />

              <label htmlFor="chars-check" className="cursor-pointer">
                Special Chars
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGen;

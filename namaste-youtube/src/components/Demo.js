import React, { useEffect, useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Compute the nth prime number only if the input is a valid positive number
  // wihtout memo
  //   const primeNum = findPrime(number);

  // withmemo
  const primeNum = useMemo(() => findPrime(number), [number]);

  return (
    <div
      className={
        "m-4 p-2 w-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className=""
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          toggle
        </button>
      </div>
      <div className="text-black">
        <input
          onChange={(e) => setNumber(e.target.value)}
          className="w-70 p-2 border"
          value={number}
          type="number"
          placeholder="Enter nth value"
        />
      </div>

      <div className="font-bold mt-2">{`nth prime number: ${primeNum}`}</div>
    </div>
  );
};

export default Demo;

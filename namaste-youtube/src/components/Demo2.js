import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  console.log("Rendering....");
  // whenever my component rerenders its refreash the let

  const ref = useRef(0);
  //   let i = {
  //     current: null,
  //   };
  useEffect(() => {
    // garbage collector
    ref.current = setInterval(() => {}, 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div className="m-4 p-3 bg-slate-50 border border-black w-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4 hover:bg-green-300"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4 hover:bg-green-300"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("i=" + ref.current);
          }}
          className="bg-green-100 p-2 m-4 hover:bg-green-300"
        >
          Increase ref
        </button>
        <span className="font-bold font-sans text-xl">{ref.current}</span>
      </div>
      <div>
        <button
          onClick={() => {
            clearInterval(ref.current);
          }}
          className="m-4 p-3 text-white bg-red-300 hover:bg-red-400 hover:text-slate-100 rounded-lg"
        >   
          stop printing
        </button>
      </div>
    </div>
  );
};

export default Demo2;

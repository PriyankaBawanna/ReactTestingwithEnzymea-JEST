import React, { useState } from "react";
import Message from "./Message";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const increment = () => {
    let incrementNumber = number + 1;
    setNumber(incrementNumber);
  };
  return (
    <>
      <p className={`number-${number}`}>Number {number}</p>
      <button onClick={increment} className="incrementButton">
        Increment
      </button>
      <Message />
    </>
  );
}

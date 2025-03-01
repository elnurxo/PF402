import React, { useState } from "react";

export const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          const x = Math.floor(Math.random() * 1000);
          setRandomNumber(x);
        }}
      >
        give random number
      </button>
      <h1>{randomNumber == 0 ? "no current number" : randomNumber}</h1>
    </>
  );
};

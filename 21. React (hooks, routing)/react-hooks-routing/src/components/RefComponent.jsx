import React, { useRef } from "react";

const RefComponent = () => {
  const inputRef = useRef();
  return (
    <div>
      <h1>Hello React</h1>
      <input ref={inputRef} type="text" placeholder="enter your full name" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus input
      </button>
    </div>
  );
};

export default RefComponent;

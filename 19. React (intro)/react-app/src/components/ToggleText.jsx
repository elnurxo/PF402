import React, { useState } from "react";

const ToggleText = () => {
  const [toggleText, setToggleText] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setToggleText((prevState) => {
            return !prevState;
          });
        }}
      >
        {toggleText ? "hide" : "show"} text
      </button>
      {toggleText && <p>Lorem ipsum dolor sit amet.</p>}
    </>
  );
};

export default ToggleText;

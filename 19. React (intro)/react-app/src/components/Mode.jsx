import React, { useState } from "react";

const Mode = () => {
  const [mode, setMode] = useState("light");

  return (
    <>
      <button
        onClick={() => {
          setMode((currentMode) => {
            if (currentMode == "light") {
              return "dark";
            } else {
              return "light";
            }
          });
          document.body.classList.toggle("dark");
        }}
      >
        switch to {mode == "light" ? "dark" : "light"} mode
      </button>
    </>
  );
};

export default Mode;

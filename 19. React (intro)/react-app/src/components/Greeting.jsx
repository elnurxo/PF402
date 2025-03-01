import React from "react";

const Greeting = ({name, surname}) => {
  return (
    <div>
      Hello, {name} {surname}!
    </div>
  );
};

export default Greeting;

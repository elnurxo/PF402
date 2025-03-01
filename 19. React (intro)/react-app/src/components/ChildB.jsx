import React from "react";
import ChildC from "./ChildC";

const ChildB = ({ message }) => {
  return <ChildC message={message} />;
};


export default ChildB;

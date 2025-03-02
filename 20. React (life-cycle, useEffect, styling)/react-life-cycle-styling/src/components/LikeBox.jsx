import React from "react";
import PropTypes from "prop-types";

export const LikeBox = ({ isLiked }) => {
  return (
    <div
      style={{
        margin: "10px auto",
        width: "100px",
        height: "100px",
        border: "2px solid red",
        borderRadius: "7px",
        background: isLiked ? "red" : "transparent",
      }}
    ></div>
  );
};

LikeBox.propTypes = {
  isLiked: PropTypes.bool,
};

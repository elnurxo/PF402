import React from "react";
import PropTypes from "prop-types";

const LikeButton = ({ handleLike, isLiked }) => {
  return (
    <button
      onClick={handleLike}
      style={{ margin: "0 auto", display: "block", padding: "10px 15px" }}
    >
      {isLiked ? "dislike" : "like"}
    </button>
  );
};

LikeButton.propTypes = {
  handleLike: PropTypes.func,
  isLiked: PropTypes.bool,
};

export default LikeButton;

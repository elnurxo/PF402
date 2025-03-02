import React, { useState } from "react";
import LikeButton from "./LikeButton";
import { LikeBox } from "./LikeBox";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  function handleLike() {
    setIsLiked((currentState) => {
      return !currentState;
    });
  }
  return (
    <>
      <LikeButton handleLike={handleLike} isLiked={isLiked} />
      <LikeBox isLiked={isLiked} />
    </>
  );
};

export default Like;

import { useState } from "react";
const LikeButton = () => {
  let [isLiked, setIsLiked] = useState(false);
  /* console.log(isLiked); //false */

  const toggleLike = () => {
    setIsLiked(!isLiked);
    /* console.log(!isLiked); //false, when clicked true */
  };
  let likeStyle = { color: "red", cursor: "pointer" };
  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
};

export default LikeButton;

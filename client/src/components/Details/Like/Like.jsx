import React, { useState } from 'react';
import styles from './Like.module.css';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`${styles['like-button']} ${liked ? styles['liked'] : ''}`}
      onClick={() => {
        setLikes(likes + 1);
        setLiked(true);
      }}
    >
      {likes} Likes
    </button>
  );
}

export default LikeButton;

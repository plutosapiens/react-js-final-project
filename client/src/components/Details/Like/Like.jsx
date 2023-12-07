import React, { useState } from 'react';
import styles from './Like.module.css';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`${styles['like-button']} ${liked ? styles['liked'] : ''}`}
      onClick={() => setLiked((prevState) => !prevState)}>
      {liked? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import  AuthContext  from '../../../contexts/authContext';
import styles from './Like.module.css';
import * as likeService from '../../../services/likeService'
import { likeContext, likeContextProvider } from '../../../contexts/likeContext';

function LikeButton() {
  const { email } = useContext(AuthContext)
  const [liked, setLiked] = useState(false);
  const { itemId } = useParams();

  
  const likeHandler = async () => {
    try {
      const data = {itemId, email}
        await likeService.create(data);
        // Perform any additional logic upon successful like
    } catch (error) {
        console.error('Error liking item:', error);
        // Handle error cases
    }
};
  
  return (
    <button
      className={`${styles['like-button']} ${liked ? styles['liked'] : ''}`}
      onClick={likeHandler}>
      {liked? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;

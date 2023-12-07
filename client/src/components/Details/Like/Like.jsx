import React, { useContext, useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';

import  AuthContext  from '../../../contexts/authContext';
import styles from './Like.module.css';
import * as likeService from '../../../services/likeService'

function LikeButton() {
  const { email } = useContext(AuthContext)
  const [liked, setLiked] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    const checkUserLiked = async () => {
      try {
        const likes = await likeService.getAll(); // Fetch all likes
        const userLikedItem = likes.find(
          (like) => like.email === email && like.itemId === itemId
        );

        if (userLikedItem) {
          setLiked(true); // If the user liked this item, set liked state to true
        }
      } catch (error) {
        console.error('Error checking user liked item:', error);
      }
    };

    checkUserLiked();
  }, [email, itemId]);
  
  const likeHandler = async () => {
    try {
      if (liked) {
        // If already liked, remove the like
        const likes = await likeService.getAll();
        const userLikedItem = likes.find(
          (like) => like.email === email && like.itemId === itemId
        );

        if (userLikedItem) {
          await likeService.remove(userLikedItem._id); // Assuming you have a remove function in your likeService
          setLiked(false);
        }
      } else {
        // If not liked, like the item
        const data = { itemId, email };
        await likeService.create(data);
        setLiked(true);
        // Perform any additional logic upon successful like
      }
    } catch (error) {
      console.error('Error handling like action:', error);
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

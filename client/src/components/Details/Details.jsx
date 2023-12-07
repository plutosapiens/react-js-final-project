import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as catalogService from '../../services/catalogService'
import styles from "./Details.module.css";


const Details = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();
  
  useEffect(() => {
    if (itemId) {
      catalogService.getOne(itemId)
        .then(setItem)
        .catch(error => console.error('Error fetching item:', error));
    } else {
      console.log('Item ID is undefined.');
      // Handle the case where itemId is undefined (e.g., show a message or render default content)
    }
  }, [itemId]);

  const likeItem = () => {
    // Implement logic for like functionality here
    // For example, update a like count in the database or toggle like status
    // This function will be called when the like button is clicked
  };
  console.log(item)
  
  return (
    <div className={styles.main}>
      <img src={item.imgUrl} alt={item.name} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.cheekyText}>Item: {item.name}</div>
        <p className={styles.description}>Description: {item.description}</p>
        <p className={styles.description}>Yarn Weight: {item.yarnWeight}</p>
        <p className={styles.description}>Needle Size: {item.needleSize}</p>
        <button onClick={likeItem} className={styles.button}>
          Like
        </button>
      </div>
    </div>
  );
};

export default Details;
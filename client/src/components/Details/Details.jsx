import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Like from './Like/Like';

import * as likeService from '../../services/likeService';
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

  const [liked, setLiked] = useState(false);
  const likeHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newLike = await commentService.create(
        gameId,
    );

    console.log(newComnewLikeent);
}

  
  return (
    <div className={styles.main}>
      <img src={item.imgUrl} alt={item.name} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.cheekyText}>Item: {item.name}</div>
        <p className={styles.description}>Description: {item.description}</p>
        <p className={styles.description}>Yarn Weight: {item.yarnWeight}</p>
        <p className={styles.description}>Needle Size: {item.neeldeSize}</p>
        <div>
          <Like />
        </div>
        {/* <Link to={`/`}  className={styles.button}>
          Edit
        </Link>
        <Link to={`/`}  className={styles.button}>
          Delete
        </Link> */}
      </div>
    </div>
  );
};

export default Details;
import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Like from './Like/Like';
import * as catalogService from '../../services/catalogService'
import styles from "./Details.module.css";
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from '../../utils/pathToUrl';
import Paths from '../../paths';


const Details = () => {
  const navigate = useNavigate()
  const { userId, isAuthenticated } = useContext(AuthContext);
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

  const setData = (data) => {
    let { _id, name, imgUrl, yarnWeight, needleSize, description } = data;
    localStorage.setItem('ItemId', _id);
    localStorage.setItem('Name', name);
    localStorage.setItem('ImgUrl', imgUrl);
    localStorage.setItem('Yarn Weight', yarnWeight);
    localStorage.setItem('Needle Size', needleSize);
    localStorage.setItem('Description', description);
  }

  const getData = () => {
    catalogService.getAll();
  }
  const onDelete = (id) => {
    catalogService.delelete(id)
    .then(() => {
      getData();

      navigate(Paths.Catalog)

    })
  }
  

  return (
    <div className={styles.main}>
      <img src={item.imgUrl} alt={item.name} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.cheekyText}>{item.name}</div>
        <p className={styles.description}>Description: {item.description}</p>
        <p className={styles.description}>Yarn Weight: {item.yarnWeight}</p>
        <p className={styles.description}>Needle Size: {item.needleSize}</p>
        {isAuthenticated && (
          <>
            {userId !== item._ownerId &&(
              <div>
                <Like />
              </div>
            )}
            {userId === item._ownerId &&(
              <div className={styles.btnWrapper}>
                <Link
                to={pathToUrl(Paths.Edit, {itemId})}
                className={styles.button}
                onClick={() => setData(item)}>
                  Edit
                  </Link>
                  <Link
                  to={`/`}
                  className={styles.button}
                  onClick={() => onDelete(item._id)}>
                  Delete
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
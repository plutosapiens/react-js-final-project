import { Link } from "react-router-dom";

import styles from "./CatalogItem.module.css";

const CatalogItem = ({ _id, name, imgUrl }) => {
  return (
    <div className={styles.item}>
      <img className={styles.rectangle} alt={`${name}`} src={imgUrl} />
      {/* <p className={styles.itemName}>{name}</p> */}
      <Link to={`/items/${_id}`} className={styles.button}>
        {name}
      </Link>
    </div>
  );
};

export default CatalogItem;

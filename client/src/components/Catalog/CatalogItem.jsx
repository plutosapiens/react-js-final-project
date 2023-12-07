import React from "react";
import styles from "./CatalogItem.module.css"
import Paths from "../../paths";

const CatalogItem = ({
    _id,
    brand,
    imgUrl,
}) => {
    return (
        <div className={styles.item}>
        <img className={styles.rectangle} alt={`${brand}`} src={imgUrl} />
        <p className={styles.itemName}>{brand}</p>
        <a href={`/items/:${_id}`} className={styles.button}>Details</a>
    </div>
    );
};

export default CatalogItem;
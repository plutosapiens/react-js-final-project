import React from "react";
import styles from "./CatalogItem.module.css"

const CatalogItem = ({
    brand,
    imgUrl,
}) => {
    return (
        <div className={styles.item}>
        <img className={styles.rectangle} alt={`${brand}`} src={imgUrl} />
        <p className={styles.itemName}>{brand}</p>
        <a href="#" className={styles.button}>Details</a>
    </div>
    );
};

export default CatalogItem;
import React from "react";
import styles from "./CatalogItem.module.css"

const CatalogItem = () => {
    return (
        <div className={styles.item}>
        <img className={styles.rectangle} alt="Image" src="img/_130900209_beer-index-getty.jpg" />
        <p className={styles.itemName}>Item name</p>
        <a href="#" className={styles.button}>Details</a>
    </div>
    );
};

export default CatalogItem;
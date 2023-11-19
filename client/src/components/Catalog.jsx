import React from "react";
import styles from "./Catalog.module.css"
import CatalogItem from "./CatalogItem";

const Catalog = () => {

     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>
            They’re fresh
            <br />
            They’re excited</div>
        
        <div className={styles.catalog}>
            < CatalogItem />
        </div>
        </div>
        
  );
};

export default Catalog;
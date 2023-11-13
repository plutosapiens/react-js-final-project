import React from "react";
import styles from "./Catalog.module.css"

const Catalog = () => {
     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>
            They’re fresh
            <br />
            They’re excited</div>
        
        <div className={styles.catalog}>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/_130900209_beer-index-getty.jpg" />
                <p className={styles.itemName}>Item name</p>
                <a href="#" className={styles.button}>Details</a>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/_130900209_beer-index-getty.jpg" />
                <p className={styles.itemName}>Item name</p>
                <a href="#" className={styles.button}>Details</a>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/_130900209_beer-index-getty.jpg" />
                <p className={styles.itemName}>Item name</p>
                <a href="#" className={styles.button}>Details</a>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/_130900209_beer-index-getty.jpg" />
                <p className={styles.itemName}>Item name</p>
                <a href="#" className={styles.button}>Details</a>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/_130900209_beer-index-getty.jpg" />
                <p className={styles.itemName}>Item name</p>
                <a href="#" className={styles.button}>Details</a>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/_130900209_beer-index-getty.jpg" />
                <p className={styles.itemName}>Item name</p>
                <a href="#" className={styles.button}>Details</a>
            </div>
        </div>
        </div>
        
  );
};

export default Catalog;
import React from "react";
import styles from "./Users.module.css"

const Users = () => {
     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Your friends</div>
        
        <div className={styles.users}>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/friend.jpg" />
                <p className={styles.itemName}>User name</p>
                <p className={styles.itemName}>User description. He protec he attck! He always come back.</p>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/friend.jpg" />
                <p className={styles.itemName}>User name</p>
                <p className={styles.itemName}>User description. He protec he attck! He always come back.</p>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/friend.jpg" />
                <p className={styles.itemName}>User name</p>
                <p className={styles.itemName}>User description. He protec he attck! He always come back.</p>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/friend.jpg" />
                <p className={styles.itemName}>User name</p>
                <p className={styles.itemName}>User description. He protec he attck! He always come back.</p>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/friend.jpg" />
                <p className={styles.itemName}>User name</p>
                <p className={styles.itemName}>User description. He protec he attck! He always come back.</p>
            </div>
            <div className={styles.item}>
                <img className={styles.rectangle} alt="Image" src="img/friend.jpg" />
                <p className={styles.itemName}>User name</p>
                <p className={styles.itemName}>User description. He protec he attck! He always come back.</p>
            </div>
        </div>
        </div>
        
  );
};

export default Users;
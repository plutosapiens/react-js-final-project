import React from "react";
import styles from "./UserItem.module.css";

const UserItem = ({
    name,
    imageUrl,
    description,
}) => {
    return (
        <div className={styles.item}>
        <img className={styles.rectangle} alt={`${name}'s profile`} src={imageUrl} />
        <p className={styles.itemName}>{name}</p>
        <p className={styles.itemName}>{description}</p>
    </div>
    );
};

export default UserItem;
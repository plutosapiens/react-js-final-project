import React from "react";
import styles from "./AddNew.module.css"

const AddNew = () => {
     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>New beer on the horizon</div>

        <form method="POST">
            <input className={styles.inputField} type="text" name="brand" id="AddNew-brand" placeholder="brand" />
            <input className={styles.inputField} type="text" name="taste" id="AddNew-taste" placeholder="taste" />
            <input className={styles.inputField} type="text" name="strength" id="AddNew-strength" placeholder="strength" />
            <input className={styles.inputField} type="text" name="description" id="AddNew-description" placeholder="description" />
            <button className={styles.button} type="submit">AddNew</button>
        </form>
        </div>
        
  );
};

export default AddNew;
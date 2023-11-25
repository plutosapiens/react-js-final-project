import React from "react";
import styles from "./Edit.module.css"

const Edit = () => {
     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Changed beer on the horizon</div>

        <form method="POST">
            <input className={styles.inputField} type="text" name="brand" id="Edit-brand" placeholder="brand" />
            <input className={styles.inputField} type="text" name="taste" id="Edit-taste" placeholder="taste" />
            <input className={styles.inputField} type="text" name="strength" id="Edit-strength" placeholder="strength" />
            <input className={styles.inputField} type="text" name="description" id="Edit-description" placeholder="description" />
            <button className={styles.button} type="submit">Edit</button>
        </form>
        </div>
        
  );
};

export default Edit;
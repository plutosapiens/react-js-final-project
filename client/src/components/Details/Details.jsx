import React from "react";
import styles from "./Details.module.css"


const Details = () => {
     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Hm... Do we know each other?</div>

        <form id="Details">

            <button className={styles.button} type="submit">Details</button>
        </form>

        <img className={styles.rectangle} alt="Image" src="img/space.png" />
        </div>
        
  );
};

export default Details;
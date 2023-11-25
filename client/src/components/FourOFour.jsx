import React from "react";
import styles from "./FourOFour.module.css"

const FourOFour = () => {
  return (
        <div className={styles.main}>
            <img className={styles.rectangle} alt="Image" src="/img/missing-beer.png" />

          <a href="/" className={styles.homeBtn}>Go back to home</a>
        </div>
  );
};

export default FourOFour;
import React from "react";
import { Link } from 'react-router-dom';
import styles from "./FourOFour.module.css"

const FourOFour = () => {
  return (
        <div className={styles.main}>
            <img className={styles.rectangle} alt="Image" src="/img/missing-beer.png" />

          <Link to="/" className={styles.homeBtn}>Go back to home</Link>
        </div>
  );
};

export default FourOFour;
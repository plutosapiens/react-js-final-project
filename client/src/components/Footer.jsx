import React from "react";
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
        <footer className={styles.footer}>
            <p className={styles.textWrapper}>2023 SoftUni ReactJS project by plutosapiens</p>
        </footer>
  );
};

export default Footer;
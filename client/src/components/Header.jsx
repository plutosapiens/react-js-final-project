import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
          <header className={styles.navbarWrapper}>
            <div className={styles.navbar}>
              <a href="#" className={styles.navBtn}>Home</a>
              <a href="#" className={styles.navBtn}>Users</a>
              <a href="#" className={styles.navBtn}>Add beer</a>
              <a href="#" className={styles.navBtn}>Catalog</a>
              <a href="#" className={styles.navBtn}>Register</a>
              <a href="#" className={styles.navBtn}>Login</a>
              <a href="#" className={styles.navBtn}>Logout</a>
            </div>
          </header>
    );
};

export default Header;
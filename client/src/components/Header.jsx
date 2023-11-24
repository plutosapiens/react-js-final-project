import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
          <header className={styles.navbarWrapper}>
            <div className={styles.navbar}>
              <a href="/" className={styles.navBtn}>Home</a>
              <a href="/users" className={styles.navBtn}>Users</a>
              <a href="/addnew" className={styles.navBtn}>Add beer</a>
              <a href="/catalog" className={styles.navBtn}>Catalog</a>
              <a href="/register" className={styles.navBtn}>Register</a>
              <a href="/login" className={styles.navBtn}>Login</a>
              <a href="/logout" className={styles.navBtn}>Logout</a>
            </div>
          </header>
    );
};

export default Header;
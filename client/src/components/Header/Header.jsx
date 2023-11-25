import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
          <header className={styles.navbarWrapper}>
              <nav className={styles.navbar}>
                  <Link to="/" className={styles.navBtn}>Home</Link>
                  <Link to="/catalog" className={styles.navBtn}>Catalog</Link>
                {/* <div id="user"> */}
                  <Link to="/users" className={styles.navBtn}>Users</Link>
                  <Link to="/addnew" className={styles.navBtn}>Add beer</Link>
                  <Link to="/logout" className={styles.navBtn}>Logout</Link>
                {/* </div> */}
                {/* <div id="guest"> */}
                  <Link to="/register" className={styles.navBtn}>Register</Link>
                  <Link to="/login" className={styles.navBtn}>Login</Link>
            {/* </div> */}
              </nav>
        </header>
    );
};

export default Header;
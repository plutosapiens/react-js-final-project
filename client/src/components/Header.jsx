import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
          <header className={styles.navbarWrapper}>
            <div className={styles.navbar}>
              <a className="">Login</a>
              <a hreg="#" className="">Catalog</a>
              <a hreg="#" className="">Users</a>
              <a hreg="#" className="">Birichka</a>
              <a hreg="#" className="">Add beer</a>
              <a hreg="#" className="">Home</a>
              <a hreg="#" className="">Logout</a>
              <a hreg="#" className="">Register</a>
            </div>
          </header>
    );
};

export default Header;
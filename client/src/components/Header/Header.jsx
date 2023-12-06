import { useContext } from "react";
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import styles from './Header.module.css';

const Header = () => {
  const {
    isAuthenticated,
    username,
  } = useContext(AuthContext);

    return (
          <header className={styles.navbarWrapper}>
              <nav className={styles.navbar}>
                  <Link to="/" className={styles.navBtn}>Home</Link>
                  <Link to="/catalog" className={styles.navBtn}>Catalog</Link>
                {isAuthenticated && (
                   //might need to remove
                  <div id="user">
                    <Link to="/users" className={styles.navBtn}>Users</Link>
                    <Link to="/items/addnew" className={styles.navBtn}>Add beer</Link>
                    <Link to="/logout" className={styles.navBtn}>Logout</Link>
                  </div>
                )}
                
                {!isAuthenticated && (
                  <div id="guest">
                    <Link to="/register" className={styles.navBtn}>Register</Link>
                    <Link to="/login" className={styles.navBtn}>Login</Link>
                  </div>
                )}
              </nav>
        </header>
    );
};

export default Header;
import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import AuthContext from "../../contexts/authContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navBtn}>
          Home
        </Link>
        <Link to="/catalog" className={styles.navBtn}>
          Catalog
        </Link>
        {isAuthenticated && (
          <div>
            <Link to="/favourites" className={styles.navBtn}>
              Favourites
            </Link>
            <Link to="/items/addnew" className={styles.navBtn}>
              Add project
            </Link>
            <Link to="/logout" className={styles.navBtn}>
              Logout
            </Link>
          </div>
        )}

        {!isAuthenticated && (
          <div>
            <Link to="/register" className={styles.navBtn}>
              Register
            </Link>
            <Link to="/login" className={styles.navBtn}>
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

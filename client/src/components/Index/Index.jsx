import { useContext } from "react";

import styles from "./Index.module.css"; 
import withAuth from "../../HOC/withAurh";
import AuthContext from "../../contexts/authContext";

const Index = () => {
  const { isAuthenticated, username } = useContext(AuthContext)
  return (
        <div className={styles.main}>
          <div className={styles.cheekyText}>
            Welcoome to
            <br />
            Knit Wit Central
          </div>
          <p className={styles.p}>
          {isAuthenticated ? `Hello, ${username}!` : 'Friend'}
            <br />
            <br />
            Our platform is a cozy corner of the internet where knitting enthusiasts gather to share patterns, showcase handmade creations, exchange tips and tricks, and celebrate the joy of crafting with needles and threads. 
          </p>
          <img className={styles.rectangle} alt="Rectangle" src="/img/rectangle-2.png" />
        </div>
  );
};

const EnhancedIndex = withAuth(Index)

export default EnhancedIndex;
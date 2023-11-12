import React from "react";
import styles from "./Login.module.css"

const Login = () => {
     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Hm... Do we know each other?</div>

        <form method="POST">
            <input className={styles.inputField} type="text" name="email" id="Login-email" placeholder="email" />
            <input className={styles.inputField} type="password" name="password" id="Login-password" placeholder="password" />
            <button className={styles.button} type="submit">Login</button>
        </form>

        <img className={styles.rectangle} alt="Image" src="img/space.png" />
        </div>
        
  );
};

export default Login;
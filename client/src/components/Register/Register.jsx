import React from "react";
import styles from "./Register.module.css"

const Register = () => {
     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Hi stranger :)</div>

        <form method="POST">
            <input 
              className={styles.inputField} 
              type="text" 
              name="name" 
              id="name" 
              placeholder="name" 
            />
            <input 
              className={styles.inputField}
              type="text"
              name="img"
              id="img"
              placeholder="imgUrl"
            />
            <input
              className={styles.inputField}
              type="text"
              name="email"
              id="email"
              placeholder="email"
            />
            <input
              className={styles.inputField}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <input
              className={styles.inputField}
              type="password"
              name="repeatPassword"
              id="repass"
              placeholder="repeat password"
            />
            <button className={styles.button} type="submit">Register</button>
        </form>

        <img className={styles.rectangle} alt="Image" src="img/space.png" />
        </div>
        
  );
};

export default Register;
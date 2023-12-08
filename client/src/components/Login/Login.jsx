import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import styles from "./Login.module.css"

const  LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });

     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Hm... Do we know each other?</div>

        <form id="login" onSubmit={onSubmit}>
            <input
            className={styles.inputField}
            type="email"
            id="email"
            name={LoginFormKeys.Email}
            placeholder="email"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
            />
            <input
            className={styles.inputField}
            type="password"
            id="password"
            name="password"
            placeholder={LoginFormKeys.Password}
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
            />
            <button className={styles.button} type="submit">Login</button>
        </form>

        {/* <img className={styles.rectangle} alt="Image" src="img/space.png" /> */}
        </div>
        
  );
};

export default Login;
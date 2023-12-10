import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import styles from "./Login.module.css"

const  LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const Login = () => {
  const { loginSubmitHandler, errorMessages } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });

  console.log(errorMessages)
     return (
        <div className={styles.main}>

          {/* If there are no error messages */}
            {Object.keys(errorMessages).length === 0 && (
              <div className={styles.cheekyText}>Hm... Do we know each other?</div>
            )}
            {/* Display error messages here */}
            {errorMessages && (
              <div className={styles.cheekyText}>
                    {/* Show specific error messages */}
                    {errorMessages.email && <p>{errorMessages.email}</p>}
                    {errorMessages.password && <p>{errorMessages.password}</p>}
                    {/* Add other error messages as needed */}
                </div>
            )}           

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
import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import styles from "./Register.module.css";

const RegisterFromKeys = {
  Email: 'email',
  Username: 'username',
  Avatar: 'imgUrl',
  Password: 'password',
  RePassword: 'repass',
};

const Register = () => {
  const { registerSubmitHandler, errorMessages } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFromKeys.Email]: '',
    [RegisterFromKeys.Username]: '',
    [RegisterFromKeys.Avatar]: '',
    [RegisterFromKeys.Password]: '',
    [RegisterFromKeys.RePassword]: '',
  });

  console.log(errorMessages)
     return (
        <div className={styles.main}>

        <div className={styles.cheekyText}>Hi stranger :)</div>

            {/* Display error messages here */}
            {errorMessages && (
              <div className={styles.errorMessagesContainer}>
                    {/* Show specific error messages */}
                    {errorMessages.email && <p className={styles.errorBox}>{errorMessages.email}</p>}
                    {errorMessages.username && <p className={styles.errorBox}>{errorMessages.username}</p>}
                    {errorMessages.imgUrl && <p className={styles.errorBox}>{errorMessages.imgUrl}</p>}
                    {errorMessages.password && <p className={styles.errorBox}>{errorMessages.password}</p>}
                    {errorMessages.repass && <p className={styles.errorBox}>{errorMessages.repass}</p>}
                    {errorMessages.registerError && <p className={styles.errorBox}>{errorMessages.registerError}</p>}
                    {/* Add other error messages as needed */}
                </div>
            )}  
        <form id="register" onSubmit={onSubmit}>
            <input 
              className={styles.inputField} 
              type="text" 
              id="username" 
              name={RegisterFromKeys.Username}
              placeholder="username"
              onChange={onChange}
              value={values[RegisterFromKeys.Username]}
            />            
            <input
            className={styles.inputField}
            type="text"
            id="email"
            name={RegisterFromKeys.Email}
            placeholder="email"
            onChange={onChange}
            value={values[RegisterFromKeys.Email]}
          />
            <input 
              className={styles.inputField}
              type="text"
              id="img"
              name={RegisterFromKeys.Avatar}
              placeholder="imgUrl"
              onChange={onChange}
              value={values[RegisterFromKeys.Avatar]}
            />
            <input
              className={styles.inputField}
              type="password"
              id="password"
              name={RegisterFromKeys.Password}
              placeholder="password"
              onChange={onChange}
              value={values[RegisterFromKeys.Password]}
            />
            <input
              className={styles.inputField}
              type="password"
              id="repass"
              name={RegisterFromKeys.RePassword}
              placeholder="repeat password"
              onChange={onChange}
              value={values[RegisterFromKeys.RePassword]}
            />
            <button className={styles.button} type="submit">Register</button>
        </form>

        {/* <img className={styles.rectangle} alt="Image" src="img/space.png" /> */}
        </div>
        
  );
};

export default Register;
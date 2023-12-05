import useForm from "../../hooks/useForm";
import styles from "./Login.module.css"

const Login = () => {

  const { values, onChange, onSubmit } = useForm({
    email: '',
    password: '',
  });

     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Hm... Do we know each other?</div>

        <form id="login" onSubmit={onSubmit}>
            <input
            className={styles.inputField}
            type="email"
            id="email"
            name="email"
            placeholder="email"
            onChange={onChange}
            value={values.email}
            />
            <input
            className={styles.inputField}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={onChange}
            value={values.password}
            />
            <button className={styles.button} type="submit">Login</button>
        </form>

        <img className={styles.rectangle} alt="Image" src="img/space.png" />
        </div>
        
  );
};

export default Login;
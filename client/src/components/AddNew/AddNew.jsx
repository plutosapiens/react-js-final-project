import { useNavigate } from 'react-router-dom';

import * as catalogService from '../../services/catalogService';

import styles from "./AddNew.module.css"

const AddNew = () => {
  const navigate = useNavigate();

  const createItemSubmitHandler = async (e) => {
    e.preventDefault();

    const itemData = Object.fromEntries(new FormData(e.currentTarget));

    try{
      await catalogService.create(itemData);

      navigate('/catalog');
    } catch (err) {
      console.log(err)
    }
  }
     return (
        <div className={styles.main}>
          <div className={styles.cheekyText}>New beer on the horizon</div>

          <form id="create" onSubmit={createItemSubmitHandler} method="POST">
            <input className={styles.inputField} type="text" name="brand" id="AddNew-brand" placeholder="brand" />
            <input className={styles.inputField} type="text" name="imgUrl" id="AddNew-imgUrl" placeholder="imgUrl" />
            <input className={styles.inputField} type="text" name="taste" id="AddNew-taste" placeholder="taste" />
            <input className={styles.inputField} type="text" name="strength" id="AddNew-strength" placeholder="strength" />
            <input className={styles.inputField} type="text" name="description" id="AddNew-description" placeholder="description" />
            <button className={styles.button} type="submit">AddNew</button>
          </form>
        </div>
        
  );
};

export default AddNew;
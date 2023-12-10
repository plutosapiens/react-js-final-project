import { useNavigate } from 'react-router-dom';

import * as catalogService from '../../services/catalogService';

import styles from "./AddNew.module.css"

const AddFormKeys = {
  Name: 'name',
  ImgUrl: 'imgUrl',
  YarnWeight: 'yarnWeight',
  NeedleSize: 'needleSize',
  Description: 'description',
};

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
          <div className={styles.cheekyText}>Got something 'knitty'?</div>

          <form id="create" onSubmit={createItemSubmitHandler} method="POST">
            <input 
              className={styles.inputField}
              type="text"
              name={AddFormKeys.Name}
              id="name"
              placeholder="name"
            />
            <input
              className={styles.inputField}
              type="text"
              name={AddFormKeys.ImgUrl}
              id="imgUrl"
              placeholder="imgUrl"
            />
            <input
              className={styles.inputField}
              type="text"
              name={AddFormKeys.YarnWeight}
              id="yarnWeight"
              placeholder="yarn weight"
            />
            <input
              className={styles.inputField}
              type="text"
              name={AddFormKeys.NeedleSize}
              id="needleSize"
              placeholder="needle size"
            />
            <input
              className={styles.inputField}
              type="text"
              name={AddFormKeys.Description}
              id="description"
              placeholder="description"
            />
            <button className={styles.button} type="submit">Add New</button>
          </form>
        </div>
        
  );
};

export default AddNew;
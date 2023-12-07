import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as catalogService from '../../services/catalogService';
import useForm from "../../hooks/useForm";
import styles from "./Edit.module.css"

const Edit = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [item, setItem] = useState({
    Name: '',
    ImgUrl: '',
    YarnWeight: '',
    NeedleSize: '',
    Description: '',
  });

  const EditFormKeys = {
    Name: 'name',
    ImgUrl: 'imgUrl',
    YarnWeight: 'yarnWeight',
    NeedleSize: 'needleSize',
    Description: 'description',
  };

  const showItem = item;

  useEffect(() => {
    catalogService.getOne(itemId)
    .then(result => {
      setItem(result);
    });
  }, [itemId]);

    const editItemHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await catalogService.edit(itemId, values);

            navigate('/catalog');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

  const { values, onChange, onSubmit } = useForm(editItemHandler, item);

     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Changed beer on the horizon</div>

        <form onSubmit={onSubmit}>
        <input 
              className={styles.inputField}
              type="text"
              name={EditFormKeys.Name}
              id="name"
              value={showItem.name}
              onChange={onChange}
              // placeholder="name"
            />
            <input
              className={styles.inputField}
              type="text"
              name={EditFormKeys.ImgUrl}
              id="imgUrl"
              value={item.imgUrl}
              onChange={onChange}
              // placeholder="imgUrl"
            />
            <input
              className={styles.inputField}
              type="text"
              name={EditFormKeys.YarnWeight}
              id="yarnWeighte"
              value={item.yarnWeight}
              onChange={onChange}
              // placeholder="yarn weight"
            />
            <input
              className={styles.inputField}
              type="text"
              name={EditFormKeys.NeedleSize}
              id="needleSize"
              value={item.needleSize}
              onChange={onChange}
              // placeholder="needle size"
            />
            <input
              className={styles.inputField}
              type="text"
              name={EditFormKeys.Description}
              id="description"
              value={item.description}
              onChange={onChange}
              // placeholder="description"
            />
            <button className={styles.button} type="submit">Edit</button>
        </form>
        </div>
        
  );
};

export default Edit;
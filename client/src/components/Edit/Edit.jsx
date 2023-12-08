import { useState, useEffect } from "react";

import styles from "./Edit.module.css"



const Edit = () => {
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [yarnWeight, setYarnWeight] = useState('');
  const [needleSize, setNeedleSize] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setImgUrl(localStorage.getItem('ImgUrl'));
    setYarnWeight(localStorage.getItem('YarnWeight'));
    setNeedleSize(localStorage.getItem('NeedleSize'));
    setDescription(localStorage.getItem('Description'));
  })

     return (
<div className={styles.main}>
          <div className={styles.cheekyText}>New beer on the horizon</div>

          <form id="create">
            <input 
              className={styles.inputField}
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.inputField}
              type="text"
              name="imgUrl"
              id="imgUrl"
              placeholder="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <input
              className={styles.inputField}
              type="text"
              name="yarnWeight"
              id="yarnWeight"
              placeholder="yarn weight"
              value={yarnWeight}
              onChange={(e) => setYarnWeight(e.target.value)}
            />
            <input
              className={styles.inputField}
              type="text"
              name="needleSize"
              id="needleSize"
              placeholder="needle size"
              value={needleSize}
              onChange={(e) => setNeedleSize(e.target.value)}
            />
            <input
              className={styles.inputField}
              type="text"
              name="description"
              id="description"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className={styles.button} type="submit">AddNew</button>
          </form>
        </div>
        
  );
};

export default Edit;
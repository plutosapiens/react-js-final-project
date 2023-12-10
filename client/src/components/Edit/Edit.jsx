import { useState, useEffect, memo } from "react";

import styles from "./Edit.module.css";

import * as catalogService from "../../services/catalogService";
import { useNavigate } from "react-router-dom";

const Edit = memo(() => {
  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [yarnWeight, setYarnWeight] = useState("");
  const [needleSize, setNeedleSize] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("ItemId"));
    setName(localStorage.getItem("Name"));
    setImgUrl(localStorage.getItem("ImgUrl"));
    setYarnWeight(localStorage.getItem("Yarn Weight"));
    setNeedleSize(localStorage.getItem("Needle Size"));
    setDescription(localStorage.getItem("Description"));
  }, []);

  const editItemSubmitHandler = async (e) => {
    e.preventDefault();

    const itemData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await catalogService.edit(id, itemData);
      navigate(`/items/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.cheekyText}>Crafting brilliance awaits</div>

      <form id="create" onSubmit={editItemSubmitHandler}>
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
        <button className={styles.button} type="submit">
          Edit
        </button>
      </form>
    </div>
  );
});

export default Edit;

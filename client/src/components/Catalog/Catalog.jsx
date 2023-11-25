import { useEffect, useState } from "react";
import styles from "./Catalog.module.css"
import CatalogItem from "./CatalogItem";

import * as catalogService from "../../services/catalogService";

const Catalog = () => {
    const [items, setCatalog] = useState([]);

    useEffect(() => {
        catalogService.getAll()
        .then(result => setCatalog(result));
    }, []);

     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>
            They’re fresh
            <br />
            They’re excited</div>
        
        <div className={styles.catalog}>
            {items.map(item => (
               <CatalogItem 
                key={item._id}
                userId={item._id}
                imageUrl={item.imgUrl}
                brand={item.brand}
               />
           ))}
        </div>
        </div>
        
  );
};

export default Catalog;
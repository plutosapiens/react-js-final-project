import { useEffect, useState } from "react";
import styles from "./Catalog.module.css"
import CatalogItem from "./CatalogItem/CatalogItem";

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
            Get Knit-spired!
                <br />
                Here are the delights...</div>

            <div className={styles.catalog}>
                {items.map(item => (
                   <CatalogItem 
                    key={item._id} {...item} />
               ))}
            </div>
        </div>
        
  );
};

export default Catalog;
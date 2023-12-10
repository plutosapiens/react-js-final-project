import { useEffect, useState, useContext } from "react";

import styles from "./Favourites.module.css"
import CatalogItem from "../Catalog/CatalogItem/CatalogItem";
import * as catalogService from '../../services/catalogService';
import * as likeService from '../../services/likeService';
import AuthContext from '../../contexts/authContext';

const Favourites = () => {
    const { userId } = useContext(AuthContext);

    const [items, setCatalog] = useState([]);
    const [userFavs, setUserFavs] = useState([]);

    useEffect(() => {
        if(userId) {
            likeService.getUserFavourites(userId)
            .then((favourites) => {
                setUserFavs(favourites.map((fav) => fav.itemId)) //extracting the item id, not the _id of the like
            })
            .catch((error) => {
                console.log(error);
            })
        }

    }, [userId]);

    useEffect(() => {
        catalogService.getAll()
        .then((result) => {
            const filteredItems = result.filter((item) => 
            userFavs.includes(item._id) // Filter based on item _id being in userFavorites
            );
            setCatalog(filteredItems);
    })
    .catch((error) => {
        console.log(error)
    })
},[userFavs]);

     return (
        <div className={styles.main}>
        {items.length > 0 ? (
            <>
                <div className={styles.cheekyText}>
                    We know you love them...
                </div>
                <div className={styles.catalog}>
                    {items.map(item => (
                        <CatalogItem
                            key={item._id} {...item}
                        />
                    ))}
                </div>
            </>
        ) : (
            <div className={styles.cheekyText}>
                No favs, how sad...
            </div>
        )}
    </div>
        
  );
};

export default Favourites;
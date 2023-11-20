import { useEffect, useState } from "react";
import styles from "./Users.module.css";
import UserItem from "./UserItem";

import * as userService from "../services/userService";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
        .then(result => setUsers(result));
    }, []);

     return (
        <div className={styles.main}>
        <div className={styles.cheekyText}>Your friends</div>
        
        <div className={styles.users}>
           {users.map(user => (
               <UserItem 
                key={user._id}
                userId={user._id}
                name={user.name}
                imageUrl={user.imageUrl}
                description={user.description}
               />
           ))}
        </div>
        </div>
        
  );
};

export default Users;
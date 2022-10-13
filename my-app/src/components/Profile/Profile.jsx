import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import styles from './Profile.module.css';

const Profile = () => {
    return(
        <div className={styles.profileWraper}>
            <UserInfo />
        </div>
    );
}


export default Profile;
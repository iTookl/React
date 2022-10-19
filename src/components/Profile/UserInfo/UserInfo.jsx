import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import styles from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={styles.userInfoWrap}>
            <ProfileHeader />            
        </div>
    );
}


export default UserInfo;
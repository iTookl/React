import React from 'react';
import styles from './ProfileHeader.module.css';



const ProfileHeader = () => {
    return (
        <div className={styles.profileHeaderWrap}>
            <img className={styles.backgroundImage} src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="" />
            <div className={styles.profileHeader}>
                <div className={styles.profileInfoWrap}>
                    <div className={styles.profileImageWrap}>
                        <img src="https://kor.ill.in.ua/m/610x385/2722809.jpg" alt="" className={styles.profileImage} />
                    </div>
                    <div className={styles.profileInfo}>
                        <div>
                            <h2>Alexey Bobin</h2>
                            <span>Tel Aviv</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfileHeader;


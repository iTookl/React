import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = () => {
    return(
        <div className='userInfoWrap'>
            <img className={styles.backgroundImage} src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="" />
            <div>
                <img src="" alt="" />
                <h3>Name</h3>
                <p>descr</p>
            </div>
        </div>
    );
}


export default UserInfo;
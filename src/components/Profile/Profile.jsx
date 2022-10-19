import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import styles from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import MyPosts from './MyPosts/Post/MyPosts';

const Profile = (props) => {
    return(
        <div className={styles.profileWraper}>
            <UserInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}


export default Profile;
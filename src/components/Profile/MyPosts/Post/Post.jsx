import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src={props.img} alt="" className={styles.postProfileImage} />
            <div className={styles.postWrap}>
                <h5 className={styles.userName}>{props.name}</h5>
                <p className={styles.postText}>{props.postText}</p>
            </div>
        </div>
    );
}



export default Post;
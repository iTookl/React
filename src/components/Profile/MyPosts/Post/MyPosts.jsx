import React from 'react';

import styles from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
    console.log(props);
    let postsElements = props.postsData.map( el => <Post img={el.img} name={el.name} postText={el.post}/> );
    return(
        <div className={styles.myPostsWrap}>
            <h2>My Posts</h2>
            <textarea name="" id="" cols="50" rows="3"></textarea>
            <button>Add Post</button>

            <div>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;
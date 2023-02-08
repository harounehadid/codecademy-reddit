import styles from './posts.module.css';
import Post from "../post/Post";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPosts, selectPostByID } from './postsSlice';

const Posts = () => {
    let endpoint = `https://www.reddit.com/r/pics.json`;

    const postsData = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(endpoint));
    }, [endpoint]);

    //const post = useSelector(state => selectPostByID(state, '10w3xsz'));

    return (
        <div className={`flex-diplay
                         flex-horizontal-center
                         flex-column-direction
                         margin-center
                         ${styles['posts']}`}>

            {
                postsData.map(postData => <Post 
                                            key={postData.id} 
                                            id={postData.id}
                                            postURL={postData.postURL}
                                            media={postData.media}
                                            authorName={postData.authorName}
                                            time={postData.time}
                                            title={postData.title} 
                                            ups={postData.ups}
                                            commentsNum={postData.commentsNum}
                                            />)
            }

        </div>
    );
}

export default Posts;

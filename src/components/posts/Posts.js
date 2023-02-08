import styles from './posts.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPostsIDs } from './postsSlice';
import PostContainer from '../post/PostContainer';

const Posts = () => {
    let endpoint = `https://www.reddit.com/r/pics.json`;

    const postIDs = useSelector(selectPostsIDs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(endpoint));
    }, [endpoint]);

    return (
        <div className={`flex-diplay
                         flex-horizontal-center
                         flex-column-direction
                         margin-center
                         ${styles['posts']}`}>

            {
                postIDs.map(id => <PostContainer key={id} id={id} />)
            }

        </div>
    );
}

export default Posts;

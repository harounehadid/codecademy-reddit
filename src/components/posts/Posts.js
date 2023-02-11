import styles from './posts.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPosts, selectPostsFetchStatus } from './postsSlice';
import PostContainer from '../post/PostContainer';
import { selectSearchTerm } from '../../features/searchbar/searchbarSlice';
import { getSubredditLink } from '../getResource';
import { selectEndpoint, updateEndpoint } from '../subreddits/subredditEndpointSlice';
import Refresh from '../refresh/Refresh';

const Posts = () => {
    const dispatch = useDispatch();

    const endpoint = useSelector(selectEndpoint);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 3);
        dispatch(updateEndpoint(getSubredditLink(randomIndex)));
    }, []);

    const fechtedPosts = useSelector(selectPosts);
    
    const refetchPosts = () => {
        dispatch(fetchPosts(endpoint));
    }
    useEffect(() => {
        refetchPosts();
    }, [endpoint, dispatch]);

    const searchTerm = useSelector(selectSearchTerm);

    const status = useSelector(selectPostsFetchStatus);

    return (
        <div className={styles['container']}>

            {
                status === 'failed' ? <Refresh onClick={refetchPosts} /> :
                fechtedPosts
                    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(post => <PostContainer key={post.id} id={post.id} />)
            }

        </div>
    );
}

export default Posts;

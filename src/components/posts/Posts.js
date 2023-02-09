import styles from './posts.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPosts } from './postsSlice';
import PostContainer from '../post/PostContainer';
import { selectSearchTerm } from '../../features/searchbar/searchbarSlice';
import { getSubredditLink } from '../getResource';

const Posts = () => {
    const dispatch = useDispatch();

    let endpoint;

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 3);
        endpoint = getSubredditLink(randomIndex);
    }, []);

    const fechtedPosts = useSelector(selectPosts);
    
    useEffect(() => {
        dispatch(fetchPosts(endpoint));
    }, [endpoint, dispatch]);

    const searchTerm = useSelector(selectSearchTerm);

    return (
        <div className={styles['container']}>

            {
                fechtedPosts
                    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(post => <PostContainer key={post.id} id={post.id} />)
            }

        </div>
    );
}

export default Posts;

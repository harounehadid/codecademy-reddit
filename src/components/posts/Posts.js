import styles from './posts.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPosts } from './postsSlice';
import PostContainer from '../post/PostContainer';
import { selectSearchTerm } from '../../features/searchbar/searchbarSlice';

const Posts = () => {
    const dispatch = useDispatch();

    let endpoint = `https://www.reddit.com/r/pics.json`;

    const fechtedPosts = useSelector(selectPosts);
    useEffect(() => {
        dispatch(fetchPosts(endpoint));
    }, [endpoint]);

    const searchTerm = useSelector(selectSearchTerm);

    return (
        <div className={`flex-diplay
                         flex-horizontal-center
                         flex-column-direction
                         margin-center
                         ${styles['posts']}`}>

            {
                fechtedPosts
                    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(post => <PostContainer key={post.id} id={post.id} />)
            }

        </div>
    );
}

export default Posts;

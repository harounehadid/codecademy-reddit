import { useSelector } from "react-redux";
import { useState } from "react";
import { selectPostByID, selectPostsFetchStatus } from "../posts/postsSlice";
import Post from "./Post";
import shorthandNumber from '../shorthand-numbers/shorthandNumbers';
import timeSince from '../time-converter/timeConverter';
import FocusedPost from "./FocusedPost";

const PostContainer = props => {
    const { id } = props;
    const [focus, setFocus] = useState(false);

    const post = useSelector(state => selectPostByID(state, id));

    const handleClick = () => setFocus(!focus);

    const status = useSelector(selectPostsFetchStatus);
    
    return (
        <>
            <Post 
                id={post.id}
                postURL={post.postURL}
                media={post.media}
                authorName={post.authorName}
                time={timeSince(post.time)}
                title={post.title}
                ups={shorthandNumber(post.ups)}
                commentsNum={shorthandNumber(post.commentsNum)}
                handleClick={handleClick}
                status={status}
            />
            {
                focus && <FocusedPost 
                            id={post.id}
                            media={post.media}
                            handleClick={handleClick}
                         />
            }
        </>
    );
}

export default PostContainer;

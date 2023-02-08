import { useSelector } from "react-redux";
import { selectPostByID } from "../posts/postsSlice";
import Post from "./Post";
import shorthandNumber from '../shorthand-numbers/shorthandNumbers';
import timeSince from '../time-converter/timeConverter';

const PostContainer = props => {
    const { id } = props;

    const post = useSelector(state => selectPostByID(state, id));

    const handleClick = () => {
        console.log("Git Clicked");
    }
    
    return (
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
            />
    );
}

export default PostContainer;

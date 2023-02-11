import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostComments, selectComments, selectCommentsFetchStatus } from "./commentsSlice";
import timeSince from "../../components/time-converter/timeConverter";
import Comment from "../comment/Comment.js";
import Refresh from "../../components/refresh/Refresh";

const Comments = props => {
    const { id } = props;

    const comments = useSelector(selectComments);
    const dispatch = useDispatch();

    const endpoint = `https://www.reddit.com/comments/${id}/.json`;

    const fetch = () => {
        dispatch(fetchPostComments(endpoint));
    }
    
    useEffect(() => {
        fetch();
    }, [dispatch]);

    const status = useSelector(selectCommentsFetchStatus);

    return (
        <>
            {
                status === 'failed' ? <Refresh onClick={fetch} /> :
                comments.map(comment => <Comment key={comment.id}
                                                 id={comment.id}
                                                 author={comment.author}
                                                 commentBody={comment.comment}
                                                 time={timeSince(comment.time)}
                                                 status={status}
                                        />)
            }
        </>
    );
}

export default Comments;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostComments, selectComments } from "./commentsSlice";
import timeSince from "../../components/time-converter/timeConverter";
import Comment from "../comment/Comment.js";

const Comments = props => {
    const { id } = props;

    const comments = useSelector(selectComments);
    const dispatch = useDispatch();

    const endpoint = `https://www.reddit.com/comments/${id}/.json`;

    useEffect(() => {
        dispatch(fetchPostComments(endpoint));
    });

    return (
        <>
            {
                comments.map(comment => <Comment key={comment.id}
                                                 id={comment.id}
                                                 author={comment.author}
                                                 commentBody={comment.comment}
                                                 time={timeSince(comment.time)}
                                        />)
            }
        </>
    );
}

export default Comments;

import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/posts/postsSlice";
import commentsReducer from "../features/comments/commentsSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    }
});

export default store;

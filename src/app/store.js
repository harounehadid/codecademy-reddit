import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/posts/postsSlice";
import commentsReducer from "../features/comments/commentsSlice";
import searchbarReducer from "../features/searchbar/searchbarSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        searchbar: searchbarReducer
    }
});

export default store;

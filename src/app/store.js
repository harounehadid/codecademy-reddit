import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/posts/postsSlice";
import commentsReducer from "../features/comments/commentsSlice";
import searchbarReducer from "../features/searchbar/searchbarSlice";
import subredditEndpointReducer from "../components/subreddits/subredditEndpointSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        searchbar: searchbarReducer,
        endpoint: subredditEndpointReducer
    }
});

export default store;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    postsFetchStatus: 'idle'
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async endpoint => {
        try {
            const response = await fetch(endpoint);
    
            if (response.ok) {
                const body = await response.json();
                
                // Get only posts with images
                const filteredPosts = body.data.children.filter(fetchedPost => fetchedPost.data.post_hint === 'image');
    
                const newPosts = filteredPosts.map(fetchedPost => {
                    let data = {};

                    data.id = fetchedPost.data.id;
                    data.postURL = 'https://www.reddit.com' + fetchedPost.data.permalink;
                    data.media = fetchedPost.data.url_overridden_by_dest;
                    data.authorName = fetchedPost.data.author;
                    data.time = fetchedPost.data.created_utc;
                    data.title = fetchedPost.data.title;
                    data.ups = fetchedPost.data.ups;
                    data.commentsNum = fetchedPost.data.num_comments;
                    
                    return data;
                });
                
                return newPosts;
            }
            else {
                throw new Error('Request Failed!');
            }
        }
        catch(error) {
            console.log(error);
        }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.postsFetchStatus = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postsFetchStatus = 'succeeded';
                state.posts = action.payload;
            })
    }
});

export const selectPosts = state => state.posts.posts;
export const selectPostsFetchStatus = state => state.posts.postsFetchStatus;
export const selectPostByID = (state, id) => {
    return state.posts.posts.find(post => post['id'] === id);
}
export const selectPostsIDs = state => state.posts.posts.map(post => post.id);

export default postsSlice.reducer;

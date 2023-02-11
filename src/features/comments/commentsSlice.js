import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    status: 'idle'
};

export const fetchPostComments = createAsyncThunk('comments/fetchComments',
    async endpoint => {
        try {
            const response = await fetch(endpoint);

            if (response.ok) {
                const body = await response.json();

                const commentsArray = [];

                for (const commentBody of body[1].data.children) {
                    const newComment = {};

                    if (typeof(commentBody.data.body) !== 'string') continue;

                    newComment.id = commentBody.data.id;
                    newComment.author = commentBody.data.author;
                    newComment.comment = commentBody.data.body;
                    newComment.time = commentBody.data.created_utc;

                    commentsArray.push(newComment);
                }

                return commentsArray;
            }
            else {
                throw new Error('Request Failed!');
            }
        }
        catch(error) {
            console.log(error);
        }
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducer: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPostComments.pending, (state, action) => {
                console.log('loading in slice');
                state.status = 'loading';
            })
            .addCase(fetchPostComments.fulfilled, (state, action) => {
                console.log('done is slice');
                state.status = 'succeeded';
                state.comments = action.payload;
            })
    }
});

export const selectComments = state => state.comments.comments;
export const selectCommentsFetchStatus = state => state.comments.status;

export default commentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: ''
};

const searchbarSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchPost: (state, action) => {
            state.term = action.payload;
        }
    }
});

export const selectSearchTerm = state => state.searchbar.term;

export const { searchPost } = searchbarSlice.actions;
export default searchbarSlice.reducer;

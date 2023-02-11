import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    endpoint: ''
};

const subredditEndpointSlice = createSlice({
    name: 'endpoint',
    initialState,
    reducers: {
        updateEndpoint: (state, action) => {
            state.endpoint = action.payload;
        }
    }
});

export const selectEndpoint = state => state.endpoint.endpoint;

export const { updateEndpoint } = subredditEndpointSlice.actions;
export default subredditEndpointSlice.reducer;

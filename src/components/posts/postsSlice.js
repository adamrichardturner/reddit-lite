import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        updatePosts: (state, action) => state = action.payload
    }
});

export default postsSlice.reducer;
export const { updatePosts } = postsSlice.actions;
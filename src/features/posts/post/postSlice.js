import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: "postID",
    initialState: "",
    reducers: {
        updatePostID: (state, action) => action.payload
    }
});

export default postSlice.reducer;
export const { updatePostID } = postSlice.actions;
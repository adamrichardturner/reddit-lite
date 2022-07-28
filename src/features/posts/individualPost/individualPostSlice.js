import { createSlice } from '@reduxjs/toolkit';

const individualPostSlice = createSlice({
    name: "individualPostId",
    initialState: "",
    reducers: {
        updateActivePostId: (state, action) => state = action.payload 
    }
});

export default individualPostSlice.reducer;
export const { updateActivePostId } = individualPostSlice.actions;
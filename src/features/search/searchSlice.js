import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        updateActiveSearch: (state, action) => state = action.payload
    }
});

export const { updateActiveSearch } = searchSlice.actions;
export default searchSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: [],
        activeTopic: "/r/Home/"
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics.push(action.payload);
        },

        updateActiveTopic: (state, action) => {
            state.activeTopic = action.payload;
        }
    }
});

export const { addTopic, updateActiveTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

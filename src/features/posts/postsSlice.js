import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts } from '../../util/Reddit';

export const fetchPostsByTopic = createAsyncThunk(
    'posts/updatePosts',
    async (topic, thunkAPI) => {
      const response = getPosts(topic);
      return response;
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: true,
        hasError: false
    },
    reducers: {
        updatePosts: (state, action) => state = action.payload
    },
    extraReducers: {
        [fetchPostsByTopic.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPostsByTopic.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts.push(action.payload)
        },
        [fetchPostsByTopic.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default postsSlice.reducer;
export const { updatePosts } = postsSlice.actions;
console.log(updatePosts())
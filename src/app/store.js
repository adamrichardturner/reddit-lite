import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/posts/postsSlice';
import postSlice from '../features/posts/post/postSlice';
import topicsSlice from '../features/topics/topicsSlice';
import searchSlice from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    post: postSlice,
    topics: topicsSlice,
    search: searchSlice
  }
});
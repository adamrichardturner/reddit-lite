import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../components/posts/postsSlice';
import postSlice from '../components/posts/post/postSlice';
import topicsSlice from '../components/topics/topicsSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    post: postSlice,
    topics: topicsSlice
  },
});
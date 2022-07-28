import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../components/posts/postsSlice';
import postSlice from '../components/posts/post/postSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    post: postSlice,
  },
});
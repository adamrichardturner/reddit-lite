import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/posts/postsSlice';
import postSlice from '../features/posts/post/postSlice';
import topicsSlice from '../features/topics/topicsSlice';
import individualPostSlice from '../features/posts/individualPost/individualPostSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    post: postSlice,
    topics: topicsSlice,
    individualPostId: individualPostSlice
  }
});
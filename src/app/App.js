import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../features/header/Header';
import { PostsContainer } from '../containers/PostsContainer';
import { IndividualPost } from '../features/posts/individualPost/IndividualPost';
import { Sidebar } from '../features/sidebar/Sidebar';
import { getTopics } from '../util/Reddit';
import { getPosts } from '../util/Reddit';
import { updatePosts } from '../features/posts/postsSlice';
import { fetchPostsByTopic } from '../features/posts/postsSlice';
const App = () => {
  const activeTopic = useSelector(state => state.topics.activeTopic)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsByTopic(activeTopic))
  }, [activeTopic]);

  const posts = useSelector(state => state.posts);
  console.log(posts)
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/individualPost" element={<IndividualPost />} />
            <Route exact path="/" element={<PostsContainer 
                                            posts={posts}
                                          />} />
          </Routes>
          <Sidebar />
        </main>
      </div>
    </Router>
  );
}

export default App;

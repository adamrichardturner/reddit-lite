import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../features/header/Header';
import { PostsContainer } from '../containers/PostsContainer';
import { IndividualPost } from '../features/posts/individualPost/IndividualPost';
import { Sidebar } from '../features/sidebar/Sidebar';
import { fetchPostsByTopic } from '../features/posts/postsSlice';

const App = () => {
  const activeTopic = useSelector(state => state.topics.activeTopic)
  const dispatch = useDispatch();

  useEffect(() => {
    const data = fetchPostsByTopic(activeTopic)
    if(data) {
      dispatch(data);
    }
  }, [activeTopic, dispatch]);


  const posts = useSelector(state => state.posts.posts)

  console.log(posts);
  
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

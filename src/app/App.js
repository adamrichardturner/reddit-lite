import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../features/header/Header';
import { Posts } from '../features/posts/Posts';
import { Sidebar } from '../features/sidebar/Sidebar';
import { fetchPostsByTopic } from '../features/posts/postsSlice';

const App = () => {
  // Select activeTopic from state, initial state is /r/popular
  const activeTopic = useSelector(state => state.topics.activeTopic)
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch posts by topic and watch activeTopic for change to re-render
    const data = fetchPostsByTopic(activeTopic)
    if(data) {
      dispatch(data);
    }
  }, [activeTopic, dispatch]);

  // Store in posts our posts from state
  const posts = useSelector(state => state.posts.posts)

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Posts 
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

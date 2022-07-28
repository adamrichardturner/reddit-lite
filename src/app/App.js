import React from 'react';
import { Header } from '../components/header/Header';
import { Posts } from '../components/posts/Posts';
import { Sidebar } from '../components/sidebar/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Posts />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;

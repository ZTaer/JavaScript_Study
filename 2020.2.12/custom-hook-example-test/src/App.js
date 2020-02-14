import React from 'react';

import User from './components/user/user.component';
import Post from './components/post/post.component';

import UserReducerTest from './components/user-reducer-test/user-reducer-test.component';

import './App.css';

const App = props => {
  return (
    <div className='App'>
      <User userId={5} />
      <Post postId={5} />
      <UserReducerTest />
    </div>
  );
};

export default App;

import React from 'react';
import './App.scss';

// import UserProfile from './component/user-profile/user-profile.component'; 
import UserProfile from './component-hocs/user-profile/user-profile.component'; 
import UserList from './component-hocs/user-list/user-list.component';

function App() {
  return (
    <div className="App">
      <UserProfile 
        name={`测试`} 
        email={`test@test.com`} 
        dataSource='https://jsonplaceholder.typicode.com/posts' 
      />
      <UserList 
        dataSource='https://jsonplaceholder.typicode.com/users' 
      />
    </div>
  );
}

export default App;

import React from 'react';

import withData from '../with-data/with-data.component';

const UserList = ({data}) => {
  return(
    <div className="container user-list">
      <h1>用户列表</h1>
      {
        data.map( post => (
          <div key={post.id} className="post">
            <h1>{post.name}</h1>
            <h2>{post.email}</h2>
          </div>
        ) )
      }
    </div>
  );
}

export default withData(UserList);

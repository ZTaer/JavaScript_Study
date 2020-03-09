import React from 'react';

import Card from '../card/card.component';

import useAxios from '../../effects/use-axios.effect';

const User = ({ userId }) => {

  // 使用: 自定义hooks容器( 完成笔记 )
  const user = useAxios(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  );
};

export default User;

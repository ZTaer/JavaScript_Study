import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../card/card.component';

const UseEffectExample = () => {
  const [ user, setUser ] = useState(null);
  const [ searchContent, setSearchContent ] = useState('Bret');

  /**
   useEffect异步用法( 完成笔记 )
      a) useEffect的注意事项:
        0. 不能将useEffect嵌套在if等大括号内
        1. 必须在"组件函数"的顶级位置
      b) 使用地方:
        0. 代替react生命周期
        1. 监听指定变量，做出响应
  */
  useEffect( ()=>{
    if( searchContent.length > 0 ){ // useEffect只能在组件函数顶级位置,所以过滤条件要在之内
      const searchAsync = async () => {
        try{
          const content = await axios(`https://jsonplaceholder.typicode.com/users?username=${searchContent}`);
          await setUser( content.data[0] );
        }
        catch(error){
          console.log( error );
        }
      }
      searchAsync();
    }

  }, [searchContent] );

  return (
    <Card>
      <input
        type='search'
        value={ searchContent }
        onChange={ cur => setSearchContent( cur.target.value )  } // 注意onChange的使用方式
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffectExample;

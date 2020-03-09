import React, { useEffect, useReducer } from 'react';
import Card from '../card/card.component';

/**
 * 构建hooks中的reducer( 完成笔记 )
 *   0. hooks的reducer必须在同一个文件内,不可分割成其它文件,否则会报错
 *   1. 其实hooks的reducer像是redux的reducer的简化版
 *   2. 感觉hooks的reducer并不建议使用,推荐使用redux的reducer
 */

// reducer部分
const INITIAL_STATE = {
  user: null,
  searchQuery: 'Bret'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

// action部分
const setUser = user => ({
  type: 'SET_USER',
  payload: user
});

const setSearchQuery = queryString => ({
  type: 'SET_SEARCH_QUERY',
  payload: queryString
});

// 组件部分
const UseReducerExample = () => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);  // 启用hooks的reducer
  console.log(state);
  const { user, searchQuery } = state; // 获取reducer中的数据

  useEffect(() => {
    const fetchFunc = async () => {
        try{
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
            );
            const resJson = await response.json();
            dispatch(setUser(resJson[0]));
        }
        catch(err){
            console.log(err);
        }
    };

    fetchFunc();
  }, [searchQuery]);

  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => dispatch(setSearchQuery(event.target.value))}
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

export default UseReducerExample;
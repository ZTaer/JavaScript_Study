/**
 * 1. reducer统计目录: root-reducer.js ( 完成笔记 )
 */
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
});
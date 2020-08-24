/**
 * reducer目录
 */
import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducer
import userReducer from "./user/user.reducer";
import otherReducer from "./other/other.reducer";

// redux-persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],  // 设置redux本地变量
}

const rootReducer = combineReducers({
   user: userReducer,  
   other: otherReducer
});

// 3. 第四步: rootReducer类型( 等待笔记 )
    // a) 核心必备
export type RootState = ReturnType<typeof rootReducer>; 

export default persistReducer( persistConfig, rootReducer );
/**
 * reducer目录
 */
import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducer
import peopleReducer from './people/people.reducer';

// redux-persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],  // 设置redux本地变量
}

const rootReducer = combineReducers({
    people: peopleReducer,
});

export default persistReducer( persistConfig, rootReducer );
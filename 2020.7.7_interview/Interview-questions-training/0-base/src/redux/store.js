import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';                         // redux-persist: 本地存储
import thunk from 'redux-thunk';                                      // redux-thunk

import createSagaMidlleware from 'redux-saga';                        // redux-saga
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMidlleware();                        // saga中间件
const middleware = [thunk, sagaMiddleware];                           // 中间件

if( process.env.NODE_ENV === "development" ){                         // 开发模式，才启用logger
    middleware.push(logger);
}

const store = createStore( rootReducer, applyMiddleware(...middleware) );   // 中间件应用
sagaMiddleware.run( rootSaga );
const persistor = persistStore(store);

export {store,persistor};
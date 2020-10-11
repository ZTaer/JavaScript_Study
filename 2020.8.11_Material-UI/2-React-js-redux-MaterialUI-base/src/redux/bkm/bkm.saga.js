import { takeLatest, call, all, put, race, delay, select } from 'redux-saga/effects';
import { bkmActionTypes } from './bkm.types';
import { fetchBkmFailure, fetchBkmSuccess, fetchBkmItemSuccess, fetchBkmItemFailure } from './bkm.action';
import axios from 'axios';
import { selectBkmItemId } from './bkm.selectors';

/**
 * 函数区
 */
// Redux Saga请求超时写法 - race超时写法
    // 0. 核心: race函数
    // 1. 模型: const { posts, timeout } = yield race({ posts: 请求数据函数, timeout: delay(设定超时时间) });
export function* fetchBkmStartReduxSaga(){
    try{
        const { posts, timeout } = yield race({
            posts: axios("https://pokeapi.co/api/v2/pokemon?limit=15"),    // 请求数据
            timeout: delay(5000)                                          // 超时时间设定10秒
        });
        yield put( fetchBkmSuccess(posts.data) );
    }
    catch(err){
        yield put( fetchBkmFailure(err) );
        alert(err);
    }
};

export function* fetchBkmItemStartReduxSaga(){
    try{
      const itemId = yield select( selectBkmItemId );
      const fetchData = yield axios(`https://pokeapi.co/api/v2/pokemon/${itemId}`);  
      yield put(fetchBkmItemSuccess( fetchData.data ));
    }
    catch(err){
        yield put( fetchBkmItemFailure(err) );
        alert(err);
    }
};


/**
 * 监听区
 */
export function* onFetchBkmStart() {
    yield takeLatest( bkmActionTypes.FETCH_BKM_LIST_START, fetchBkmStartReduxSaga )
};

export function* onFetchBkmItemStart() {
    yield takeLatest( bkmActionTypes.FETCH_BKM_ITEM_START, fetchBkmItemStartReduxSaga )
}

/**
 * 执行区
 */
export function* bkmSaga(){
    yield all([
        call(onFetchBkmStart),
        call(onFetchBkmItemStart),
    ]);
};
import { takeLatest, call, all, put, race, delay } from 'redux-saga/effects';
import { bkmActionTypes } from './bkm.types';
import { fetchBkmFailure, fetchBkmSuccess } from './bkm.action';
import axios from 'axios';

/**
 * 函数区
 */
// Redux Saga请求超时写法 - race超时写法
    // 0. 核心: race函数
    // 1. 模型: const { posts, timeout } = yield race({ posts: 请求数据函数, timeout: delay(设定超时时间) });
export function* fetchBkmStartReduxSaga(){
    try{
        const { posts, timeout } = yield race({
            posts: axios("https://pokeapi.co/api/v2/pokemon?limit=30"),    // 请求数据
            timeout: delay(5000)                                          // 超时时间设定10秒
        });
        yield put( fetchBkmSuccess(posts.data) );
    }
    catch(err){
        yield put( fetchBkmFailure(err) );
        alert(err);
    }
};

/**
 * 监听区
 */
export function* onFetchBkmStart() {
    yield takeLatest( bkmActionTypes.FETCH_BKM_START, fetchBkmStartReduxSaga )
};

/**
 * 执行区
 */
export function* bkmSaga(){
    yield all([
        call(onFetchBkmStart),
    ]);
};
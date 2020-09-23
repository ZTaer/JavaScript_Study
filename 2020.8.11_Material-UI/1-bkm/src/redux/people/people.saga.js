import { takeLatest, call, all, put, select, race, delay } from 'redux-saga/effects';
import { peopleActionTypes } from './people.types';
import {
    fetchPeopleFailure,
    fetchPeopleSuccess
} from './people.action';
import axios from 'axios';
import { selectPeopleOrigin } from './people.selectors';

/**
 * 函数区
 */
// 无超时写法
export function* fetchPeopleReduxSagaStart(){
    try{
        const peopleDate = yield axios("https://swapi.py4e.com/api/people/");
        yield put( fetchPeopleSuccess(peopleDate.data) );
        yield delay(2000);
        console.log( "Redux Saga 通过 select 获取reselect数据: ", yield select(selectPeopleOrigin) );
    }
    catch(err){
        yield put( fetchPeopleFailure(err) );
    }
};
// Redux Saga请求超时写法 - race超时写法( 等待笔记 )
    // 0. 核心: race函数
    // 1. 模型: const { posts, timeout } = yield race({ posts: 请求数据函数, timeout: delay(设定超时时间) });
export function* fetchPeopleReduxSagaTimeOutStart(){
    try{
        const { posts, timeout } = yield race({
            posts: axios("https://swapi.py4e.com/api/people/"),    // 请求数据
            timeout: delay(1000)                                   // 超时时间设定1秒
        });
        if( posts.data ){
            console.log("成功获取数据!");
        }
    }
    catch(err){
        console.log("访问超时!");
    }
};

/**
 * 监听区
 */
export function* onFetchPeopleReduxSagaStart() {
    yield takeLatest( peopleActionTypes.FETCH_PEOPLE_REDUX_SAGA_START,fetchPeopleReduxSagaStart );
};
export function* onFetchPeopleReduxSagaTimeOutStart() {
    yield takeLatest( peopleActionTypes.FETCH_PEOPLE_SUCCESS,fetchPeopleReduxSagaTimeOutStart );
};

/**
 * 执行区
 */
export function* peopleSaga(){
    yield all([
        call(onFetchPeopleReduxSagaStart),
        call(onFetchPeopleReduxSagaTimeOutStart)
    ]);
};
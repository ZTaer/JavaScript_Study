import { takeLatest, call, all, put, delay, select } from 'redux-saga/effects';
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
}

/**
 * 监听区
 */
export function* onFetchPeopleReduxSagaStart() {
    yield takeLatest( peopleActionTypes.FETCH_PEOPLE_REDUX_SAGA_START,fetchPeopleReduxSagaStart );
}

/**
 * 执行区
 */
export function* peopleSaga(){
    yield all([
        call(onFetchPeopleReduxSagaStart),
    ]);
};
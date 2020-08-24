import { call, all } from 'redux-saga/effects';

/**
 * 登记区
 */
import { peopleSaga } from './people/people.saga';

export default function* rootSaga(){
    yield all([
        call(peopleSaga),
    ]);
}

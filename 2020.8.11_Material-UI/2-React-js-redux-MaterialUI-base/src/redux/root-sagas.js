import { call, all } from 'redux-saga/effects';

/**
 * 登记区
 */
import { peopleSaga } from './people/people.saga';
import { bkmSaga } from './bkm/bkm.saga';

export default function* rootSaga(){
    yield all([
        call(peopleSaga),
        call(bkmSaga),
    ]);
}

import { bkmActionTypes } from './bkm.types';
import { bkmSimpleData_utill } from './bkm.utill';

const INITIAL_STATE = {
    bkmData: null,
    bkmSimpleData: null,
    isFetching: true,
    errorMsg: null,
}

const bkmReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case bkmActionTypes.FETCH_BKM_START:
            return {
                ...state,
                isFetching: true
            }
        case bkmActionTypes.FETCH_BKM_SUCCESS:
            return {
                ...state,
                bkmData: action.payload,
                bkmSimpleData: bkmSimpleData_utill(action.payload),
                isFetching: false,
                errorMsg: null,
            }
        case bkmActionTypes.FETCH_BKM_FAILURE:
            return {
                ...state,
                bkmData: null,
                bkmSimpleData: null,
                isFetching: false,
                errorMsg: action.payload,
            }
        default:
            return state;
    }
}

export default bkmReducer;
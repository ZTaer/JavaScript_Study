import { bkmActionTypes } from './bkm.types';
import { bkmSimpleData_utill, bkmItemSimpleData_utill, bkmFilterData_utill } from './bkm.utill';

const INITIAL_STATE = {
    bkmList: {
        bkmData: null,
        bkmSimpleData: null,
        bkmFilterData: null,
        searchName: null,
        isFetching: true,
        errorMsg: null,
    },
    bkmItem: {
        bkmItemId: null,
        bkmData: null,
        bkmSimpleData: null,
        isFetching: true,
        errorMsg: null,
    }
}

const bkmReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case bkmActionTypes.FETCH_BKM_LIST_START:
            return {
                ...state,
                bkmList: {
                    ...state.bkmList,
                    isFetching: true
                }
            }
        case bkmActionTypes.FETCH_BKM_LIST_SUCCESS:
            return {
                ...state,
                bkmList: {
                    ...state.bkmList,
                    bkmData: action.payload,
                    bkmSimpleData: bkmSimpleData_utill(action.payload),
                    bkmFilterData: bkmSimpleData_utill(action.payload),
                    isFetching: false,
                    errorMsg: null,
                }
            }
        case bkmActionTypes.FETCH_BKM_LIST_FAILURE:
            return {
                ...state,
                bkmList: {
                    ...state.bkmList,
                    bkmData: null,
                    bkmSimpleData: null,
                    isFetching: true,
                    errorMsg: action.payload,
                }
            }
        case bkmActionTypes.SEARCH_INPUT_NAME_BKM:
            return {
                ...state,
                bkmList: {
                    ...state.bkmList,
                    searchName: action.payload,
                    bkmFilterData: bkmFilterData_utill( action.payload, state.bkmList.bkmSimpleData ),
                }
            }
        case bkmActionTypes.FETCH_BKM_ITEM_START:
            return {
                ...state,
                bkmItem: {
                    ...state.bkmItem,
                    bkmItemId: action.payload,
                    isFetching: true,
                }
            }
        case bkmActionTypes.FETCH_BKM_ITEM_SUCCESS:
            return {
                ...state,
                bkmItem: {
                    ...state.bkmItem,
                    bkmData: action.payload,
                    bkmSimpleData: bkmItemSimpleData_utill(action.payload), 
                    isFetching: false,
                    errorMsg: null,
                }
            }
        case bkmActionTypes.FETCH_BKM_ITEM_FAILURE:
            return {
                ...state,
                bkmItem: {
                    ...state.bkmItem,
                    bkmData: null,
                    bkmSimpleData: null,
                    isFetching: true,
                    errorMsg: action.payload,    
                }
            }
        default:
            return state;
    }
}

export default bkmReducer;
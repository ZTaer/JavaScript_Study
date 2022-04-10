import { bkmActionTypes } from './bkm.types'

export const fetchBkmStart = () => ({
    type: bkmActionTypes.FETCH_BKM_LIST_START,
});

export const fetchBkmSuccess = data => ({
    type: bkmActionTypes.FETCH_BKM_LIST_SUCCESS,
    payload: data,
});

export const fetchBkmFailure = data => ({
    type: bkmActionTypes.FETCH_BKM_LIST_FAILURE,
    payload: data,
});



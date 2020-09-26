import { bkmActionTypes } from './bkm.types'

export const fetchBkmStart = () => ({
    type: bkmActionTypes.FETCH_BKM_START,
});

export const fetchBkmSuccess = data => ({
    type: bkmActionTypes.FETCH_BKM_SUCCESS,
    payload: data,
});

export const fetchBkmFailure = data => ({
    type: bkmActionTypes.FETCH_BKM_FAILURE,
    payload: data,
});



import { bkmActionTypes } from './bkm.types'

/**
 * 针对bkmList
 */
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

export const searchInputNameBkm = data => ({
    type: bkmActionTypes.SEARCH_INPUT_NAME_BKM,
    payload: data,
});

/**
 * 针对bkmItem
 */
export const fetchBkmItemStart = ( id ) => ({
    type: bkmActionTypes.FETCH_BKM_ITEM_START,
    payload: id
});

export const fetchBkmItemSuccess = data => ({
    type: bkmActionTypes.FETCH_BKM_ITEM_SUCCESS,
    payload: data,
});

export const fetchBkmItemFailure = data => ({
    type: bkmActionTypes.FETCH_BKM_ITEM_FAILURE,
    payload: data,
});
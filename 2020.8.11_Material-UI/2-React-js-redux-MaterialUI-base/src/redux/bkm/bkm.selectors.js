import { createSelector } from 'reselect';

const selectBkm = state => state.bkm;

/**
 * 针对bkmList内容索引
 */
export const selectBkmOrigin = createSelector(
    [selectBkm],
    props=>props.bkmList
);

export const selectBkmData = createSelector(
    [selectBkmOrigin],
    props => props.bkmData
);
export const selectBkmSimpleData = createSelector(
    [selectBkmOrigin],
    props => props.bkmSimpleData
);
export const selectBkmFilterData = createSelector(
    [selectBkmOrigin],
    props => props.bkmFilterData
);

export const selectIsFetching = createSelector(
    [selectBkmOrigin],
    props => props.isFetching
);

export const selectErrorMsg = createSelector(
    [selectBkmOrigin],
    props => props.errorMsg
);

/**
 * 针对bkmItem索引
 */
export const selectBkmItemOrigin = createSelector(
    [selectBkm],
    props=>props.bkmItem
);

export const selectBkmItemData = createSelector(
    [selectBkmItemOrigin],
    props => props.bkmData
);

export const selectBkmItemSimpleData = createSelector(
    [selectBkmItemOrigin],
    props => props.bkmSimpleData
);

export const selectBkmItemId = createSelector(
    [selectBkmItemOrigin],
    props => props.bkmItemId
);

export const selectBkmItemIsFetching = createSelector(
    [selectBkmItemOrigin],
    props => props.isFetching
);

export const selectBkmItemErrorMsg = createSelector(
    [selectBkmItemOrigin],
    props => props.errorMsg
);
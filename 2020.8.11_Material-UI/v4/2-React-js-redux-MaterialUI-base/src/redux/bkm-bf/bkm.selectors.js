import { createSelector } from 'reselect';

const selectBkm = state => state.bkm;

export const selectBkmOrigin = createSelector(
    [selectBkm],
    props=>props
);

export const selectBkmData = createSelector(
    [selectBkmOrigin],
    props => props.bkmData
);
export const selectBkmSimpleData = createSelector(
    [selectBkmOrigin],
    props => props.bkmSimpleData
);

export const selectIsFetching = createSelector(
    [selectBkmOrigin],
    props => props.isFetching
);

export const selectErrorMsg = createSelector(
    [selectBkmOrigin],
    props => props.errorMsg
);

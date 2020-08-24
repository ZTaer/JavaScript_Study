import { otherActionTypes } from "./other.types";
import { TsOtherActionTypes, SetOtherDataProps } from "./other.model";

// 用于redux-thunk
import { Dispatch } from "redux";

export const setOtherData = ( data: SetOtherDataProps ): TsOtherActionTypes => ({
    type: otherActionTypes.SET_OTHER_DATA,
    payload: data
});

// redux-thunk与ts结合使用( 等待笔记 )
export const fetchDataUseReduxThunk = () => {
    return ( dispatch: Dispatch ) => {
        dispatch( setOtherData("redux-thunk") );
    }
};

export type Test = typeof fetchDataUseReduxThunk;
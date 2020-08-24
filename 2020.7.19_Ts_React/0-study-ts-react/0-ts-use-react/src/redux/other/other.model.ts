import { otherActionTypes } from "./other.types";

// action props type
export type SetOtherDataProps = string;

interface SetOtherData {
    type: typeof otherActionTypes.SET_OTHER_DATA,
    payload: SetOtherDataProps
}

export type FetchDataUseReduxThunk = ()=>void;

export type TsOtherActionTypes = SetOtherData ;

// init type
export interface OtherInitState {
    otherData: string | undefined | null,
}
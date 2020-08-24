import { otherActionTypes } from "./other.types";
import { TsOtherActionTypes, OtherInitState } from "./other.model";

const INIT_STATE: OtherInitState = {
    otherData: null
};

const otherReducer = ( state = INIT_STATE, action: TsOtherActionTypes ) => {
    switch( action.type ){
        case otherActionTypes.SET_OTHER_DATA:
            return {
                ...state,
                otherData: action.payload
            }
        default:
            return state;
    }
};

export default otherReducer;
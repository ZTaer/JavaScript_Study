/**
 * 2. 第三步: 构建reducer，并使用type( 等待笔记 )
 */
// 
import { TsUserActionTypes, UserInitState } from "./user.model";
import { userActionTypes } from "./user.types";

const INIT_STATE: UserInitState = {
    currentUser: null
};

// 要使用init type
const userReducer = ( state = INIT_STATE, action:TsUserActionTypes ): UserInitState => {
    switch ( action.type ){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.INIT_CURRENT_USER:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }
};

export default userReducer;

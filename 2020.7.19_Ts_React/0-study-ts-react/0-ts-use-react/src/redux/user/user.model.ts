/**
 * 0. 第一步: 根据type构建出action类型( 等待笔记 )
 */
// a) 注意: typeof xxxx很重要, 可以让ts识别不同的action类型
// b) action type用途: 
    // 0. xxx.action.ts中的aciton
    // 1. xxxReducer的action参数
// c) init type用途:
    // 0. xxx.reducer.ts中的INIT_STATE变量
    // 1. userReducer函数本身( 因为最终的返回值也只是改变的INIT_STATE )

import { userActionTypes } from "./user.types";

// action props type
export type PropsType = object | null;

// action type
interface SetCurrentUser {
    type: typeof userActionTypes.SET_CURRENT_USER,
    payload: PropsType 
}

interface InitCurrentUser {
    type: typeof userActionTypes.INIT_CURRENT_USER,
    payload?: null 
}

// action type核心输出( 核心 )
export type TsUserActionTypes = SetCurrentUser | InitCurrentUser;

// init type
export interface UserInitState {
    currentUser: null | object | undefined,
}
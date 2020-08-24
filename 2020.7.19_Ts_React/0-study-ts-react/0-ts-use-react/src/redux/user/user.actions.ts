/**
 * 1. 第二步: action type的使用
 */
import { userActionTypes } from "./user.types";
import { TsUserActionTypes, PropsType } from "./user.model";

export const setCurrentUser = ( data: PropsType ): TsUserActionTypes => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: data
});

export const initCurrentUser = (): TsUserActionTypes => ({
    type: userActionTypes.INIT_CURRENT_USER
});
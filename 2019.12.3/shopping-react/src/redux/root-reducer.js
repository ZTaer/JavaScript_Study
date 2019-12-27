/**
 * 1. reducer统计目录: root-reducer.js ( 完成笔记 )
 */
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    modal: modalReducer,
});
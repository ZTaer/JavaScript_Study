import React from 'react';
import "./cart-dropdown.styles.scss";

// 便捷式select使用方式(等待笔记)
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map( cur => (<CartItem key={cur.id} item={cur} />) )
                }
            </div>
            <CustomButton selfCss={'cart-dropdown-btn'} >
                结算
            </CustomButton>
        </div>
    );
}

// select便捷式使用法(等待笔记)
const mapStateToprops = createStructuredSelector({
    cartItems: selectCartItems,
})

export default connect(mapStateToprops)(CartDropdown) ;
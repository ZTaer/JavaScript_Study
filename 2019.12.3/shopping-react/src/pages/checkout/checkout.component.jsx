import React from 'react';

import "./checkout.styles.scss";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartPriceTotal, selectCartItems} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ( {cartPriceTotal, cartItems} ) => {
    return(
        <div className="checkout-page">

            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        产品
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        描述                        
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        数量
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        价格
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        移除
                    </span>
                </div>
            </div>

            {
                cartItems.map( cur=>(<CheckoutItem key={cur.id} cartItem={cur} />) )
            }

            <div className="total">
                <span>
                    总和: ￥{cartPriceTotal}
                </span>
            </div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartPriceTotal: selectCartPriceTotal,
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage) ;

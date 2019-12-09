import React from 'react';
import "./shopage.styles.scss";
import shopData from "./shop.data";

import CollectionView from "../../components/collection-view/collection-view.component";

class ShopPage extends React.Component  {
    constructor( props ){
        super( props );
        this.state = {
            collectionShop: shopData,
        }
    }

    render(){
        console.log( shopData );
        // 对象解构法 - 创建对象属性变量并赋值( 完成笔记 )
            // 0. const { collectionShop } = this.state; 相当于 const collectionShop = this.state.collectionShop;
            // 1. 注意属性名称与变量名称一致，以及注意大括号。
        const { collectionShop } = this.state;
        return (
            <div className="shop-page">
                {
                    collectionShop.map( ( {id,...otherProps} )=>(
                       <CollectionView key={id} {...otherProps} /> 
                    ) )
                }
            </div>
        );
    }

}

export default ShopPage;
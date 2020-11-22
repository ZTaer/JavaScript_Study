/**
 * module.exports导出匿名函数 | 使可在全局索引使用( 等待笔记 )
 */

module.exports = ( temp, proItemData ) => {
    let result = temp;
    result = result.replace( /{%PRODUCT_NAME%}/g, proItemData.productName );
    result = result.replace( /{%IMAGE%}/g, proItemData.image );
    result = result.replace( /{%QUANTITY%}/g, proItemData.quantity );
    result = result.replace( /{%PRICE%}/g, proItemData.price );
    result = result.replace( /{%ID%}/g, proItemData.id );
    result = result.replace( /{%NUTRIENTS%}/g, proItemData.nutrients );
    result = result.replace( /{%FROM%}/g, proItemData.from );
    result = result.replace( /{%DESCRIPTION%}/g, proItemData.description );

    // 非有机物加入 not-organic 加入css3样式
    if( !proItemData.organic ) result = result.replace( /{%NOT_ORGANIC%}/g, 'not-organic' );

    return result;
};
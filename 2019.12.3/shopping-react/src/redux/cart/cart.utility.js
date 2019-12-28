// xx.utility.js专门写入,扩展函数(完成笔记)
export const  addItemToCart = ( cartItems, additem ) => {
   const door = cartItems.find( cur => cur.id === additem.id );
   // 如果购物车已存在物品则数量+1
   if( door ){
        return cartItems.map(
            cur => cur.id === additem.id ? { ...cur, quantity: cur.quantity + 1 } : cur 
        );
   } 
   // 如果购物车无物品则创建物品,并设定数量为1
   // 解构的方法增加对象元素/解构的方法增加数组元素(完成笔记)
   return [ ...cartItems, { ...additem, quantity: 1 } ];
}
import uniqid from 'uniqid';

export default class List {
    constructor(){
        this.items = [];
    }

    addItem( num, unit, ingredients ){
        const item = {
            id : uniqid(),
            num,
            unit,
            ingredients,
        }
        this.items.push( item );

        this.saveLocalItems();
    }    

    deleteItem( id ){
        const index = this.items.findIndex( cur => cur.id === id );
        this.items.splice( index, 1 );

        this.saveLocalItems();
    }

    // 第一种方法,改变数量:
    updateItemNum( id, num ){
        Array.from( this.items ).forEach( cur => {
            if( cur.id === id ){
                num < 0 ? cur.num = 0 : cur.num = num;
            }
        });

        this.saveLocalItems();
    }

    // 第二种方法,改变数量( find找到目标直接返回对应的数据元素 )
    updateNewNum( id, newNum ){
        let tar = this.items.find( cur => cur.id === id );
        newNum < 0 ? tar.num = 0 : tar.num = newNum;

        this.saveLocalItems();
    }

    // 一键清空购物车
    clearAllList(){
        this.items = [];

        this.saveLocalItems();
    }

    /**
     * 购物车本地数据处理
     */
    // 0. 页面加载时获取本地数据
    getLocalItems(){
        if( localStorage.getItem( 'items' ) ) this.items = JSON.parse( localStorage.getItem('items') );
    }
    // 1. 每一次的购物车改变，都同步到本地数据存储
    saveLocalItems(){
        localStorage.setItem( 'items', JSON.stringify( this.items ) );
    }

}
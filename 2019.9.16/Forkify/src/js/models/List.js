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
    }    

    deleteItem( id ){
        const index = this.items.findIndex( cur => cur.id === id );
        this.items.splice( index, 1 );
    }

    // 第一种方法,改变数量:
    updateItemNum( id, num ){
        Array.from( this.items ).forEach( cur => {
            if( cur.id === id ){
                num < 0 ? cur.num = 0 : cur.num = num;
            }
        });
    }

    // 第二种方法,改变数量( find找到目标直接返回对应的数据元素 )
    updateNewNum( id, newNum ){
        let tar = this.items.find( cur => cur.id === id );
        newNum < 0 ? tar.num = 0 : tar.num = newNum;
    }
}
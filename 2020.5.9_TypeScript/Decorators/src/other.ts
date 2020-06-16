console.log('--- --- --- other分割线 --- --- ---')

/* 装饰器：监听抓取方式( 完成笔记 ) */
    // a) 装饰器监听方式: @xxx yyyy;
    // b) 参数:
        // 0. 装饰器监听类型: class中的函数, class中的set函数，class中的变量： ( target: any, name: string | Symbol, des?: PropertyDescriptor )
        // 1. 装饰器监听类型: 函数中的参数：( target: any, name: string | Symbol, position?:number )

// 监听class中的变量
function Logger0( target: any, name: string | Symbol, des?: PropertyDescriptor ){
    console.log('Logger - 0 ------');
    console.log('target:',target);
    console.log('name:',name);
    console.log('des:',des);
}

// 监听class中的set
function Logger1( target: any, name: string | Symbol, des?: PropertyDescriptor ){
    console.log('Logger - 1 ------');
    console.log('target:',target);
    console.log('name:',name);
    console.log('des:',des);
}

// 监听函数
function Logger2( target: any, name: string | Symbol, des?: PropertyDescriptor ){
    console.log('Logger - 2 ------');
    console.log('target:',target);
    console.log('name:',name);
    console.log('des:',des);
}

// 监听函数中的参数
function Logger3( target: any, name: string | Symbol, position?:number ){
    console.log('Logger - 3 ------');
    console.log('target:',target);
    console.log('name:',name);
    console.log('popsition:',position);
}

class Product {
    @Logger0 titles: string;

    private _price: number;

    @Logger1 set price( val: number ){
        if( val > 0 ){
            this._price = val;
        }
    }

    constructor( t: string, @Logger3 p: number ){
        this.titles = t;
        this._price = p;
        console.log('开始');
    }

    
    @Logger2 getPrice(  tax: number ){
        return this._price * ( 1 + tax );
    }

}
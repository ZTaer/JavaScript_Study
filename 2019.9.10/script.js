
/*
// ES6-异步
// setTimeout()异步函数之一,设定指定时间异步执行此事件
let test1 = () => {
    console.log('hello');
}

let test2 = () => {
    console.log('world');
    // setTimeout()异步函数之一,设定指定时间异步执行此事件
        // 原模型: setTimeout( ()=>{},times ); 
        // 使用此函数后，不会影响后续代码的执行，这就是异步的好处
    setTimeout( () => {
        test1();
    },3000 ); 
    console.log('!!!!');
}

test2();
*/

// 多种版本模拟服务器获取信息异步方法
// 0. ES5 - callback hell 回调地狱三角异步方法( 难维护,不方便阅读 )
    // 0. 模型: setTimeout( ()=>{}, times, 默认参数 )
    // 1. setTimeout()可以互相嵌套
function getRecipe5(params) {
    setTimeout( () => {
        const ids = [01,02,03,04,05];
        console.log(  ids );

        setTimeout( id => {
            const recipe = {
                id:02,
                title:'美味鲜美的番茄披萨',
                description:'12英寸美味披萨，精烹3小时,来自亚洲张家界优质番茄,最美味的味道最匹配最好的你!',
                publisher:'ZTaer',
            }
            console.log(`ID: ${id} - ${recipe.title}`);

            setTimeout( publisher => {
                console.log( `由${publisher}大厨烹饪!` );
            }, 1500, recipe.publisher );

        },2000,ids[1] );

    }, 2000 );
    
}
console.log('BGN!!!');
// getRecipe5();

// 1. ES6 - Promises对象异步方法( 较易维护,方便可读,但是依然较为麻烦 )

// a) 模拟创建异步获取数据
const getIDs = new Promise( ( resolve, reject ) => {
    setTimeout( ()=>{
        const ids = [10,20,30,40,50];
        resolve(ids);  // 成功获取数据后 - 返回获取到的值
        reject('error'); // 获取数据失败后 - 返回的值
    },1500 );
} );

const getRecipe = id => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( id => {
            const recipe = {
                id:02,
                title:'美味鲜美的番茄披萨',
                description:'12英寸美味披萨，精烹3小时,来自亚洲张家界优质番茄,最美味的味道最匹配最好的你!',
                publisher:'ZTaer',
            }
            resolve(`ID: ${id} - ${recipe.title}`);
        }, 1500, id );
    } )
}

const getRelated = publisher => {
    return new Promise( ( resolve, reject ) => {
       setTimeout(  publisher => {
            resolve( `由${publisher}大厨烹饪!` );
       },1500, publisher );

    } );
}

//  b) 模拟使用异步函数获取服务器信息
getIDs.then( IDs => {
    console.log(IDs);
    return getRecipe( IDs[1] ); // .then()具有可传递性数据处理
} )
.then( recipe => {
    console.log( recipe );
    return getRelated( 'ZTaer' );
} )
.then( publisher => {
    console.log( publisher );
} )
.catch( error => {
    console.log( error );
} );



// 2. ES8
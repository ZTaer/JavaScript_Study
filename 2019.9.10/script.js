
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
    // 0. 创建Promises函数
        // a) 模型new Promise( (resolve, reject) => {} );
        // b) 不过new Promise()通常情况下与setTimeout()配合
            // 0. new Promises( ( resolve, reject ) => {
            //       setTimeout( ()=>{ resolve('返回内容') },1500 );
            // } ); 
        // c) 在Promises中:
            // 0. resolve()获取数据"成功"时返回的数据
            // 1. reject()获取数据"失败"时返回的数据
        // d) 注意: new Promise( (resolve, reject)=>{} );其中resolve,reject为必备参数
    // 1. 处理异步数据方法.then( cur=>{} ).catch( error=>{} );
        // a) 具体使用方式请看下方实列演示
        // b) Promise.then( ()=>{} ).then( ()=>{} ).catch( ()=>{} );
            // 0. then()可进行多级嵌套，并持续处理return值
                // a) 如: then( ()=>{return a} ).then( a=>{ console.log(a) } )
                // b) a为同一值,因为then()的return是传递给下一个then的表现
                // c) then()用于专门等待Promise异步数据输出来处理
            // 1. catch( error=>{} )当数据发生错误执行此函数中的语句


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

/*
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
*/

// 2. ES8 - async/await处理异步数据( 更科学,更易维护 )
    // 0. 创建异步的方法依然使用 new Promise()
    // 1. async只是处理异步数据的方法,代替了then()/catch()
    // 2. await解析:
        // a) await只能使用在async函数中
        // b) await 为等待异步数据输出,在接受处理结果
    // 3. 异步数据处理步骤:
        // a) 0. new Promise创建异步函数 -> 1. async处理Promise输出的异步数据 -> 2. then处理async的异步数据

    async function getRecipe8(){
        const IDs = await getIDs; // await处理Promise写法
        console.log(IDs);
        
        const recipe = await IDs[1];
        console.log(recipe);
        
        const publisher = await getRelated('ZTaer');
        console.log(publisher);

        return recipe;
    }

    // 注意: 这样是无法处理async函数的输出值的,因为async为异步状态
    // const get8 = getRecipe8();
    // console.log(get8);

    // 处理async异步数据方法需要于then配合
    getRecipe8().then( cur => {
        console.log(` async配合then处理异步数据 `);
    } );

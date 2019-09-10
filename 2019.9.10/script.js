
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

// 底层异步工作方式
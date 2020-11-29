const fs = require("fs");
const { setImmediate } = require("timers");

/**
 * 异步实验( 完成笔记 )
 *      a) 默认异步顺序队列
 *          0. timer队列
 *          1. I/O队列( 虽然他位居第二，但是通常执行较为缓慢，实际情况要比Immediate慢 )
 *          2. Immediate队列
 *          3. Close Callback队列
 *          4. 判断是否存在，I/O, timer
 *          5. 不存在: 终止循环，退出程序
 *          6. 存在: 则继续循环
 *      b) 2个特殊队列( 要比默认队列，先执行 )
 *          0. process.nextTick()队列
 *          1. 微任务队列( somePromise异步函数 )
 */


setTimeout( ()=>{ console.log("1 - 我是Timer"); },0 );

setImmediate( () => { console.log('0 - 我是setImmediate') } );

fs.readFile("test.txt",()=>{ 
    console.log('2 - 我是I/O');
    // 注意: 此函数内乃是I/O的地盘
    //      a) 根据图表: ( 在I/O地盘时的步骤 )
    //          0. I/O --> 
    //          1. Immediate --> 
    //          2. 结束无用的callback --> 
    //          3. 继续监听timer或者I/O --> 
    //          4. timer类型callback -->
    //          5. I/O --> 由此循环
    console.log('------');

    setTimeout(()=>{ console.log('00 - timer') },0);
    setImmediate(()=>{ console.log('11 - Immediate') });
    process.nextTick( () => { console.log("22 - Process") } );
});

console.log('3 - 我是非异步')

process.nextTick( () => { console.log("4 - Process") } );

// 结果是: 3,4,1,0,2,22,11,00
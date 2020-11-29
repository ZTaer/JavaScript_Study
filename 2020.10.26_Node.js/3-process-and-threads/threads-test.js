const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();   // 方便统计时间

/**
 * 改变线程数量( 完成笔记 )
 */
// a) 仅限mac平台使用:
process.env.UV_THREADPOOL_SIZE = 1;

/**
 * 事件循环细节( 完成笔记 )
 *      a) setImmediate特殊的异步计时器( 等待研究 )
 */

setImmediate( () => console.log('setImmediate - 2') );
setTimeout( () => console.log('setTimeout - 1') );

fs.readFile( "./final.txt",() => {
    console.log(' 异步读取文件 - 4 ');

    console.log('-----');

    setTimeout( () => console.log('setTimeout - 5'));
    setImmediate( () => console.log('setImmediate - 6') );

    process.nextTick( ()=> console.log('nextTick - 7') );   // 微任务队列: 优先执行~
        
    /**
     * 线程测试( 完成笔记 )
     *      a) 注意: crypto为加密库, 这里只用于测试异步
     */
    crypto.pbkdf2( "password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start ,' 测试线程 - 1 ')
    } );
    crypto.pbkdf2( "password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start ,' 测试线程 - 2 ')
    } );
    crypto.pbkdf2( "password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start ,' 测试线程 - 3 ')
    } );
    crypto.pbkdf2( "password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start ,' 测试线程 - 4 ')
    } );
    crypto.pbkdf2( "password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start ,' 测试线程 - 4 ')
    } );

} );


console.log("非异步 - 3");
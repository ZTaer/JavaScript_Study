/**
 * TODO: 实战: 观察者模式实战( 取消笔记 )
 * 
 */

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("click",()=>{          // 创建回调事件
    console.log('On test - 1');
});

myEmitter.on("click",()=>{          // 创建回调事件
    console.log('On test - 2');
});

myEmitter.emit("click");            // 促发对应事件
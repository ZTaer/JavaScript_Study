/**
 * 观察者模式实战: EventEmitter( 完成笔记 )
 *      a) 注意: 感觉像是在模拟node.js http服务模式 ( 目前已发现作用 )
 *      b) Emitter事件库:  const EventsEmitter = require('events');
 * 
 */

const EventsEmitter = require('events');

 // a) 普通实例
// const testEmitter = new EventsEmitter();         // 注意: 轻忽忘记实例化

 // b) class实例
 class TestEmitter extends EventsEmitter {
     constructor(){
         super();
     }
 };
 const testEmitter = new TestEmitter();

 testEmitter.on( "eventName", () => {
     console.log('促发1~')
 } );

 // c) xxx.on(): 构建响应事件
 //     0. 来源: const EventsEmitter = require('events'); | testEmitter = new EventsEmitter();
 //     1. 模型: xxx.on( "响应事件名称", 回调函数 );
 //     2. 注意: 响应事件名称 === 促发事件名称, 相对应才能促发逻辑
 testEmitter.on( "eventName", ( props ) => {
     console.log('促发2~( 有入参 )', props)
 } );

 testEmitter.on( "eventName2", () => {
     console.log('响应事件名称不对应，不进行促发3~')
 } );

 // d) xxx.emit(): 构建促发事件
 //     0. 来源: const EventsEmitter = require('events'); | testEmitter = new EventsEmitter();
 //     1. 模型: xxx.emit( "促发事件名称", 入参 );
 testEmitter.emit( "eventName", { name: "我是入参", num: 123 } );
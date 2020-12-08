/**
 * 实战: 导入模块, require( 等待笔记 )
 */
 const TestExport = require("./test.class.module.exports");  
 const { addNum, killNum } = require("./test.function.exports");

 // a) 打印底层信息( 理论知识 ): 
 //     0. 我们实际上在一个，函数里进行开发，故可以直接使用一些require、exprots等
 console.log('arguments',arguments );

 // b) 打印require底层写法( 理论知识 )
 //     0. 渲染require底层写法
 //     1. '(function (exports, require, module, __filename, __dirname) { ','\n});'
 console.log('require("module").wrapper', require("module").wrapper);

 // c) module.exports调用的class: ( 使用方式 )
 const testExport = new TestExport();
 const result = testExport.addNum( 5, 10 );
 console.log('result', result);

 // d) exports调用函数: ( 使用方式 )
 console.log( 'exportsResult',
    addNum( 20, 20 ),
    killNum( 20, 20 )
 );

 // e) require奇葩使用方式 ( 使用方式 )
 console.log( 'require奇葩使用方式', 
    require("./test.function.module.exports")( 5, 5 )
);
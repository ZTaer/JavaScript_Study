/**
 * TS下函数返回数据类型设定( 完成笔记 )
 */
// 0. 设定函数return指定类型结果
// 1. void类型函数
// 2. undefind类型函数
// 3. never类型函数: 保证函数不返回任何数据,常用于throw主动造成错误的函数

 // 设定函数返回number类型
 const testDIY = ( input: number ): number => {             // 设定函数return指定类型结果
    return input;
 }

 // 函数返回void类型
    // a) 注意: 如果函数中无return语句，则ts认定函数为返回void
 const testVoid = ( input: number ): void => {
     console.log( input );
 }
 const testVoid_normal = ( input: number ) =>{              // 无return，ts认定为返回void的函数
     console.log(input);
 }

 // 函数返回undefind类型
    // a) 注意: 如果函数有return但无返回值，则ts认定函数返回undefind
 const testUndefind = ( input: number ): undefined => {
     return;
 }
 const testUndefind_normal = ( input: number ) => {         // 有return但无返回值，ts认定为返回undefind的函数
     return;
 }

 // 函数类型( 特殊点 )
 let testFunction: (a: number) => number;
 testFunction = testDIY;                                    // 因为testDIY函数符号函数设定，故不报错


 // callback函数创建
    // a) 当return在原函数中，尽管回调函数设定为void，但依然可以返回值
 const callbackFunction = ( 
     input0: number,
     input1: number,
     cb: ( num: number ) => void
  ) => {
    const result = input0 + input1;
    return cb( result );
 }
 // callback函数使用
 console.log(                     
     callbackFunction( 10,11,( e )=>{
         return e;
     } )
 );

 // never类型函数创建
     // a) never常用于：因为throw会终止程序，永远不会返回数据
 const getError = ( msg: string, code: number ): never => {
    throw{
        errorMSG: msg,
        errorNUM: code,
    };
 };
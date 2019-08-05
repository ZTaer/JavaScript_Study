

/********** 函数，接受函数 - 极为强大方便 */
//  js的函数可以接受函数
//  原因:
    // 0. 函数可以当作变量进行传递
        // 如: function a(){}; b = a;
        // 那么b()具有a的同样功能
// 目的:
    // 0. 演示接受函数的便捷性
    // 1. 实战时减少冗余代码，增加一个骚操作
    // 2. js确实灵活


// 示例
var year = [ 1998,2005,1995 ];
function cale( year,fuc ){ // 接受函数
    var result = [];
    for( var i = 0; i < year.length; i++ ){
        result[i] = fuc( year[i] ); // 注意这里，经过接受的函数处理后在加入数组
    }
    return result;
}

// 功能1: 计算年龄
function age( year ){
    return 2019 - year;
}

// 功能2: 判断是否未成年
function ifOld( year ){
    var old = age(year);
    return ( old >= 18 ?  true : false );
}

console.log( cale(year,age) ); // 输出计算后的年龄
console.log( cale(year,ifOld) ); // 输出是否未成年


/********** 函数，返回函数 - 极为强大 */
// 目的:
    // 可以根据条件灵活的变更函数，以处理不同的数据
// 返回函数的原理:
    // 其实这种返回函数的方法基于“函数表达式”构成的
    // var a = function(x);
    // 然后可以使用 a(x);

function interView( job ){
    if( job == 'running' ){
        return function( name ){
            console.log( '你的一名运动员?' + name );
        }
    }
    else if( job == 'code' ){
        return function( name ){
            console.log( name + '哈哈和我一样是玩代码的');
        }
    }
    else{
        return function( name ){
            console.log( '你到底是做什么工作的?' + name );
        }
    }
}

// 普通调用
var qa = interView( 'game' );
qa('__OO7__');

// 便捷调用:
    // 原因:
        // 0. interView('code')('ZTaer');的调用相当于匿名函数function('ZTaer'){}函数被调用;
        // 1. js是从"左到右"来处理代码的
interView( 'code' )( 'ZTaer' );
interView( 'running' )( 'OO7' );


/********** IIFF函数表达式，专门创建隐私安全的变量 */
// IIFF使用目的:
    // 0. 创建极据安全的隐私变量，不影响全局变量，又能在全局中使用，也不需要用函数去命名
    // 1. 使用IIFF创建的变量，是一个极具安全的变量
    // 2. 可以对一些敏感数据变量进行化函数处理
// IIFF原理:
    // 0. 在函数中外部无法访问函数内的变量
    // 1. ()括号内为表达式状态将直接被执行, 其实就是欺骗编译器的一种手段
    // 2. 如果无括号()那么只是对函数的声明，并不会被执行
// IIFF原型:
    // ( function(x){} )(x);

( function( money ){
    console.log( money + 999 );
})( 1 ); // 直接被执行输出
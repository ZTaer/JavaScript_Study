

/********** 函数，接受函数 - 极为强大方便 
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
*/

/********** 函数，返回函数 - 极为强大 
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

*/


/********** IIFF函数表达式，专门创建隐私安全的变量 
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

*/


/********** 闭包 - 理解闭包,将能成为一个非常非常厉害的javascript的开发人员,而现在我已经掌握 
// 原因:
    // 0. 函数在调用后，正常情况下,局部变量应在内存中清空
    // 1. 但是在某些情况，如函数返回函数时，前函数"未闭包"他的局部变量依然在内存中，可以访问.
    // 2. 我们利用这一特性，从而创造出更加便利的函数来使用
    // 3. 至于"闭包"这不用担心，js将自动闭包 
// 目的:
    // 1. 就是在返回函数的过程种调用前函数的变量来借用,以达到类似于“返回函数”便利的效果
    // 2. 闭包特性利用的目的在于便捷性

// 如下案列:

function iv( name ){
    return function( job ){ // iv返回函数后，我们依然可以调用局部变量name值，此时就是未闭包
        if( job == 'designer' ){
            console.log( name + ' explain what UX design is ?' );
        }
        else if( job == 'teacher' ){
            console.log( 'what sbject do you teach ' + name + ' ?' );
        }
        else{
            console.log('hello ' + name + ' what do you do?');
        }
    }
}

iv('ZTaer')('designer'); // 其实这里利用时，函数返回函数的调用方式( js中函数是可以当一个变量来赋值的 )
iv('ZHAO')('code');
*/

/********* 函数的预设参数实验( 可行 ) 
function a( name = 'zhao', age = '19' ){
    console.log(name,age);
}
a();
a( 'li','21' );

*/

/********** .call()方法借用,函数替换  
    // 原理:
        // 创建一个副本来进行操作

    // 0. 方法引用
        // a) a.cale.call(b,x,y...); 模板
        // b) call前为借用的方法，call的第一个参数为目标变量，其它为方法需要的参数
    // 1. 函数替换( 感觉并不常用 )
        // a) test1.call(test2,x...); 模板
        // b) 借用test1函数,相当于test1(x);

// 0. 方法引用
var john = {
    name:'john',
    age:12,
    cale: function( size ){
        console.log( this.name +  ' - ' +  this.age +  ' - ' + size );
    }
}

var zhao = {
    name:'zhao',
    age:23
}

john.cale( 'young' );
john.cale.call(zhao,'old'); // 二对象之间引用方法，此时zhao对象引用john的方法

// 1. 函数替换
function test1( x ){
    console.log( x-100 );
}
function test2( x ){
    console.log( x+100 );
}

test1(50);
test2.call( test1,50 ); // 借用test2函数
*/
/*********** .apply()方法借用，功能于call()相同，只是传输参数的方法不同 
john.cale.apply( zhao,['old'] ); // 用数组传输参数,其它功能于call一样
*/

/*********** .bind()方法借用，预设参数，返回函数 */
    // 注意:
        // bind()返回的是一个函数( 复制一个副本 )
    // 功能:
        // 借用方法: var test = john.cale.bind( zhao,'big' ); // 返回的为一个函数
        // 预设参数: test('code') // 因为有一个变量为预设参数，所以这里传输一个即可
        // 返回一个复制的副本函数,以便后续使用
var john = {
    name:'john',
    age:12,
    cale: function( size,job ){
        console.log( this.name +  ' - ' +  this.age +  ' - ' + size + ' ' + job );
    }
}

var zhao = {
    name:'zhao',
    age:23
}

var bindTest =  john.cale.bind( zhao,'big' ); // bind()具有借用方法功能，预设参数功能，返回的是一个函数
bindTest('code');
// 或者
john.cale.bind( zhao,'big' )('code');


// 模块结构化预算项目
// 安全，独立，闭包特性的利用

// 数据处理模块
var dataModule = ( function(){

    function add( x,y ){
        return x+y;
    }

    // 返回一个对象,相当于dataModule = { 对象内容 };这样用户只能访问我们开放的功能,利用IIFF( 闭包特性 )
    return {
        publicAdd: function( x,y ){
            return add( x,y );
        }        
    }

} )()

// ui界面处理模块
var uiModule = ( function(){

    return{

    }

} )()

// 主空模块( 与模块建立联系,使用函数传递参数的方式，这样可以在函数内部修改模块名称，方便操作 - 不建议使用模块名称直接引用功能，这样会使代码阅读性大大降低 )
var controlModule = ( function( data,ui ){
    var show = data.publicAdd( 100,150 );
    return{
        displayTest: function(){
            console.log( show );
        }
    }
} )( dataModule,uiModule )

controlModule.displayTest();



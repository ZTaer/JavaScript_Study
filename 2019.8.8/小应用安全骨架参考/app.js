// 模块结构化预算项目
// 安全，独立，闭包特性的利用
// 不受外部变量影响

/************ 数据处理模块-BGN  */
var dataModule = ( function(){

    /*** 功能 */
    var add = function( x,y ){ // 为了安全用局部变量创建函数
        return x+y;
    }

    return{
        publickAdd: function( x,y ){ // 创建API接口功能
            return add(x,y);
        }

    }

} )()

/************ 数据处理模块-END  */

/************ ui界面处理模块-BGN  */
var uiModule = ( function(){

    return{

    }

} )()
/************ ui界面处理模块-END  */


/************ 主空模块-BGN  */
// 主空模块( 与模块建立联系,使用函数传递参数的方式，这样可以在函数内部修改模块名称，方便操作 - 不建议使用模块名称直接引用功能，这样会使代码阅读性大大降低 )
var controlModule = ( function( data,ui ){
    
    console.log( data.publickAdd(5,5) ); // 访问API接口功能
    
    
    return{

    }

} )( dataModule,uiModule )
/************ 主空模块-END  */




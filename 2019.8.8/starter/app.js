
// 模块结构化预算项目
// 安全，独立，闭包特性的利用

/************ 数据处理模块-BGN  */
var dataModule = ( function(){

    // 收入蓝图
    var Expense = function( id,doc,value ){
        this.id = id;
        this.doc = doc;
        this.value = value; 
    };

    // 支出蓝图
    var Income = function( id,doc,value ){
        this.id = id;
        this.doc = doc;
        this.value = value; 
    };

    // 非常非常结构化的数据存储模式
    var data = {

        allItems:{
            exp: [],
            icn: []
        }

        totals: {
            exp:0,
            icn:0
        }

    }

    return{

    }

} )()

/************ 数据处理模块-END  */

/************ ui界面处理模块-BGN  */
var uiModule = ( function(){

    // 抓取需要的标签，并开放
    var DOM_strings = {
        addType:'.add__type',
        addDescroption:'.add__description',
        addValue: '.add__value',
        addBtn: '.add__btn'
    };

    return{
        pubGetDOM: function(){
            return DOM_strings; 
        },

        // 保持及时性
        pubGetInput: function(){
            return{
                iType: document.querySelector( DOM_strings.addType ).value,
                iDoc: document.querySelector( DOM_strings.addDescroption ).value,
                iValue: document.querySelector( DOM_strings.addValue ).value
            }
        }

    }

} )()
/************ ui界面处理模块-END  */


/************ 主空模块-BGN  */
// 主空模块( 与模块建立联系,使用函数传递参数的方式，这样可以在函数内部修改模块名称，方便操作 - 不建议使用模块名称直接引用功能，这样会使代码阅读性大大降低 )
var controlModule = ( function( data,ui ){

    // 获取class,输入值
    var getDOM = ui.pubGetDOM();

    // 添加预算
    var control_add_items = function(){
        // 思路:
            // 0. 获取输入信息
            var input = ui.pubGetInput(); // 直接调用ui的接口也是保持及时性
            console.log(input);
            // 1. 添加预算到对应栏目
            // 2. 显示到UI
            // 3. 计算预算
            // 4. 显示计算结果到UI
    };

    // 创建初始化函数( 目的是结构化监听,方便更多管理 )
    var setupEventLiteners = function(){
        // 监听"确让按钮"
        document.querySelector('.add__btn').addEventListener( 'click', function(){
            control_add_items();
        });


        // 监听全局"按键"并返回对象给event
        /**
         *  0. 监听返回一个对象，对象中包含一些参数可以在浏览器控制台中查看
         *  1. 故知Enter键按下返回值为event.keyCode:13;
         *  2. event.which:13;为老旧的浏览器准备，同样存在与返回的对象中
         */
        document.addEventListener('keypress',function(event){
            if( event.keyCode == 13 || event.which == 13 ){
                control_add_items();
            }
        });

    }
    
    return{
        init: function(){
            return setupEventLiteners();
        }
    }

} )( dataModule,uiModule )
/************ 主空模块-END  */

controlModule.init();




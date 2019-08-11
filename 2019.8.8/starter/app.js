
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
            inc: [],
            exp: []
        },

        totals: {
            inc:0,
            exp:0
        }

    }


    return{

        // 添加预算API
        addItems: function( type,doc,value ){
            var ID,long,newsItems;
            
            // 生成ID，以长度单位为ID( 0~x )
            if ( data.allItems[type].length == 0 ){
                ID = 0;
            }
            else{
                long = data.allItems[type].length; // 已存储数据数
                ID = data.allItems[type][ long - 1 ].id + 1; 
            }

            // 用户数据整理为对象,并加入相应分类中
            if(type == 'exp'){
                newsItems = new Expense(ID,doc,value);
            }
            else if( type = 'inc' ){
                newsItems = new Income(ID,doc,value);
            }
            data.allItems[type].push( newsItems );

            return newsItems;
            
        },

        // 显示当前存储的预算API
        printItems:function(){
            console.log(data);
        },

        // 总计API
        totalItems: function(){
            var totalList = function( list ){
                var result = 0;
                for ( var i=0; i<list.length; i++ ){
                    result += parseFloat(list[i].value);
                }
                return result;
            }
            // 计算总收入/支出
            data.totals.inc = totalList( data.allItems.inc );
            data.totals.exp = totalList( data.allItems.exp );
            // 开放总收入/支出
            return [data.totals.inc, data.totals.exp];

        }
        
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
        addBtn: '.add__btn',
        chooseIncomeList: '.income__list',
        chooseExpensesList: '.expenses__list'

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
        },

        add_ui_items: function( itype,obj,totalsInc ){
            // 创建预算HTML模板
            var html,choose;
            // 引用HTML给变量时，不能有空格间隙,并要以字符串的形式引用( 笔记未完成 )
            if( itype == 'inc' ){
                choose = DOM_strings.chooseIncomeList;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%doc%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if( itype == 'exp' ){
                choose = DOM_strings.chooseExpensesList;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%doc%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">%pic%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // 更换HTML中内容( 笔记未完成 )
            newsHtml = html.replace('%id%',obj.id);
            newsHtml = newsHtml.replace('%doc%',obj.doc);
            newsHtml = newsHtml.replace('%value%',obj.value);
            newsHtml = newsHtml.replace('%pic%', ( parseInt((obj.value/totalsInc)*(10**2)) + '%') ); // 计算支出所占百分比

            // 插入HTML到前端( 笔记未完成 )
            document.querySelector(choose).insertAdjacentHTML('beforeend',newsHtml);


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

        var input,addItems,totalItems,printItems;
        // 思路:
            // 0. 获取输入信息
            input = ui.pubGetInput(); // 直接调用ui的接口也是保持及时性
            // 1. 添加预算到对应栏目
            addItems = data.addItems( input.iType, input.iDoc, input.iValue );
            totalItems = data.totalItems();
            printItems  = data.printItems();
            // 2. 显示到UI
            add_ui_items = ui.add_ui_items( input.iType,addItems,totalItems[0] ); // 符号类型，新添加的obj,总计收入
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




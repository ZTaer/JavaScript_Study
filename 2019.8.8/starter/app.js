
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

    // 计算总数
    var totalList = function( list ){
        var result = 0;
        for ( var i=0; i<list.length; i++ ){
            result += parseFloat(list[i].value);
        }
        return result;
    }

    // 计算百分比
    var calcPercentage = function( top,bottom ){
        var result;
        if( bottom !== 0 ){
           result = Math.round( (top/bottom)*(10**2) );
        }
        else{
            result = -1;
        }
        return result;
    }

    // 非常非常结构化的数据存储模式
    var data = {

        allItems:{
            inc: [],
            exp: []
        },

        totals: {
            inc:0,
            exp:0
        },

        balance: 0,
        percentage: -1

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

        // 计算百分比API
        calcPercentage:function( top,bottom ){
            return calcPercentage(top,bottom);
        },

        // 计算预算
        calcBudget: function(){
            // 计算收入/支出总和
            data.totals.inc = totalList( data.allItems.inc );
            data.totals.exp = totalList( data.allItems.exp );

            // 计算余额
            data.balance = data.totals.inc - data.totals.exp;

            // 计算收入百分比
            data.percentage = calcPercentage( data.totals.exp,data.totals.inc );

        },

        // 返回计算预算结果API
        calcBudgetResult: function(){
            return {
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                balance: data.balance,
                per: data.percentage
            }
        },

        // 删除指定数据
        deleteItems: function( itype, ID ){

            //array.map() 遍历数组元素，并进化函数处理，处理完则返回一个新的数组( 未完成笔记 )
            /**
             * 0.默认会返回3个参数，数组元素为必须，其它2个为可选
             *  array.map( function( 数组元素,索引值,当前数组 ){} );
             * 1. 遍历完数组元素后，进行函数处理，处理完则返回一个新的数组，
             * 2. 排序保持不变,且不会改变原数组
             * */
            ids = data.allItems[ itype ].map( function( current ){ // 通过map函数获取数组的id值
                return current.id;
            } );
            
            indexID = ids.indexOf(ID) // 利用map返回数组排序不变，配合indexOf判断目标索引值

            // 既然有索引值，在利用splice()修改数组 ( 未完成笔记 )
            // array.splice()添加/删除数组( 注意，会直接影响原数组 )
            /***
             * 0. array.splice( 目标索引值，删除数量，添加的元素0,添加的元素1.... );
             *      a) 注意splice将直接改变原数组内容，无需赋值操作
             *      b) 将返回删除的数组
             * 1. 删除:
             *      返回删除的数组，且原数组也将改变
             *      var fruits = ["Banana", "Orange", "Apple", "Mango"];
             *      fruits.splice(2,2); // Banana,Orange
             * 2. 添加:
             *      var fruits = ["Banana", "Orange", "Apple", "Mango"];
	         *      fruits.splice(2,0,"Lemon","Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango
             * 3. 替换添加:
             *      fruits.splice(2,1,"Lemon","Kiwi"); // Banana,Orange,Lemon,Kiwi,Mango
             *      
             */
            if( indexID !== -1 ){
                data.allItems[itype].splice( indexID,1 ); // 删除数组内容
            
            } 
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
        chooseExpensesList: '.expenses__list',
        budGetValue: '.budget__value',
        budGetIncomeValue: '.budget__income--value',
        budGetExpensesValue: '.budget__expenses--value',
        budGetExpensesPercentage: '.budget__expenses--percentage',
        container: '.container'
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

        add_ui_items: function( itype,obj ){
            // 创建预算HTML模板
            var html,choose;
            // 引用HTML给变量时，不能有空格间隙,并要以字符串的形式引用( 完成 )
            if( itype == 'inc' ){
                choose = DOM_strings.chooseIncomeList;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%doc%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if( itype == 'exp' ){
                choose = DOM_strings.chooseExpensesList;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%doc%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">%pic%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // 更换HTML中内容( 完成 )
            newsHtml = html.replace('%id%',obj.id);
            newsHtml = newsHtml.replace('%doc%',obj.doc);
            newsHtml = newsHtml.replace('%value%',obj.value);
            // newsHtml = newsHtml.replace('%pic%', ( calcPercentage( obj.value,totalsInc ) + '%') ); // 计算支出所占百分比

            // 插入HTML到前端( 完成 )
            document.querySelector(choose).insertAdjacentHTML('beforeend',newsHtml);
        },        

        clearInput: function(){

            // .querySelectorAll( )选中所有元素，返回NodeList对象( 完成 )
            /**
             * 0. 选中指定所有元素，并返回一个NodeList对象,对象中包括标签中所有被选中的元素( NodeList包含所有的CSS样式 )
             * 1. 小技巧:
             *      a) .querySelectorAll('p').length 可以查看有多少元素
             *      b) 因为返回的是一个对象，对象中包括所有被选中的元素，所以需要迭代出所有元素进行操作
             *      c) 但是如果想精确的选中元素进化操作，则需要转换为数组进行操作，因为objct类型数据为无序，数组为有序
             * 2. 转换数组:
             *      a) 借用数组的slice函数: Array.prototype.slice
             *      b) 使用call()借用方法: Array.prototype.slice.call(example)即可返回一个数组; 
             */  
            var input = document.querySelectorAll(DOM_strings.addDescroption + ',' + DOM_strings.addValue);
            input = Array.prototype.slice.call(input);

            // .forEach()方法用于调用数组的每个元素，并将元素传递给回调函数。( 完成 )
            /**
             * 0. forEach()默认会返回给函数3个元素
             * 1.  array.forEach(function(currentValue, index, array), thisValue)
             *      a) currentValue: 当前元素
             *      b) index: 当前元素索引值
             *      c) array: 当前所属数组对象
             * 2. 在函数中操控元素
             */
            input.forEach( function( item,index,array ){
                item.value = "";
            } );

            // .focus()成为焦点元素( 完成 )
            input[0].focus();
        },

        displayBudget: function( obj ){
            console.log(obj);

            document.querySelector( DOM_strings.budGetValue ).textContent = obj.balance;
            document.querySelector( DOM_strings.budGetIncomeValue ).textContent = obj.totalInc;
            document.querySelector( DOM_strings.budGetExpensesValue ).textContent = obj.totalExp;
            if( obj.totalInc > 0 ){  
                document.querySelector( DOM_strings.budGetExpensesPercentage ).textContent = obj.per;
            }
            else{
                document.querySelector( DOM_strings.budGetExpensesPercentage ).textContent = '---';
            }

        },

        deleteItems:function( targetID ){
            // 目标父类.removeChild( 目标子类 ) 删除子标签( 完成笔记 )
            target = document.getElementById( targetID );
            target.parentNode.removeChild( target ); 
        }

    }

} )()
/************ ui界面处理模块-END  */


/************ 主空模块-BGN  */
// 主空模块( 与模块建立联系,使用函数传递参数的方式，这样可以在函数内部修改模块名称，方便操作 - 不建议使用模块名称直接引用功能，这样会使代码阅读性大大降低 )
var controlModule = ( function( data,ui ){

    // 获取class,输入值
    var getDOM = ui.pubGetDOM();

    // 上传预算
    var updateBudget = function(){
        // 1. 计算预算
        data.calcBudget();
        // 3. 返回预算
        var budGet =  data.calcBudgetResult();

        // 2. 显示计算结果到UI     
        ui.displayBudget( budGet );
    };

    // 添加项目
    var control_add_items = function(){

        var input,addItems,totalItems,printItems;
        // 思路:

            // 0. 获取输入信息
            input = ui.pubGetInput(); // 直接调用ui的接口也是保持及时性

        if( input.iDoc !== "" && ( !isNaN( input.iValue ) && input.iValue > 0 ) ){ // 保证用户输入规定的值
            // 1. 添加预算到对应栏目
            addItems = data.addItems( input.iType, input.iDoc, input.iValue );
            printItems  = data.printItems();
            // 2. 显示到UI
            add_ui_items = ui.add_ui_items( input.iType,addItems); // 符号类型，新添加的obj,总计收入
            ui.clearInput();
            // 3. 计算预算
            updateBudget();
            
        }
            
    };

    // 删除项目
    var control_delete_items = function( event ){

        // 以下参数可以在prototype控制台中查看  ( 未完成笔记 )
        // .target: 获取当前标签
        // .parentNode: 获取父类标签
        // .id 获取标签id
        var itemsID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if( itemsID ){
            var splitID,itype,ID;
            
            // .split('x')指定符号,切割字符串并返回数组( 未完成笔记 )
            splitID = itemsID.split('-');
            itype = splitID[0];
            ID = parseInt( splitID[1] );

            // 删除预算数据结构中的存储值
            data.deleteItems( itype,ID );

            // 删除预算UI显示
            ui.deleteItems( itemsID );

            // 重新计算预算
            updateBudget();
        }

    }

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

        // 监听删除按钮 
        document.querySelector(getDOM.container).addEventListener( 'click', control_delete_items );

    }
    
    return{
        init: function(){
            console.log('开始');
            ui.displayBudget({
                totalInc: 0,
                totalExp: 0,
                balance: 0,
                per: -1
            });
            setupEventLiteners();
        }
    }

} )( dataModule,uiModule )
/************ 主空模块-END  */

controlModule.init();




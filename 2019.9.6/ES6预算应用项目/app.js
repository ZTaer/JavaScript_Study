// ES5 -> ES6: 2019.9.6

/********** 数据处理模块 */
let dataMod = ( function(){

    // 总收入,总支出,总百分比,余额
    // 单个项目:
        // 备注,金额大小,类型,ID,所占百分比

    let data = {
        allItems:{
            inc: [],
            exp: [],
        },

        totals:{
            inc:0,
            exp:0,
        },

        balance:0,
        percentage:-1,

    }

} )()

/********** UI交互模块 */
let uiMod = ( function(){

    const domString = {
        budgetValue : '.budget__value',
        budgetIncomeValue : '.budget__income--value',
        budgetExpensesValue : '.budget__expenses--value',
        bubudgetExpensesPercentage : 'budget__expenses--percentage',

        addType : '.add__type',
        addDescription : '.add__description',
        addValue : '.add__value',
        addBtn : '.add__btn',

        incomeList : '.income__list',
        expensesList : '.expenses__list',

        container : '.container',
        itemDelete : 'item__delete',
    };

    return {
        getDomString: () => domString,

    }

} )() 


/********** 程序主控模块 */
let mainMod = ( function( data,ui ){

    const Dom = ui.getDomString();

    // 0. 添加项目
    let addItems = function(){
        // 数据处理:
            // 获取,类型,备注,金额 - 并单个项目存储到data中
                // 单个项目存储: 选泽加入对应项目,ID,备注,金额,所占百分比( 当前金额/总收入 )
            // 计算预算, 总收入, 总支出, 余额, 总百分比 - 并存储到data中
        // 界面显示:
            // 显示单个项目到对应UI界面
            // 显示总预算到UI界面
    }

    // 监听
    let addEventListenerItems = function(){
        
        // 0. 添加项目
        document.querySelector( Dom.addBtn ).addEventListener('click', () => {
            addItems();
        } );

        // 1. 删除项目

    }


} )( dataMod, uiMod )
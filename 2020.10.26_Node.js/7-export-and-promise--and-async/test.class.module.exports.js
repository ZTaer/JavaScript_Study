/**
 * 实战: module.exports导出模块 ( 完成笔记 )
 *      0. module.exports非匿名导出方式
 *      1. module.exports匿名导出方式
 *      2. module.exports不仅仅可以导出class，也可以导出funciton
 */

// a) module.exports非匿名导出方式
class TestExport { 
    constructor(){
    }

    addNum = ( input1, input2 ) => {
        return input1 + input2;
    }
}
module.exports = TestExport;

// b) module.exports匿名导出方式
module.exports = class TestExport2 {
    constructor(){
    }

    addNum = ( input1, input2 ) => {
        return input1 + input2;
    }
}


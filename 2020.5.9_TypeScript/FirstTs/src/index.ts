
console.log(' hello typescript ');
/**
 * TypeScript基础( 完成笔记 ) 
 */
// a) 编译文件: tsc xx.js
// b) ts默认数据类型
    // 0. 数据类型的应用到，创建函数/变量/对象/数组/枚举类型等...
// d) enum: 枚举类型的使用
// e) 联合类型: (string|number)联合类型的使用

// ts规定参数类型，不符合参数类型将报错
    // a) number: 数字
    // b) string: 字符串
    // c) boolean: 布尔类型
    // d) object,{}: 对象
        // 0. 实列: 
            // a) 设定数据类型: const xx : { name: string; age: number } = { name: 'zt', age: 19 };
            // b) 正常使用: const xx = { name:'xx' } 
            // c) 注意：无需设定默认数据类型，ts会根据初始值自己判定
        // 1. 注意: 注意对象类型标注内容类型，并且";"进行分割
    // e) 规定参数类型意义：
        // 0. 当执行一些不合理的操作时，将提前提醒你错误
            // a) 比如: const a = 'xxxx'; a.map(); 那么将报错，因为ts已经认定a为字符串类型而非数组;

// 创建函数
const addNumber = ( num1: number, num2: number ) => {
    return num1 + num2;
}
const addString = ( num1: string, num2: string, showResult: boolean ) => {
    return num1 + num2;
}

// 创建变量
const test = 1;                                // 无需设定默认数据类型，ts会根据初始值自己判定

// 创建对象
const testObj1: {
    name: string;
    age: number;
} = {                     
    name: 'zt',
    age: 19
};

const testObj2 = {                             // 无需设定默认数据类型，ts会根据初始值自己判定 
    name: 'zt',
    age: 19
};
console.log( testObj1.name );

// 创建数组
let testArray: any[] = [ 123,'xx' ];           // 混合类型数组，对存储数据类型无要求
let testArrayString: string[] = ['xxx','yyy']; // 数组只能存储字符串类型
    // 数组的混合存储:
        // 注意: 正常情况下，无需设定默认数据类型，ts会根据初始值自己判定 
    let testArrayNumberString: [number,string] = [1,'test']; // 对应参数类型: 只能这么存储，不符合将报错
    let testArraySN: (string|number)[] = [1,'2',123,'xxx'];  // 多种类型混合存储: 只允许数字以及字符串类型存储

// 创建枚举类型
    // a) 存储: 数值类型，字符串类型, 其它类型都不支持
    // b) 只读: 其存储内容为只读，不可修改
    // c) 用途: 用于代替，多个const创建变量, 方便调用，要求数据只读不可修改
let tt = 123;
enum TestEnum {                                 // 生成: 正常的对象
    ADMIN="admin",
    READ_ONLY = 'test',
    AUTHOR = "AUTHOR",
};
enum TestEnumIndexString{                       // 注意：自动枚举索引值，从0开始
    a,                                          // 生成: { 0: 'a', 1: 'b', 2: 'c', a=0, b=1, c=2 }
    b,
    c
}
enum TestEnumIndexNumber{                       // 注意: 自动枚举索引值，从3开始
    a=3,                                        // 生成: { 3: 'a', 4: 'b', 5: 'c', a=3, b=4, c=5 }
    b,
    c,
}

const per = {
    role: TestEnum.ADMIN
}

if( per.role === TestEnum.AUTHOR ){
    console.log('success');
}else{
    console.log( per.role, TestEnum.AUTHOR );
    console.log( TestEnum );
    console.log( TestEnumIndexString );
    console.log( TestEnumIndexNumber );
}
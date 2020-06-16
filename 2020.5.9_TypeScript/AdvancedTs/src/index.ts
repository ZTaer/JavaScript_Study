console.log('---start---');

/**
 * ts高级用法
 */

 /* type: “&"合并符号( 完成笔记 ) */
 // 情况一: type为对象时，相当于二者对象要求合并
 // 情况二: type为单个变量时, 相当于二者，交集

 // 情况一: 合并
type TestA = {
    name: string,
    age: number,
}
type TestB = {
    name: string,
    addr: string,
    time: Date
}
type TestAnd = TestA & TestB;
const testInput: TestAnd = {
    name: 'zt',
    age: 19,
    addr: 'xxx',
    time: new Date()
}
console.log(testInput);

// 情况二: 交集
type TestC = string | number;
type TestD = string | boolean;
type TestAndCD = TestC & TestD; // 相当于交集: type TestAndCD = string;
const TestInputCD: TestAndCD = '交集';

/* interface多个合并方式( 完成笔记 ) */
// extends:  interface InterfaceAnd extends InterfaceTestA, InterfaceTestB{};
interface InterfaceTestA {
    name: string,
    age: number,
    time: Date,
}
interface InterfaceTestB{
    addr: string
}
interface InterfaceAnd extends InterfaceTestA, InterfaceTestB{}; // 多个interface合并核心
const interfaceInput: InterfaceAnd = {
    name: '007',
    age: 19,
    time: new Date,
    addr: 'xxxxxx'
}

/* "|" 符号的使用( 完成笔记 ) */
// 模型: type xxx = yyy | ccc; 
// 使用: 在函数中，可以通过判断其类型进行对应类型赋值。如果没有判断类型则将无法正常使用
interface bired {
    type: 'bired',
    flaySpeed: number
}

interface car {
    type: 'car',
    runSpeed: number
}

type orTest = bired | car;                      // "|"符号核心

const functionOrTest = ( props: orTest ) => {
    let speed: number;
    switch( props.type ){                       // 函数中，必须要有类型判断，否则将无法正常使用
        case "bired":
            speed = props.flaySpeed;
            break;
        case "car":
            speed = props.runSpeed;
            break;
    }
    console.log(`${props.type} - SPEED: ${speed}`);
};

functionOrTest( { type: 'car', runSpeed: 666 } );

/* ts: 在ts中document正确的使用方法，防止报错( 完成笔记 ) */
/* ts: as类型转换,非常重要且常用( 完成笔记 ) */
    // a) 目的: 声明doucument抓取标签的类型，防止ts报错
        // 0. 方法一: <HTMLInputElement>
        // 1. 方法二: as HTMLInputElement, "as"告诉ts此乃document抓取的标签类型
    // b) "as" 在ts中是类型转换功能
// 方法一:
const buttonA = <HTMLInputElement>document.querySelector("#testInput")!;
buttonA.value = 'xxx';

// 方法二: "as"告诉ts此乃document抓取的标签类型, 否则将报错
const buttonB = document.querySelector("#testInput")! as HTMLInputElement;
buttonB.value = 'yyy';

/* interface不确定属性名称构建( 完成笔记 ) */
// [xxx:string]可以是任意属性名称
interface testNameBuild {
    [propsName: string]: string,    // 核心,与ES6使用方法相同{ [xxx]: yyy }
}

const testName: testNameBuild = {
    email: 'xxx@gmail.com',
    addr: 'xxxxx',
}

/* 函数重载：告诉ts什么样的赋值给什么样的类型结果( 完成笔记 ) */
    // a) 目的: 告诉ts函数什么样的赋值给什么样的类型结果，防止加工函数然后值时报错
function testLoadFunction ( a: string, b: string ): string;             // 函数重载
function testLoadFunction ( a: number, b: number ): number;             // 函数重载
function testLoadFunction ( a: number | string, b: number | string ) {  // 原始函数
    if( typeof a === 'string' || typeof b === 'string' ){
        return a.toString() + b.toString();
    }
    return a+b;
}
const result = testLoadFunction( 'ztaetr','xxx' );
result.split('r')                                                       // 报错: 如果没有"函数重载"，那么将报错

/* "?"可选符号( 完成笔记 ) */
    // a) 函数中: 告诉ts为可选参数
    // b) 索引变量中: 告诉ts我也不知是否能索引成功
    // c) 目的: 告诉ts不要因为不确定变量来报错
const axiosUserDate = {
    id: 'xxx',
    name: 'zt',
    // job: { title: 'ceo', des: 'testxxx' }
}
console.log(
    axiosUserDate?.job?.title                // "?": 保证索引数据不存在js也能正常运行，并返回undefind，但ts会提示错误
);

// "??"双重可选符
    // a) 目的: 给变量备用数据
    // b) xx ?? bb: 如果xx数据为真，则返回真实数据，否则返回bb准备好的数据;
    // c) 特殊点: ''空字符串也会被??视为真
const testInputDate = '';
const getDate = testInputDate ?? '备用数据';   // 备用数据
console.log(
   getDate
);
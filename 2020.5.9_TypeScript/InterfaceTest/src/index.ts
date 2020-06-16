console.log( '--- start ---' );

/* interface 设定接口,设定对象模板( 完成笔记 ) */
/* implements使class可以使用interface对象模板 */
// 0. 目的：定义好对象结构，然后将其用于变量设定为类型, 增加程序的可读性
// 1. 注意: 
    // a) interface只能使用于ts中
    // b) 并且interface变量开头大写
    // c) 类似于public,private等是无法使用的, readonly是可以使用的
// 2. 使用:
    // a) let/const: 可以使用到普通变量
    // b) class: 可以通过implements使用interface模板对象
// 3. 扩展接口: interface支持extends继承创建
// 4. 函数接口
// 5. 可选属性: "xxx?: xxx": 可选属性，ts专属

// interface模板构建
interface Exp {
    tel: number
}

// interface可以继承
interface Person extends Exp {
    name: string;
    age: number;
    show: ( text: string ) => void;
    outputName?: string;                           // "xxx?: xxx": 可选属性，ts专属( 完成笔记 )
}

// class使用对象模板构建
class TestImplements implements Person {
    name= '007';
    age=19;
    tel=110;

    constructor( nameProps?: string ){             // "xxx?: xxx": class传入属性可选  
        nameProps ? this.name = nameProps : null;
    }

    show = ( text: string ) => {
        console.log(`${text}: ${userOne.name}`);
    }
}

// let/const变量使用对象模板构建及使用
let userOne: Person;                                // 变量设定为interface类型
userOne = {                                         // 按照设定类型进行构建对象, 否则将报错
    name: 'ztaer',
    age: 22,
    tel: 120,
    show: ( text:string ) => {
        console.log(`${text}: ${userOne.name}`);
    }   
}
userOne.show('名字');                               // 没什么特殊的，正常使用即可

// 注意: 同interface模板情况下可以被赋值使用
userOne = new TestImplements();                     // userOne及可以自己构建对象，也可以被赋值同模板的class
userOne.show('class使用对象模板');

// interface函数接口,函数模板构建
interface AddFun{
    ( a: number ): number;
}
const testInterfaceFunction: AddFun = ( num ) => {
    return num
}
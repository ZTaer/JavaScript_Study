console.log("---start---");

/* Generic | 通用类型 | 泛型类型( 完成笔记 ) */
    // a) 目的: 最大的用处是，使函数可以自由的传入/加工"数据"，ts不在报错
    // b) 内置通用类型函数:
    // c) 自定义通用类型函数:
    
// 内置通用类型
    // a) 数组类型: Array<类型>
const names: Array<string> = [];

/* 通用类型函数function xxx<T>( 完成笔记 ) */
    // a) <T,U>: 可以是任何类型数据
    // b) 根据命名约定，应该以单个大写字母命名
    // c) 传入各种对象数据，ts不报错
    // d) 约束类型: <T extends object>: 约束为对象类型，当然也可以约束为其它类型
        // 0. 继承属性: 在下方length实列
function merge<T extends object ,U>( objA:T , objB:U ){
    if( typeof objA == 'string' || typeof objB == 'string' ){
        return { ...objA, ...objB };
    }
}    
const mergeObject = merge({name:'zt'},{age:19});

// 通用类型函数function xxx<T>: 继承属性length, 通用类型通过extends继承某些属性，当然也可以extends约束一些数据类型 
interface LengthExtends {
    length: number
}

function testExtendsFunction<T extends LengthExtends > ( inputString: T ){  // 通用类型继承属性
    let resultDes: string = '';
    if( inputString.length === 1 ){                 // 如果没有继承属性length，将报错
        resultDes = '长度为1';
    }
    else if ( inputString.length > 1 ){
        resultDes = `长度为${inputString.length}`;
    }
    return [inputString, resultDes];
}
console.log(
    testExtendsFunction('测试')
);

/* 通用类型class xxx<T>( 完成笔记 ) */
    // a) 通用类型约束：多种类型数据约束<T extends xxx | yyy | ccc >
class TestControlArray<T extends string | number | boolean>{   
    private initArray:T[] = [];         // 注意原始数组也要为T类型
    addArrayItem = ( item: T ) => {     // 传入参数为T类型, 因为待加入数据类型与数组类型一致，才不报错
       this.initArray.push(item);
    }
    removeArrayItem = ( item: T ) => {
        const targetIndex: number = this.initArray.indexOf( item );
        if( targetIndex >= 0 ){
            this.initArray.splice( targetIndex,1 );
        }
    }
    getArrayItem = () => {
        console.log( this.initArray );
        return this.initArray;
    }
}

const testNewControlArray = new TestControlArray();
testNewControlArray.addArrayItem('123');
testNewControlArray.addArrayItem(123);
testNewControlArray.addArrayItem(false);
testNewControlArray.getArrayItem();
testNewControlArray.removeArrayItem("123");
testNewControlArray.getArrayItem();

const testNewControlArray_string = new TestControlArray<string>();  // 约束实列类型: 只能字符串操控
testNewControlArray_string.addArrayItem('xxx');
// testNewControlArray_string.addArrayItem(123); // 将报错

/* Partial< xxxx >: 告诉ts，目标将成为xxx类型，请先不要报错( 完成笔记 ) */
    // a) 原理: 参数类型变为可选
    // b) 要求输出结果xxx时：Partial< xxx >要配合as，将结果值as转换为xxx类型进行输出，否则也将报错
    // c) 无要求输出结果，则无需as转换
interface DateGoal {
    name: string,
    age: number,
    addr: string
}

// 注意: 要求输出结果为DateGoal
function testPartial ( name: string, age: number, addr: string ): DateGoal {
    let result: Partial<DateGoal> = {};     // Partial< xxxx >: 告诉ts，目标将成为xxx类型，请先不要报错
    result.name = name;
    result.age = age;
    result.addr = addr;

    return result as DateGoal;              // 输出数据时，如果报错，则使用“as转换其要求输出的类型”
}

/* Readonly<xxx> 只读类型( 完成笔记 ) */
    // a) 只读类型的数据，无法修改
const inputReadonly: Readonly<string[]> = [ 'zt', '19' ];

/* "通用类型" 与 "联合类型" 区别( 完成笔记 ) */
    // a) 通用类型：在class中或者函数中，一开始就抉择数据类型
        // 0. extends - 约束通用类型的目的:  约束允许您缩小可能在通用函数等中使用的具体类型。
    // b) 联合类型: 在class中或者函数中，一开始不能统一抉择数据类型
    // c) 通用类型更加灵活，如上方的 const testNewControlArray_string = new TestControlArray<string>(), 如果只使用联合类型是很难实现这一步的。
    // d) 何时使用通用类型: 如果您拥有一个实际上可以与其他多种可能的类型一起使用的类型（例如，发出不同类型数据的对象）- 官方语。

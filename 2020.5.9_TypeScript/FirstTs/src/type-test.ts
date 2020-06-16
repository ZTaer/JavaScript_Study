/**
 * 联合类型，文字类型，type类型别名,实验( 完成笔记 )
 */
// 目的: 提前预知错误

 type TypeNS = number | string;             // type类型别名: 通常用于，方便放入任意规定数据类型的位置;
 type TypeIsNS = 'is-number' | 'is-string';

const conbin = ( 
    input0: number | string,                // 联合类型: 只接受number/string类型数据，否则将报错
    input1: TypeNS,
    countType: 'is-number' | 'is-string'    // 文字类型: 只接受'is-number'/'is-string'字符串类型数据，否则将报错
) => {
    if( countType === 'is-number' ){
        return +input0 + +input1;
    }
    else if ( countType === 'is-string' ){
        return input0.toString() + input1.toString();
    }
    else{
        return null;
    }
}

console.log(conbin( '100', '50', 'is-number' ));

// type高级用法class类型设定，以及应用
type User = { name: string, age: number };
const testUser = ( user: User ) => {
    return user;
}

console.log(
    testUser({ name:'zt', age:19 })
);

/**
 * unknown类型,
 */

// unknown类型
    // a) 报错: 虽然可以保存各种类型的数据，但是无法赋值给其它非any类型的变量
    // b) 避免报错: 做类型判断
let testUnknown: unknown;
let testNum: number;

// 报错: 虽然可以保存各种类型的数据，但是无法赋值给其它非any类型的变量
// testUnknown = 12;
// testNum = testUnknown;  

// 类型判断: 做类型判断将不在报错
testUnknown = 12;
if( typeof testUnknown === 'number' ){
    testNum = testUnknown;
}

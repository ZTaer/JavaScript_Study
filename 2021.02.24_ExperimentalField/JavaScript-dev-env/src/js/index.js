console.log("---start---");

/**
 * Object试验场( 等待笔记 )
 *      0. Object.assign(): 合并对象
 *          a) 注意: 会改变原object
 */

// ## Object.assign(): 合并对象
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);            // expected output: Object { a: 1, b: 4, c: 5 } | 原object发生改变
console.log(returnedTarget);    // expected output: Object { a: 1, b: 4, c: 5 }

// ## Object.values(): 取对象值生成数组
const testa = {
    a: {
        aaa:1,
        bbb:2
    },
    b: 123
};

console.log('Object.values(testa.a)', Object.values(testa.a))   // [1, 2]

// ## Object.keys(): 取对象键值生成数组
const testb = {
    a: {
        aaa:1,
        bbb:2
    },
    b: 123
};

console.log('Object.values(testa.a)', Object.keys(testb.a))   // ["aaa", "bbb"]


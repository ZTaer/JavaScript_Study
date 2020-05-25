/**
 * 联合类型，文字类型，type类型别名,实验( 完成笔记 )
 */
// 目的: 提前预知错误
var conbin = function (input0, // 联合类型: 只接受number/string类型数据，否则将报错
input1, countType // 文字类型: 只接受'is-number'/'is-string'字符串类型数据，否则将报错
) {
    if (countType === 'is-number') {
        return +input0 + +input1;
    }
    else if (countType === 'is-string') {
        return input0.toString() + input1.toString();
    }
    else {
        return null;
    }
};
console.log(conbin('100', '50', 'is-number'));
var testUser = function (user) {
    return user;
};
console.log(testUser({ name: 'zt', age: 19 }));



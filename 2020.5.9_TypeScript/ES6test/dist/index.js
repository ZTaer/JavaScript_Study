"use strict";
/* 数组解构( 完成笔记 ) */
var testArray = [1, 2, 3, 4, 5, 6];
var one = testArray[0], two = testArray[1], other = testArray.slice(2); // 解构数组
console.log(other);
/* 对象解构( 完成笔记 ) */
var testObject = { userName: 'zt', age: 19 };
var outher = testObject.userName, age = testObject.age; // 解构对象,自定义名称
console.log(outher, age);
//# sourceMappingURL=index.js.map
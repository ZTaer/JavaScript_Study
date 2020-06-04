/* 数组解构( 完成笔记 ) */
const testArray = [ 1,2,3,4,5,6 ];
const [ one, two, ...other ] = testArray;           // 解构数组
console.log( other );

/* 对象解构( 完成笔记 ) */
const testObject = { userName: 'zt', age: 19 };
const { userName: outher, age } = testObject;       // 解构对象,自定义名称
console.log( outher,age );
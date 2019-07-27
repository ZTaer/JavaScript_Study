
/** 关于数组 **/

// 创建数组
var name = ['abc','sss'];
var year = new Array( '2018','2019' );

// 操控数组元素,添加数组元素,删除数组元素,确定数组元素位置
year[ year.length ]  = '2020'; // 在末尾添加元素,length可以确定数组中的数量
year.push('8848'); // 在末尾添加
year.unshift( 'ztaer' ); //  在开头添加元素
console.log(year);

year.pop(); // 删除末尾元素
year.shift(); //  删除开头元素
console.log(year);

console.log( year.indexOf('2019') ); //  确定元素位置，如果数组中无目标元素,则返回"数字类型-1"



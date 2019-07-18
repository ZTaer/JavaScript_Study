console.log('hellow word!');

// 0. js-使用键盘输入字符串 - prompt()默认键入为string类型
var Q = prompt( 'what is his last name?' );
alert( typeof(Q) ); // 键入值为String类型
console.log( Q );

// 1. 大于小于符号演示演示
var a=1,b=2;
console.log( a>b );
console.log( typeof( a>b ) );

// 2. if 语句练习 
age = 12;

if( age<18 ){
	console.log(" 禁止访问 ");
}
else if ( age>=18 && age <30 ){
	console.log("  访问成功 ");
}
else{
	console.log(" 查无此页面 ");
}


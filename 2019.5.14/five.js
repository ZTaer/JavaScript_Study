
// 变量与作用域和内存问题
//		0. 基本类型: undefined,null,boolean,number,string 5个基本类型
//		1. 引用类型: object(),引用类型不允许直接访问内存,在操作过程中为引用访问
//      2. new Object() 创建对象

// 0. 引用类型可以被赋予属性,而非引用类型则不可以
var person = new Object(); // 引用类型
person.name = "Zhao"; 

var dog = "Li"; // 基本类型
dog.color = "pink"; // 虽然不会出错,但是确实没什么用处

alert( person.name ); // "Zhao"
alert( dog.color ); // "undefined"


// 1. 基本类型,变量复制( javascript特立独行 )

var test1 = 250;
var test2 = test1; // 在javascript中,这样已经算是复制了！！！( C语言可与它不一样 )

alert(test2); // 250
test1 = 300;  // 上放因并非指针指向,已经属于复制 
alert(test2); // 250

// 2. 引用类型,变量复制

var test3 = new Object();
test3.num = 15;

var test4 = test3; // 其实并没有真正的复制,只是指针指向
alert(test4.num);


// 3. 传递参数
//		0. 按值传递( 真正的复制 )
//		1. 引用类型值传递( 指针引用 )
//		2. 参数只能'按值传递'


// 4. 按值传递与局部变量

function addnum( num ){
	num += 10; // 局部变量( 老相识，不必多解释 )
	return num;
}

var num = 10;
var result = addnum( num );

alert(num); // 10
alert(result); // 20


// 5. 伪引用类型值传递，全局变量,在局部变量的反应
//		0. 其实,全局变量可以在局部中使用，
//		1. 但是局部变量不可以在全局使用,函数一旦结束执行，局部变量也会立刻销毁

function setName( obj ){
	obj.name = "TENG"; // 函数的局部环境可以使用'全局变量'
	obj = new Object(); // 其实创建的是局部变量
	obj.name = "TTTT"; // 因为局部变量，在函数结束执行后会立刻销毁
}
var obj = new Object();
setName(obj);
alert(obj.name); // "TENG"


// 6. 检测,引用类型/基本类型
//	0. instanceof 专门用来检测引用类型,能精确到引用类型什么形式
//	1. 引用类型返回true
//	2. 基本类型返回false

var test5 = new Object();
var test6 = 15;
var test7;

alert( test5 instanceof Object ) // true
alert( test6 instanceof Object ) // false
alert( test7 instanceof Array ) // false



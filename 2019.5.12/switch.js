
// 关于switch的用法
//	1. js的switch于c的功能用法几乎差不多,
//	   唯一的不不同点在于,它可以判断,更多的数据类型
//	2. 可以代替多个if else if判断
//	3. 二个case之间如果不写break一定要写注释
//	4. switch使用的===全等符判断，所以不会转换数据类型( 我喜欢 )

var test = "233";
var test2 = 233;

switch( 123 ){
	case "123":
		alert("123");
		// 这里故意不写break
	case test2: // 支持多种类型判断,甚至是变量
		alert(test2);
		break
	default: // 经证实,default没有break依然会往下执行
		alert( "都没有" ); 
	case "233":
		alert(test);
		break
}

// 关于函数的用法
//  1. 老朋友不多解释
//  2. 要么有返回值，要么不写返回值

function abs( name,mes ){
	alert(name+mes);
	return false;
}

abs("zhao","233");


// 函数的参数调用
//	1. js因为没有函数签名,所以重载,只能进行模仿,
//	   如检测传入的参数数量,进行判断执行
//	2. 其实这些插入的参数是以数组形式传送的,所以即使超出所需值，也可以通过arguments调用
//	3. 非严格模式下,通过arguments数组可以改变参数,严格模式下将无法改变,默认值为undefined
//

function argu( name,phone){
	alert( arguments[0]+arguments[1] ); // 索引对应验证
	arguments[2] = "OK!"; // 非严格模式甚至可以改变传入的参数 
	alert(arguments[2]);
	alert( arguments.length ); // 查看输入参数数量( 使用length方法测取数组长度 )
}
argu("zhao",1385,1069);

// 重载模拟
//	1. js是默认是没有重载的，不过可以模拟出来
//  2. 何为重载?
//     重载，简单说，就是函数或者方法有相同的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。

function cz( ){
	if( arguments.length == 1 ){ // 传入1个参数时调用
		alert( arguments[0]/2 );
	}
	else if( arguments.length == 2 ){ // 传入2个参数时调用
		var result;
		result = arguments[0] + arguments[1];
		alert( result );
	}
}

cz(22);
cz(22,22)


// isNaN() 判断是否为非数值,返回( 非数值为真,数值为假 )
var a = 10, b = true, c = "abv",d = "123" ;
alert(isNaN(a)); // false
alert(isNaN(b)); // false: 布尔值,可以转换为1/0
alert(isNaN(c)); // true: 字母或符号字符串,非数值
alert( isNaN(d) ); // false: 字符串数字,则也可以转换为数值


// 数值转换,Number(),parseInt(),parseFloat()
var num1 = true, num2 = null;
var str0 = "", str1 = "012", str2 = "0xa", str3 = "13abc", str4 = "abc";
var str5 = 12.3,str6 = 1.2e3;
// Number()转换数字,有很多规矩,一般不推荐使用
	// 非字符串类型
	alert(Number(num1)); // 1: 布尔类型转换为1/0
	alert(Number(num2)); // 0: null空类型返回0

	// 字符串类型
	alert(Number(str0)) // 0:空字符串返回0
	alert(Number(str1)) // 12:会忽略前数字的0
	alert(Number(str2)) // 10:会16进制值-转换- 对应的10进制值
	alert(Number(str3)) // NaN:非纯数字会认定为非数值
	alert(Number(str4)) // NaN:非数值
	alert(Number("12.5")) // 12.5:转为浮点型
// parseInt( 数据,进制类型 ) 转换为整数类型,推荐使用,更加合理化
	// 1. 无数字,都为NaN
	// 2. 开头数字解析,非数字停止解析
	// 非字符串类型
	alert(parseInt(num1)) // NaN:非数值
	alert(parseInt(num2)) // NaN

	// 字符串类型
	alert(parseInt(str0)) // NaN
	alert(parseInt(str1,10)) // 12:认定内容为10进制,忽略0,输出10进制数值
	alert(parseInt(str2,16)) // 10:认定内容为16进制-转换-10进制数值
	alert(parseInt(str3,10)) // 13:认定为10进制,开头遇到数字则继续解析,遇到非数字则停止解析,输出10进制数值
	alert(parseInt(str4)) // NaN:非数值

// parseFloat( 数据 ) 转换浮点类型
	// 1. 与parseInt()规矩差不多,只不过无指定进制参数
	alert(parseFloat(str5)) // 12.3
	alert(parseFloat(str6)) // 1200 // 科学计算法也没有问题
	




// 字面量
	// '\b': 空格
	// '\r': 回车
	// '\x': 16进制数
	// '\u': Unicode字符
var str0 = "\u03a3"; 
alert(str0);

// .length字符串长度,注意: 如果有双字节字符,长度测量会不准确
var str1 = "abc";
alert(str1.length); // 3:字符串长度数量

// 字符串相加
var str2 = "java";
str2 += "script"; // 字符串相加
alert(str2);


// 数据.toString( 指定转换进制 )方法, String( 数据 )函数,字符串转换
// toString()方法可以指定转换进制
//		1.null类型时,toString()会报错
var str3 = 10, str4 = null, str5 = true;
alert(str3.toString()); // "10":直接转字符串类型
alert(str3.toString(16)); // "a":数据-转换-为指定进制,转变为字符串类型

// String()靠谱的字符串转换,
// 他与toString()区别在与,
//		1. 没有办法指定进制转换,
//		2. 但是String()兼容性更强,他可以兼容非实数类型转换成字符串类型
alert(String(str4)); // "null":字符串类型
alert(String(str3)); // "10":直接转不解释

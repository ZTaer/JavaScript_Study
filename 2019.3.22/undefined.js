
var mes;
alert( mes );
// alert( age ); // Chrome报错


// 关于null与undefined的关系
// null为一个空指针
alert(typeof null); // 返回object对象
alert(null == undefined); // true,注意虽然他们有这个关系,但是应用方向却大不同


// 布尔类型
var mes = "hello";
alert("---")
alert( Boolean(mes) ); // Boolean()函数可以将变量转为布尔类型值
	/*
	 * 注意:布尔类型 "true/false" 不等于 "1/0"
	 * object true/任何对象 false/null
	 * undefined 无真,只与false
	 */
if( mes ){ // 可以这样使用
	alert("mes为真");
}


// Number类型
	// 关于8进制
		/*
		 * 8进制以0开头,如果超过(0~7)则变为10进制,会忽略开头的0
		 * 在严格模式下,8进制写法会报错
		 */
	var octalNum0 = 06; // 8进制,0开头
	var octalNum1 = 08; // 10进制,因为超出(0~7)

	// 关于16进制
		/*
		 * 16进制0x开头(0~9/A~F)
		 * 字母不区分大小写
		 */
	var hexNum0 = 0xA; // 16进制,0x开头
	var hexNum1 = 0xa; // 二者相同,不区分大小写


// 浮点数类型
	/*
	 * 如果点后,为0则依然认为是整数类型
	 * 特别注意: 0.1+0.2 == 0.30000000000000004 // 这是个舍入误差,很多编程语言都存在这个问题
	 * 0.12+0.3 == 0.42 // 这个到是没有问题
	 */
	var floatNum0 = 10.0; // 依然会被认定为int类型"10"
	// 不推荐写法
		var floatNum1 = 1.;
		var floatNum2 = .1;
		alert(floatNum2); // 0.1
	
	// 关于e/E计算方法
		/*
		 * e与E相同,不区分大小写
		 * 例: 3.12e4 == 3.1200.0
		 * 3.12e4 相当于: 3.12*10^4 == 3.1200.0
		 */
		var floatNum3 = 3.12e4; // 3.1200.0
		var floatNum4 = 3e-3; // 数学计算, 3*10^(-3) == 0.003
		alert( floatNum4 ); // 0,003


	
	
























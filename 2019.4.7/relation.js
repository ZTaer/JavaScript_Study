// 关系操作符( >,>=,<,<= )
	// 关系操作符返回布尔值
	// 并且拥有自动转换数据类型功能
	// 比较对象时,对象先调用valueOf()或toString()函数进行数值转换,在进行比较
	// 例:
	var a = 1,b = 2,c = '3',d = 's',e = 'A';
	a < b // true: 数值正常比较
	d > e // true: 双方是字符串时,比较ascii码值大小
	b > c // false: 数值与实数字符串比较,字符串先转为数值在进行比较
	a < d // false: 数值与非实数字符串比较,字符串转为NaN类型( 与NaN比较,无论什么情况返回false )

// toLowerCase()方法,字符串,大写转为小写形式
	alert("ABCaaa".toLowerCase()); // "abcaaa"

// 相等操作符( !=,==,===,!== )
	// 相等操作符同样返回布尔类型
	// 并且拥有,自动转换数据类型的功能( 除===,!== )
	// 注意:
	//		NaN与如何数据类型比较都返回false
	//		布尔类型会转为1/0
	// 在进行比较时强烈推荐使用===或!==( 推荐使用 )
	// 例:
	alert( "5"==5 ); // true: 自动转换类型
	alert( "5"===5 ); // false: "==="比较数值和类型是否一直,显然二数类型并不一致
	alert( "5"!=5 ); // false: 因为字符串先自动转换为数值在进行比较 
	alert( "5"!==5 ); // true: 类型不一样

// 条件操作符( 其实就是"C语言里的三元表达式" )
	var b1,b2=true;
	b1 = b2 ? 2 : 3; // 如果b2为真,2赋值给b1,否则3赋值给b1
	alert(b1); // 2

// 赋值操作符
	// 快捷写法:
	//		这种写法适用与:
	//			*=
	//			/=
	//			%=
	//			-=
	//			+=
	//			<<=
	//			<<<=
	var num = 10;
	num += 5; // num = num + 5;
	alert(num); // 15:

// 逗号操作符
	
	var a=1,b=2; // 逗号表达式可用于多给变量赋值
	var num = (1,2,3,4); // 4: 逗号表达式会将最后值赋给变量
	alert(num); // 4






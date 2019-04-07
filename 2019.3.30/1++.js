
// 一元操作符
	// 只能操作一个值,叫一元操作符
// --age/++age形式
var age = 29;
var other = --age + 2; // 先执行age = age -1; 在执行 other = age + 2; 
alert( other ); // 30
alert( age ); // 28

// age++/age--形式
age = 29;
other = age-- + 2; // 先执行 other  = age + 2; 在执行 age = age -1
alert( other );  // 31
alert( age ); // 28

// 一元操作符(++/--),javascript不严谨性计算( 个人强烈不推荐计算 )
	// 1. 字符串类型++ == 字符串转换成实数进行数值实数( 有字母或其它符号,则返回NaN类型 )
	// 2. 布尔类型++ == 会把布尔类型当成1/0进行数值计算
	// 3. 浮点型++ == 正常的数值计算,不过注意舍入BUG
	// 4. Object类型++
// 例: 
// 字符串++;
var a1 = "2";
a1++;
alert(a1); // 3: 被转成实数类型
alert(typeof a1);
// 布尔类型++
var a2 = true;
a2++;
alert(a2);
// Object类型++
var o = {
	valueOf: function(){
		return -1;
	}
}
o++;
alert(o);

// 一元加减符(+/-)说白了就是数学里的正负号
	// 1. 一样有上方一元操作符计算不严谨性
	// 2. 区别在与遇到实数时,就相当于+/-号处理
//例:
var a3 = "1";
alert(+a3); // 3:被转换成了实数
alert(typeof +a3);


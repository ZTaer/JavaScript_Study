
// 0. 函数与函数表达式 - 工作方式
// 		a) 函数与函数表达式工作方式是有区别的
//		b) 函数声明会直接存放在堆栈中，是全文可以调用，但函数表达式，必须创建之后使用

// 函数工作方式:
//		函数声明会直接存放在堆栈中，是全文可以调用，但函数表达式，必须创建之后使用
console.log( abs(5) );

function abs( x ){
	return x**2;
}

// 函数表达式工作方式:
// console.log( avg(1,2) ) // 不可用，因为“变量”影响工作方式必须按照顺序执行
var avg = function( x,y ){
	var result = ( x+y )/2;
	return result;
}

// 1. 变量工作方式
// 		a) 变量在全文中有定义但是顺序不正确，默认会赋值变量为undeifne，
//		b) 如果是全文中都没用定义, 去调用则会出现错误
console.log(s); // 虽然顺序不正确，但确实有定义此变量，所以会返回undefined
var s = 5;
// console.log(bb); // 此变量为有定义，后返回错误的信息


// 2. 关于this的细节
// 		a) 在对像中，this默认无法进行但级函数访问属性，最多只能一级函数访问，如下案列
//		b) 其它变量 = this; this因规则受限无法多级函数使用，但是把他赋值给其它函数即可进行多级属性访问,如下案列

jone = {
	name:'jone',
	tel: 123456,
	cale: function(){
		console.log( this.name ); // 可正常访问
		var that = this; // 将this赋值给that及时闭包依然可以代替this可以进行多级函数，直接属性访问
		function test2(){
			console.log( this.name ); // 无法访问,因为this的调用是有限制的，this只能进行一级访问。
			console.log( that.tel ); // 正常访问，因为that变量单独已被this赋值，this是受默认规则的影响无法进行多级函数属性访问,但其它变量不受限。
		}
		
		test2();
	}
}

jone.cale();

// 3. 关于对象的细节，对象间借用函数
var zhao = {
	name:'zhao',
	cale: function(){
		console.log(this.name);
	}
}
var li = {
	name:'zhao',
	cale: zhao.cale() // 内借用
}
li.cale2 = zhao.cale; // 外借用 
li.cale; // 调用借来的函数( 正常调用 )

// 语句( 和C语法几乎差不多 )

// if语句( 老盆友了不多说 )
	var i=0;	
	// 单行写法( 不推荐可读性差 )
	// if( i>0 ) alert("yes") else if(i==0) alert("0") else alert("no")
	// 规范写法
	if( i>0 ){
		alert("yes");
	}
	else if( i==0 ){
		alert("0");
	}
	else{
		alert("no");
	}

// do while语句( 与C几乎差不多 )
	var s = 0;
	do{
		s++;
	}while( s<10 );
	alert(s);

// for语句( 老朋友不多说 )
	var i,count = 3;
	// 规范写法
	for(i=0;i<count;i++){
		alert(i);
	}
	// 无限循环写法
	/*
	for(;;){
		// 内容
	}
	 */
	// for也可以代替while写法
	i = 0;
	for(;i<conut;){
		i++;
	}

// for-in 用法( 可以迭代出对象属性,用法有点像python的for-in语句 )
	// 1. 对象属性是无序的,因此每一次迭代出的属性是随机幻化的,但每一个属性都会被迭代出一次
	// 2. 如果迭代出的属性变量值是null或undefined,则会被报错,ES5标准则会停止迭代
/*
for( var propName in window ){ // 迭代出window对象所有属性名,并赋值给propName变量
	document.write(propName); // 在浏览器中写出变量内容
	document.write("<br>"); // 写换行符
}
*/

// label语句( 跳出循环使用 )
	// 通常与for循环配合
	// break label 或 continue label方法使用
	// 注意: break label 直接结束目标for的循环
	//	     continue label 跳到标签点继续执行
// 例: 
/*
var i,a,b;
labelEnd: for(i=0;i<5;i++){ 
		alert("1-1-1");
		labelState: for(a=0;a<3;a++){ // label标签用法( 标签点 )
			alert("2-2-2");
			for(b=0;b<2;b++){
				alert("3-3-3");
				continue labelState; // 直接跳出到标签点,然后继续执行
			}
		}
		break labelEnd; // 结束labelEnd标签点匹配的for循环
}
// labelEnd 结束后,其它语句开始执行位置
alert("end!");
*/

// break,continue 功能与C语言语法功能一样

// with语句
	// 主要作用是将,作用域设置到指定对象中
	// with会使代码性能降低,不推荐使用
	// with也不方便调试,并且with无法在严格模式使用,会直接报错






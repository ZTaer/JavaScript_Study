
/*** Object对象 ***/

// 创建对象 - 方法1
var ztaer = {
	
	year: 18,
	name: 'oo7',
	skills: [ 'h5/css3','js','python3','linux' ],
	gf: false

};

var oo7 = new Object(); // 创建对象 - 方法 2

// 索引对象属性
console.log( ztaer.year );
console.log( ztaer[ 'name' ] );
console.log( ztaer.skills[1] );

// 修改对象属性
ztaer.year = 20;
ztaer['name'] =  '__OO7__';
console.log( ztaer );

// 添加属性给对象
oo7.name = 'ztaer';
oo7['sex'] = 'man';
console.log( oo7 );



/***** 函数 *****/

// 函数的创建 - 第一种
function test( x ){
	return x;
}

// 函数的创建 - 第二种
test2 = function( y ){
	return y;
}

console.log( test(2) + ' ' + test2(3) );

/***** object关于this使用，以及对象中函数创建 *****/
// object的函数创建其实依据第二种函数创建方法
// this使用:
// 		a) this.变量，可以调用自身对象属性
//		b) this.变量。 也可以创建自身属性
var boy = {
	birthYear: 1998,
	calcAge: function( year ){ // 创建函数
		// this 可以调用自身已有属性，也可以创建新属性
		this.age = year - this.birthYear;  
		return this.age;
	}

}

// 对象函数调用
console.log(  boy.calcAge( 2019 ) );



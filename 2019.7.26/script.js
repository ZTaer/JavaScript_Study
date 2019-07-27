
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

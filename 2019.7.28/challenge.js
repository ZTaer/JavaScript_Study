

// 对象例题练习:
// 计算BMI, 并保存属性

var userJohn = {
	name:'John',
	cale: function( mass,height ){
		this.mass = mass;
		this.height = height;

		this.BMI = +( mass / height ** 2).toFixed(2) ; // .toFixed()保留二位小数返回字符串结果，+号字符串转为数字类型数据
		
		return this.BMI;
	}

}

var userMark = {
	name:'Mark',
	cale: function( mass,height ){
		this.mass = mass;
		this.height = height;

		this.BMI = +( mass / height ** 2).toFixed(2) ; // .toFixed()保留二位小数返回字符串结果，+号字符串转为数字类型数据
		
		return this.BMI;
	}

}
/******* MAIN */
var winner,BMI;

BMI_John = userJohn.cale( 72,1.8 );
BMI_Mark = userMark.cale( 88,1.9 );

if( BMI_John > BMI_Mark ){
	winner = userJohn.name;
	BMI = BMI_John;
}
else if( BMI_John < BMI_Mark ){
	winner = userMark.name; 
	BMI = BMI_Mark;
}
else if ( BMI_John == BMI_Mark ){
	winner = userJohn + ' ' + userMark;
	BMI = BMI_John;
}

console.log( userJohn,userMark );
console.log( 'winner: ' + winner + 'BMI: ' + BMI );




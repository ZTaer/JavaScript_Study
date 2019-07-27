/*****
 *
 * 初始账单: 124,48,268
 * 小费计算:
 *		<50 ( 20% )
 *		50 - 200 ( 15% )
 *		>200 ( 10% )
 *
 * 要求输出:
 *		每个账单增加的小费
 *		每个实际付款账单
 *
 * **/

/************ function-BGN ******/

// 计算小费函数
function smoney ( money ){
	
	var x;
	var result = 0;

	switch( true ){
		case money <= 50 && money > 0 :
			x = 0.2;
			break;
		case money > 50  && money <= 200:
			x = 0.15;
			break;
		case money > 200:
			x = 0.1;
			break;
		default:
			return 0;

	}
	
	result = +( money * x ).toFixed(2) ; // .toFixed(2) 四舍五入保留2位小数,返回字符串类型结果，所以计算时需在转换为数字类型
	return result;	

}

/************ function-END ******/



/************ main-BGN *****/

var moneyGroup = [ 124,48,268 ];
var x,y,z;

for( i=0 ; i < moneyGroup.length; i++ ){

	x = moneyGroup[i];
	y = smoney( moneyGroup[i] );
	z = x+y;
	
	console.log( x + ' - ' + y + ' - ' + z );

}


/************ main-END ******/


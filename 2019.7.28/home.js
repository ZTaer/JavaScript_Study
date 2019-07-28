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

/************ function-BGN */

// Jone家计算小费函数
function jmoney ( money ){
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

/*****
 *
 * 初始账单: 77,375,110,45
 * 小费计算:
 *		<100 ( 20% )
 *		100 - 300 ( 10% )
 *		>300 ( 25% )
 *
 * 要求输出:
 *		每个账单增加的小费
 *		每个实际付款账单
 *
***/

// Mark家计算小费函数
function mmoney ( money ){
	var x;
	var result = 0;

	switch( true ){
		case money <= 100 && money > 0 :
			x = 0.2;
			break;
		case money > 100  && money <= 300:
			x = 0.1;
			break;
		case money > 300:
			x = 0.25;
			break;
		default:
			return 0;

	}
	
	result = +( money * x ).toFixed(2) ; // .toFixed(2) 四舍五入保留2位小数,返回字符串类型结果，所以计算时需在转换为数字类型
	return result;	

}

// 数组总和计算
function sum( list ){
	var i,result = 0;
	for( i=0; i<list.length; i++ ){
		result += list[i];
	}
	return result;
}

// 数组平均数计算 
function avg( list ){
	var result;
	result = +( sum(list) / list.length ).toFixed(2) ;
	return result;
}

/************ function-END */

/************* object-BGN */

// 家庭属性
// 		name
//		应付账单数组( 入口 )
//   	小费账单数组
//			小费账单的总和
//			小费账单的平均数
// 		实际付款数组
//			付款总和
//			付款平均数

// JONE家
var userJone = {
	name: 'Jone',
	cale: function( moneyList ){

		// 应付款列表
		this.payBill_list = moneyList;

		// 小费列表
		var i,tip; 
		var tip_cale = jmoney; // 小费核心算法选择( 本质为函数赋值 )

		this.tip_list = [];
		for( i=0; i < moneyList.length; i++ ){
			tip = tip_cale( moneyList[i] );
			this.tip_list.push( tip );
		}

		// 小费账单总和
		this.tip_sum = sum( this.tip_list );

		// 小费用账单的平均数
		this.tip_avg = avg( this.tip_list );

		// 实际付款数组
		this.actBill_list = [];
		for(i=0; i< moneyList.length; i++){
			this.actBill_list[i] = ( this.payBill_list[i] + this.tip_list[i] );
		}

		// 实际付款总和
		this.actBill_sum = sum( this.actBill_list );

		// 实际付款平均数
		this.actBill_avg = avg( this.actBill_list );

	}			

}


// MARK家
var userMark = {
	name: 'Mark',
	cale: function( moneyList ){

		// 应付款列表
		this.payBill_list = moneyList;

		// 小费列表
		var i,tip; 
		var tip_cale = mmoney; // 小费核心算法选择( 本质为函数赋值 )

		this.tip_list = [];
		for( i=0; i < moneyList.length; i++ ){
			tip = tip_cale( moneyList[i] );
			this.tip_list.push( tip );
		}

		// 小费账单总和
		this.tip_sum = sum( this.tip_list );

		// 小费用账单的平均数
		this.tip_avg = avg( this.tip_list );

		// 实际付款数组
		this.actBill_list = [];
		for(i=0; i< moneyList.length; i++){
			this.actBill_list[i] = ( this.payBill_list[i] + this.tip_list[i] );
		}

		// 实际付款总和
		this.actBill_sum = sum( this.actBill_list );

		// 实际付款平均数
		this.actBill_avg = avg( this.actBill_list );

	}			

}

/************* object-END */

/************ main-BGN */
// 1. 求出小费的平均数进行比较

var jone_f = [ 124,48,268 ];
var mark_f = [ 77,375,110,45 ];

userJone.cale( jone_f );
userMark.cale( mark_f );
console.log( userJone,userMark );

var name,tip;
// 依据小费平均数进行计算

if( userJone.tip_avg > userMark.tip_avg ){
	name = userJone.name;
	tip = userJone.tip_avg;
}
else if( userJone.tip_avg < userMark.tip_avg ){
	name = userMark.name;
	tip = userMark.tip_avg;

}
else if( userJone.tip_avg == userMark.tip_avg ){
	name = 'equal';
	tip = userJone.tip_avg;

}

console.log( 'Much more',name,tip );

/************ main-END */


/** function-BGN **/

function sum_ave( group ){
	var sum = 0;
	var ave = 0;
	var i;
	var result;
	for( i=0; i < group.length; i++ ){
		sum += group[i];
	}
	
	ave = parseInt( sum/group.length ); // 输出整数类型 
	result = [ sum,ave ];

	return result;

}

/** function-END **/

/** MAIN-BGN **/

John = [ 89,120,103 ];
Mike = [ 116,94,123 ];
Mary = [ 97,134,105 ];

join = [ John, Mike, Mary ]; // 参加比赛名单

var winner = 0,winner_avg,pos,name;

for( i=0; i < join.length; i++ ){
	var ave = sum_ave( join[i] )[1]; // 获取数组平均值
	if ( ave > winner ){
		winner = ave;
		pos = i; // 记录最大数位置
	}

}

switch( true ){
	case pos == 0:
		name = "John";
		break;
	case pos == 1:
		name = "Mike";
		break;
	case pos == 2:
		name = "Mary";
		break;
}

console.log( "winner: " + name + " avg: " + winner  );

/** MAIN-END **/

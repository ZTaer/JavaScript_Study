
// 数值范围
	/*
	 * 最大值 Number.MAX_VALUE == 1.7976931348623157e+308
	 * 最小值 Number.MIN_VALUE == 5e-324
	 * ifFinite() 查看数是否在最大最小范围内,返回布尔类型
	 * 如果值超出范围,则数值变为正/负Infinity( 正负无穷 )
	*/
var result = Number.MAX_VALUE + Number.MAX_VALUE; // Number.MAX_VALUE保存着最大值
alert( isFinite(result) ); // isFinite()查看值是否在最大最小值内
alert(result);
alert( Number.NEGATIVE_INFINITY ); // Number.NEGATIVE_INFINITY/Number.POSITIVE_INFINITY == -Infinity/+Infinity



// 非数值NaN
	/*
	 * NaN为非数值
	 * 数值/0 返回NaN,保证不出错
	 * NaN/10 == NaN // NaN与如何数计算都等于NaN
	 * NaN != NaN // 甚至它都不等于他本身
	 */
	alert("----");
	var a=10,b=0;
	alert(a/b); // 默认情况是NaN,Chrome则为Infinity
	alert(NaN/10); // 依然为NaN



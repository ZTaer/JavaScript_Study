
/** 3元表达式 **/
// 一遍用于,简单的判断赋值，不适于复杂的判断
// 使用方法:
//		条件 ? 真,执行此语句 : 假,执行此语句;

var drinks;
var age = prompt(" 你的年龄? ");
age >= 18 ? drinks = "wine" : drinks  = "joice";
console.log( "ZTaer drinks " + drinks + "!" );

/** switch **/
// 适用于,避免使用多个if else,使程序简洁性
// js的switch很自由,case的条件按照if的判断条件来就好

var man;
switch( true ){
	case age < 18 && age >= 16:
		man="青少年";
		break; //  没有break后果很严重,会不经case处理就执行其他语句
	case age >= 18:
		man = "成年人";
		break;
	case age == "21": // case 也可以多条配合,来执行同一条语句
	case age == "二十一":
		man="21岁";
		break;
	default: // 如果条件都不符合会执行此语句
		man = "你猜一猜";
		break;
}
console.log( "ZTaer 已经是 " + man + "!" );

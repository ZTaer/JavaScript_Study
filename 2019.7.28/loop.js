
/**** 几种循环，以及continue,break */

// for循环/while与C无异
for( var i=0; i<10; i += 2 ){ // 花式输出偶函数 
	if( i > 5 ) break; // break与C无异
	console.log(i);
}

// while,按照C正常使用即可，continue/break同样如此

var group = [ '1','2',3,'4','5' ];
var i = 0;

console.log( typeof( group[2] ) )

while( i < group.length ){
	if ( typeof group[i] !== 'number' ){
		i++;
		continue
	}
	else{
		console.log( group[i] );
		break;
	}
}
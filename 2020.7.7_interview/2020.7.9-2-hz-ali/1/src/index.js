// 第一题: 求阿里数
function test(num){
    const arrNum = (num.toString()).split("");
    let sum = 0;
    for( let cur of arrNum ){
        sum = sum + (+cur)**2;
    }
    if( sum === 1 ){
        return true;
    }
    else if ( sum !== 1 && sum.toString().length === 1 ){
        return false;
    }
    else {
        return test( sum );
    }
}

for( let i = 0; i <= 100; i++ ){
    if(test(i)){
        console.log(i);
    }
}

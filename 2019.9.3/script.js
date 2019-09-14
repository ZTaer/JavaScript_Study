
// .reduce()数组数字计算函数
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
        // total: 总和
        // currentValue: 当前数组元素值
        // arr: 数组对像( 不常用 )
        // initialValue: 传入的默认参数( 从左边到右进化函数参数的默认值设定，所以此时设定的默认值为total )
    // 实列:
    let a = [1,2,3,4];
    
    // reduce()使用的函数分析:
        // total + cur : 相当于 return total + cur; 以递归的方式计算总和
        // reduce( f( total,cur,index ),0 ): 至于0为传入函数的默认参数
    let result = a.reduce( ( total, cur, index ) => total + cur, 0 ); 
    console.log( result );

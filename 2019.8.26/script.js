
// 0. ES6-Array.form()快速将nodeList对象转换数组
list = document.querySelectorAll('.box');
arr = Array.from(list); // nodeList对象转为数组( 核心 )
console.log(arr);

// 1. ES6-新的for迭代方式 - className+includes可以精确选中标签 
    // a) for( cur of array ){ cur为迭代出的元素 }: 
    // b) 关于.className: 获取标签所有类名
        // 0. 返回标签所有的class类( 字符串类型 )，不同类名用空格隔开
    // c) 关于includes( str ): 验证字符串中是否包含指定字符串

for( cur of arr ){ // arr为一个数组
    if( cur.className.includes('blue') ){
        continue;
    }
    else{
        cur.textContent = '2333!!!!';
        cur.style.backgroundColor = 'pink';
    }
}

// 2. ES6-array.find( => )快速查找数组中符合条件的元素,返回元素值
    // a) 只能查找一个符合条件的元素
    // b) 找到: 返回元素值
    // c) 没找到: 返回-1
    // d) array.find( (cur,index,thisArray) => ... ); 一般只需要cur足矣 

    const test = [12,22,21,2,4];
    let b = test.find( cur => cur >= 18 ); // ( 核心 )
    console.log(b); // 22: 返回第一个符合条件的元素

// 3. ES6-array.findIndex( => )快速查找数组中符合条件的元素,返回索引值
    // a) 只能查找一个符合条件的元素
    // b) 找到: 返回元素索引值
    // c) 没找到: 返回-1
    // d) array.findIndex( (cur,index,thisArray) => ... ); 一般只需要cur足矣 

    let c = test.findIndex( cur => cur >= 18 );// ( 核心 )
    console.log(c);

// 4. 函数直接使用数组元素作为参数
    //0. ES5-使用.apply()
        // a) function.apply(null,Array)舍弃替换目标,直接传输参数到借用的函数中
    //1. ES6-“...”扩展符
        // b) 扩展符可以使用在“数组”，"nodeList"中

    function add( a, b, c, d ){
        return a+b+c+d;
    }

    //ES5
    var ages = [ 2,32,21,23 ];
    var result = add.apply(null,ages); //( 核心 - function.apply(null,Array)舍弃替换目标,直接传输参数到借用的函数中 )
    console.log(result);

    //ES6
    result = add( ...ages ); // 核心
    console.log(result);

// 5. 关于"..."(扩展符)的使用
    // 0. 扩展符可以使用在“数组”，"nodeList"中
    // 1. 扩展符释放所有 数组/nodeList 元素
        // a) [...nodeList,...array,...other] 这种扩展符使用小技巧非常重要

    // 0. 数组使用扩展符
        // a) 可以直接使用在函数的参数中
        // b) 利用扩展符数组组合 [...array,...array,other]
    aTest = ['zhao','teng'];
    bTest = ['ztaer','killer'];
    cResult = [ ...aTest,'OO7',...bTest ]; // 利用扩展符数组组合
    console.log(cResult);

    // 1. nodeList 使用扩展符
        // a) 利用扩展符数组组合 [...nodeList,...nodeList,other]
        // b) [...nodeList]: 此方法nodeList转数组的功能
    const h = document.querySelector('h1');
    const box = document.querySelectorAll('.box'); // nodeList
    const all = [h,...box]; // 核心: 扩展符组合，其实这里已经将nodeList转换为数组啦
    all.forEach( cur => cur.style.color = 'red' );









// ES6-关于解构,目的是方便操控数据

/*
// 1. 数组解构
    // 便捷式给数组元素命名多个变量，方便索引调用
    const masg = ['zhaoteng','21','1998'];
    const [ name,age,bro ] = masg; // 数组解构

    console.log(name,age,bro);
*/
/*
// 2. 对象解构
    // 0. 解构的目的是，可以直接索引到对象数据 
    // 1. 大括号内的变量名称要与对象中变量名称相同对应
    // 2. 当然也可以重命名对象索引的变量名称,如下演示

    const masg2 = {
        name : 'ztaer',
        age : '18',
        bro : '2001'
    };

    // 对象解构
    const { name,age,bro } = masg2; 
    console.log(name,age,bro);

    // 对象解构重命名
    const { name: mz, age: nl,bro: cs } = masg2; 
    console.log( mz,nl,cs );

// 3. 函数返回值解构( 原理为数组结构 )

function abs(num){
    let inc = num + 100;
    let exp = num - 100;
    return [ inc,exp ]; // 函数返回数组
}

const [ numInc,numExp ] = abs(99); // 其实就相当于数组解构
console.log( numInc,numExp );
*/




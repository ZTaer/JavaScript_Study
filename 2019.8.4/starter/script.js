// 继承的目的，以及使用概念
    // 0. 目的是减少重复代码
    // 1. 使用方法
        // a) 创建一个蓝图Object对象，命名开头大写，易于区分蓝图对象于普通对象
        // b) 蓝图的索引用调用，让新建的对象继承蓝图中的属性


// 让对象拥有继承函数/属性成为可能的prototype( js的基本继承思路 )
    // 原因:
        // 0. 每一个建立的Object对象都拥有prototype属性,所以我们才能在对象中调用一些函数和方法
        // 1. 同理如果我们自定义的函数也加入到prototype中，在对象中同样可以调用我们自定义的函数
        // 2. 对象在调用函数时，首先会在自身中搜索函数，如果没用则会去prototype中查找函数并调用，如果prototype中也没用则返回undefine
    // 用于:
        // 0. 常用于，与蓝图配合增加函数
        // 1. 当然也可以增加属性，但是并不常用


/********** 蓝图 - 对象继承使用方法,以及prototype使用方法 
function a(){

}

// 创建蓝图,命名开头大写,易于于函数区分
var Parsen = function( name, age, address ){
    this.name = name;
    this.age = age;
    this.address = address;
}

// 使用蓝图创建对象
    // 原理:
        // a) new 运算符的作用是: 创建一个空对象
        // b) 而蓝图为函数，加入this的变量被new操作为对象属性.
var zhao = new Parsen('zhao','21','大学嘉园');
var teng = new Parsen('teng','21','赵楼');

console.log( zhao,teng );

// 使用prototype给蓝图对象添加自定义函数
    // 可用于继承的原因:
        // 0. prototype在每一个对象或者函数默认拥有的属性( 核心 )
        // 1. prototype中包含官方自带的函数，所以我们才能在对象中使用
        // 2. 同理如果将我们创建的自定义函数加入prototype属性中，那么也就可以在对象中调用我们的自定义函数
    // 常用于:
        // 0. 给对象增加函数,如蓝图
        // 1. 也可以添加属性，但是并不常用 
Parsen.prototype.cale = function(){
    console.log( 100 - this.age );
}

zhao.cale(); // 调用函数
teng.cale();
*/

/********** 原型链细节补充，以及证明js皆对象  
    // 0. 在chrome中可以清楚的看到，js万物皆对象，除“ int,float,null,undefine,true/false ”数据类型为源语
    // 1. 他们都有原型链 __proto__ 目的是方便继承，调用不同的函数或者方法。
    // 2. 如创建的对象与蓝图中的原型链:
        // a) zhao.__proto__ === Parsen.prototype // true 成立
    // 3. 因为有__proto__(原型链)的存在，才可实现不同数据间对函数的灵活调用，且他默认包含官方的默认函数在__proto__中的__proto__可找到，利用谷歌控制器

console.log( zhao.__proto__ === Parsen.prototype ); // true

*/

/********** 在chrome控制器调试小技巧-查看原型链对象构成 

// .hasOwnProperty()可判断对象中是否有指定属性
zhao.hasOwnProperty( name ); 

// 判断对象蓝图归属
zhao instanceof Parsen // true

// 查看数据的对象构成细节，如数组的对象细节
sss = [1,2];
console.info(sss);
// 如下图:
*/


/********** 使用Object.creat()打造继承-模板对象蓝图 
// 前面我们演示了，用函数来缔造蓝图，这次用对象来缔造
// 使用Object.creat()，缔造对象模板蓝图
    // 缺点: 比起使用函数来缔造对象蓝图，Object.creat其实只搞些普通的属性确实很麻烦
    // 优点: 对于函数类型的属性，能够更加容易引用且可读性更高
    // 推荐使用方法2

// 方法1( 其实这个方法比较灵活 ):
    //创建蓝图
    var personProto = {
        cale: function(){
            console.log( 2019 - age );
        }
    }
    
    // 继承蓝图
    var zhao = Object.create( personProto );
    zhao.name = 'zhao'; // 继承蓝图后在增加属性
    zhao.age = '21';

// 方法2( 这个写法是按照js底层的工作方式来写的value代表属性的内容 ):
    var teng = Object.create( personProto, {
        // 这里涉及的js的底层工作方式，在书中有提到,本人已解
        name: { value: 'teng' },
        age: { value: '21' }

    } );

*/

/********** 关于js的赋值 
// 0. 普通变量间的赋值
    // a) 不同与C，在JS中普通变量间的赋值是真正的赋值
    // b) 指定的不是内存的同一个位置，但内容相同
var a = 20,b;
b = a;
a = 18;
console.log(a,b); // 18,20

// 1. 对象之间的赋值
    // a) 二者之间并非真正的复制，而是指向同一个内存位置
var test1 = {
    a : 'abc',
    b : '2000'
}
var test2 = test1;
test1.a = '233';

console.log( test1.a,test2.a ); // 233,233
*/

function a(x){
    console.log(x);
}


var b = {
}
b.prototype.c = a;
b.cale = prototype.c;

b.cale('sss');
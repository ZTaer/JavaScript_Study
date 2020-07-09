console.log("------start------");

/**
 * 0. 验证输出结果( 等待笔记 )
 */

const foo = {
    bar:10,
    fn: function(){
        console.log(this);
        console.log(this.bar);
    }
};
foo.fn();          // {输出自己的熟悉, 10}
var fn1 = foo.fn;
fn1();              // {window,undefind} 

/**
 * 1. url分解为对象
 */
const urlParseObject = ( props ) => {
    let result = {},cur;
    const splitArray = props.split("?")[1].split("&");
    for( cur of splitArray ){
        const splitCur = cur.split("=");
        result[splitCur[0]] = splitCur[1];
    };
    return result;
}

const urlData = "https://baidu.com?a=1&b=2&c=3&d=xxx";
console.log(
    urlParseObject( urlData )
);

/**
 * 2. 原型链
 */
function Person(name){
    this.name = name
}
let p = new Person("js");

console.log(p.__proto__);
console.log(Person.__proto__);

/**
 * 3. 宏任务微任务
 */
// 结果: 2457361
// 结论: new Promise --> async --> 默认表达式 --> then --> setTimeout
setTimeout(function(){
    console.log(1);
});

new Promise(function( resolve, reject ){
    console.log(2);
    for( var i = 0; i<10000; i++ ){
        i=9999 && resolve();
    }
}).then(function(){
    console.log(3);
});

const a = async () => {
    console.log(4);
    await console.log(5);
    console.log(6);
};
a();

console.log(7);


// 4. 深浅拷贝
//      a) 核心：解决只复制内存地址的问题，预防数据变更bug
//      b) 目的: 实现真正的变量复制
//      c) 浅拷贝：复制非多级嵌套对象
//      d) 深拷贝: 复制多级嵌套对象

// 普通赋值 - 会复制内容地址，并不是真正的拷贝
let a = {
  age: 1
}
let b = a
a.age = 2
console.log(b.age) // 2

// 浅拷贝 - 解决方法一: "Object.assign"
let a = {
  age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1

// 浅拷贝 - 解决方法二: 展开运算符 ... 来实现浅拷贝
//      通常浅拷贝就能解决大部分问题了，但是当我们遇到如下情况就可能需要使用到深拷贝了
let a = {
  age: 1
}
let b = { ...a }
a.age = 2
console.log(b.age) // 1

// 深拷贝
//      浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到最开始的话题了，两者享有相同的地址。要解决这个问题，我们就得使用深拷贝了。
let a = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}
let b = { ...a }
a.jobs.first = 'native'
console.log(b.jobs.first) // native

// 深拷贝 - 解决方法一
//      这个问题通常可以通过 JSON.parse(JSON.stringify(object)) 来解决
//      但是该方法也是有局限性的：
//          a) 会忽略 undefined
//          b) 会忽略 symbol
//          c) 不能序列化函数
//          d) 不能解决循环引用的对象

let a = {
  age: undefined,
  sex: Symbol('male'),
  jobs: function() {},
  name: 'yck'
}
let b = JSON.parse(JSON.stringify(a))
console.log(b) // {name: "yck"} 看输出结果忽略了undefined , symbol 和 函数

// 深拷贝 - 解决方法二
//      实现一个真正的深拷贝( 等待研究 )

function deepClone(obj) {
  // 判断是不是对象
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }
  // 不是对象的话报错
  if (!isObject(obj)) {
    throw new Error('非对象')
  }
    
  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : { ...obj } // 是数组的话 用数组的解构来实现对象的复制，对象也同理

  // 静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key] // 这里进行递归实现多层对象的复制
  })
 
  return newObj
}

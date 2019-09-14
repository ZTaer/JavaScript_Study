
// 开始学习ES6
/**
// 0. ES6-创建变量的二种方式
    // a) let: 创建可改变变量
    // b) const: 创建不可改变变量
let actv = 123; // 可改变

const  noactv = 456; // 不可改变
// noactv = 123; // 会报错

// 1. ES6-变量的作用范围
    // a) var 工作范围为一个作用域
    // b) let / const 工作范围为一个“块范围”，出了大括号即可被内存释放
        // 0. 关于变量的使用范围，
        // 1. 老版本能使用在相应的作用域，而现版本则为"块"的概念，工作方式不同，
        // 2. 新版本的变量只能在" 大括号内，使用，包括IF/FOR等
        // 3, ( 有点像function的局部变量，但是要比function要求更加严格,因为在if/for中出了大括号变量一样无法使用 )

let a = 1;
if( a > 1 ){
    console.log(s); // 如果为ES5的var，此时会返回undefine,在ES6中的let/const则会报错
    let s = 'ok';
}
console.log(s); // 会报错，因为变量不存在


// 2. ES6-新版IIFF
    // a) 创建新版IIFF只需"{}"一对大括号,在配合let/const
    // b) 切忌不要使用var创建变量,因为ES6变量为块范围，var为作用域范围 
{
    let abc = 1;
}
**/
/**
// 3. ES6-新版输出字符串方式( 便捷式输出字符串 )
    // a) 直接将字符串``写在此符号中( 数字1键左侧 )
    // b) 将变量/函数写在此括号中 ${ * } 可以正常的调用函数/变量
    // c) 模板: ` ${  } `
// 演示:
let first = 'zhao';
let last = 'teng';

let calc =  function( num ){
    return num - 1998;
}
console.log( `name: ${first} ${last}\nyear: ${ calc(2019) }` ); // 可直接调用变量，和函数

// 4. 验证字符串是否包含指定字符串
    // a) .startsWith(*): 验证字符串开头
    // b) .endsWith(*): 验证字符串结尾
    // c) .includes(*): 验证是否包含字符串
    // d) 是: 返回true -- 否: 返回false

// 演示:
let name = 'ztaer';
console.log( name.startsWith('zt') ); // true - 验证开头是否为指定字符串
console.log( name.endsWith('aer') ); // true - 验证是否结尾为指定字符串
console.log( name.includes('taer') ); // true - 验证是否包含字符串

// 5. 循环叠加字符串
    // a) .repeat( num ): 重复叠加字符串
let ho = 'ho';
ho = ho.repeat(6); // 重复叠加6次字符串
console.log( ho );
**/

/**
// 6. 3种箭头函数使用方法(=>),用来代替function函数
    // a) 第一种,单参数单语句写法: 参数 => 表达式；
    // b) 第二种,多个参数当语句写法: ( 参数，参数 ) => 表达式;
    // c) 第三种,完整的=>函数写法: ( 参数,参数 ) => { 表达式; 表达式; return 表达式 };
        // 0. 有大括号需要return来返回数据, 无大括号时可直接返回数据

    // 第一种    
    let a = [ 1,2,3,4 ];
    let b = a.map( cur => cur+1 );
    console.log(b);

    // 第二种
    let c = a.map( ( cur,index ) => cur - index );
    console.log(c);

    // 第三种法
    let sss = ( num ) => {
        return num + 1;
    };
    console.log( sss(5) );
**/

/*
// 7. 对象的this变量多级处理

    // 0. ES5,this变量多级处理方式
    var test = {
        name:'zhao',
        age:18,
        sex:'man',
        calc: function(){
            var self = this; // 因为this只能进行一级调用,有它 可以进行多级的数据处理
            document.querySelector('.b-g').addEventListener('click',function(){
                self.bro = 2019 - self.age;
                console.log(test);
            });
        }

    }
    test.calc();
*/
/**
    // 1. ES6,this变量多级处理方式( 说白了,function嵌套=>;才能使=>直接读取this变量值 )
        // a) function(){ ()=>{} } : 在对象中,function中嵌套=> 则=>可以直接读取function的变量,包括this变量
        // b) 因为=> 会获取父类环境的所有变量
        // c) 注意: () => { ()=>{} }: 如果=>嵌套=>与function嵌套function结果一样
    var test = {
        name:'zhao',
        age:18,
        sex:'man',
        calc: function(){
            document.querySelector('.b-g').addEventListener('click',() => {
                this.bro = 2019 - this.age;
                console.log(test);
            });
        }

    }
    test.calc();

    
// 8. 对象模板中处理多级变量

    // ES5 - 对象模板处理多级this - 使用bind()处理多级this变量的骚操作
    var Model = function( name ){
        this.name = name;
        this.age = '21';
    }

    Model.prototype.calc = function( friends ){

        var newArr = friends.map( function( cur ){
            return this.name + '是' + cur + '的朋友';
        }.bind(this) ); // 函数.bind(this) 借用函数处理this变量

        console.log(newArr);
        
    }

    var friends = [ 'abc','cad','ccc' ];
    new Model( 'ztaer' ).calc( friends ); 
**/
    // ES6 - 对象模板处理多级this，原理就是function 嵌套 => ;使 => 可以读取使用所有的父类function变量,包括this
    let Model = function( name ){
        this.name = name;
        this.age = '21';
    }

    Model.prototype.calc = function( friends ){

        let newArr = friends.map( cur => {
            return this.name + '是' + cur + '的朋友';
        });

        console.log(newArr);
        
    }

    let friends = [ 'abc','cad','ccc' ];
    new Model( 'ztaer' ).calc( friends );










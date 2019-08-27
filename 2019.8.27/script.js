
// 0. ES6-函数处理多个参数方法
    //0. ES5-在函数中使用变量: arguments可以获取函数使有传输的参数
        // a) 注意: arguments并非数组,迭代使用时需转换
        // b) Array.prototype.slice.call(arguments,1) // 可切出所需参数
    //1. ES6-方便快捷,使用扩展符转换传输的函数为数组
        // a) 传输多个参数和单个参数,的同时，用逗号隔开也极为方便分辨传输单个参数和多个参数
    //2. Map()方法汇总
        // 创建Map()数据类型
            // let test = new Map();
        // 获取Map存储值
            // Map.get(key);
        // 增删查改:
            // 键值已经存在,则set()为修改
            // Map.set( key, value); Map.delete( key ); Map.has( key ); Map.set( key, value );
        // 获取map所有元素( 常与解构配合进行迭代 )
            // Map.entries();
        // 清空map所有元素
            // Map.clear();

    //ES5
    function add5(){
        // arguments变量包含传输的所有参数
            //a) arguments并非数组,只是张得像,迭代时需转换( 核心 )
        console.log(arguments);
        var argu = Array.prototype.slice.call(arguments);
        argu.forEach( function( cur ){
            console.log(cur);
        } );

    }
    add5(1,2,3,4,45,2);

    // ES6
        // ...year使用扩展符将传输的参数转换为数组( 核心 )
    function add6(limit,...year){
        for( cur of year ){
            if(cur >= limit){
                console.log(true);
            }
            else{
                console.log(false);
            }
        }
    }
    add6(18, 12,23,22,11,23,44,1,3,7,22);

// 1. ES6-函数设置默认参数
    // 0. ES5-设置默认参数需3元表达式配合
        // a) 过程极为繁杂
    // 1. ES6-设置默认参数直接使用=号即可，与python相似

    //ES5
    function Msg( name, age, country ){

        // 设定函数默认值
        country == undefined ? country = 'cn' : country = country;

        this.name = name;
        this.age = age;
        this.country = country;
    }

    var oo7 = new Msg('zhao','18','usa');
    var ztaer = new Msg('killer','21'); // country没有赋值则按默认值设定

    console.log(oo7,ztaer);

    //ES6
        // 直接使用等号设定默认值
    function Msg6( name, age, country = 'cn', lang ='zh'){
        this.name = name;
        this.age = age;
        this.country = country;
        this.lang = lang;
    }
    let zhao = new Msg6( 'teng',22 );

// 2. ES6-Map()数据类型
    // 0. 使用Map()数据类型的理由:
        // a) 可迭代，有序存储
        // b) 方便'增删查改'
        // c) 可以存储任何数据类型
        // d) 可以通过Map.size()函数获取准确大小
    // 1. Map()数据结构:
        // { key => value, key => value ... }
        // 左边为键值,右边为存储值
    


    // 0. Map()数据,增删添改,使用实列
         // new Map(): 创建map
        const question = new Map();

        // Map.set( key ): map增加map元素,可以保存任何数据类型
        question.set('Q','你喜欢那个版本的JavaScript?'); 
        question.set(1,'ES5');
        question.set(2,'ES6');
        question.set(3,'ES7');
        question.set('A',2);
        question.set(true,'YES!!!');
        question.set(false,'NO!!!');

        // Map.has( key ): map验证指定键值是否存在map中 
        if( question.has(3) ){ 

            // Map.delete( key ): map删除指定元素
            question.delete(3); 
        }
        console.log(question);

        // Map.get( key ): map获取指定元素
        question.get('A'); 

        // Map.set(key): map若键值已存在,则直接修改内容
        question.set(2,'ES2015');
        console.log(question);

        // Map.size: map判断map大小
        console.log( question.size );

        // Map.clear(): 清空map元素
        // console.log( question.clear() );

    
    // 1. map数据迭代
        // a) forEach()方法
        // b) for方法

        // 0. forEach()方法迭代map
            // a）注意,参数值为反方向
        question.forEach( ( value,key ) => {
            console.log(` ${key} --- ${value} `);
        } );

        // 1. for()方法迭代map
            // a) Map.entries() 获取map全部值
            // b) []通过结构的方法获取迭代出的对应值
        for( [ key,value ] of question.entries() ){
            console.log(` ${key} --- ${value} `);
        }

    // 2. map数据结构选择题实例
        const ans = parseInt( prompt(question.get('Q')) );

        console.log( 
            question.get( ans == question.get('A') ) // 中心返回一个布尔值( 在通过布尔值返回对应数据 ) 
         ); 
         










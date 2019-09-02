/*
// ES6-使用class来写蓝图的方式
    // 0. 起本质哈是prototype继承
    // 1. class不能直接添加属性，但因为继承属性的原因，最终也是属性的聚焦
    // 2. 通过函数方法的形式足以创建所需属性，所以class也无需需要直接添加属性的功能，起函数方法足矣

class Person6{

    msg( name, bro, job ){
        this.name = name;
        this.bro = bro;
        this.job = job;
    }

    calcAge(){
        let age = new Date().getFullYear() - this.bro;
        console.log(age);
    }

    static print(){
        console.log( '定义静态函数，可直接通过蓝图调用' );
    }

}

// ES6的蓝图的使用方式相同
let zhao = new Person6();
zhao.msg( 'teng', '1998', 'hacker' );
zhao.calcAge();

// 调用静态函数 -可直接通过蓝图名称来调用相应函数( 并不常用 )
Person6.print(); 

*/


// ES6-蓝图合并的方法
    // 0. 其本质工作方式在ES5更能体现出( 记得有时间整理理解下 )
    // 1. class默认自带constructor()函数
    // 2. 在extends扩展蓝图后
        // a) super()函数只能用于constructor()中引用蓝图属性变量
    // 3. 蓝图( 参数 ): 默认直接参数传输给constructor()函数
        // a) 传入形式: let test = new Person6(0,'test'); 
    // 4. 融合蓝图后,二者蓝图的函数都可调用


// 使用 extends使二者蓝图融合扩展
class Person6{

    // class默认就有constructor()函数
    constructor( name, bro, job ){
        this.name = name;
        this.bro = bro;
        this.job = job;
    }

    calcAge(){
        let age = new Date().getFullYear() - this.bro;
        console.log(age);
    }

}

class Mods extends Person6{
    constructor( name, bro, job, win, lose ){
        // 在constructor中才能使用super函数引用属性
        super( name, bro, job ); 
        this.win = win;
        this.lose = lose;
    }

    addLose(){
        this.lose++;
        console.log(this.lose)
    }
}

// 蓝图( 参数 ): 默认直接参数传输给constructor()函数
const oo7 = new Mods('zhao', 1998, 'web', 999, 1);

// 融合蓝图后,二者蓝图的函数都可调用
oo7.addLose();
oo7.calcAge();



console.log('*****************');
/* 主动bind，对象中的函数，调用时无需bind( 完成笔记 ) */
    // a) 注意：其实按照ES6习惯的正常写法，默认就无需bind，但是ES5习惯的写法需要写bind
    // b) 正常写法: button.addEventListener('click', ()=>p.getDate );
    // c) 无装饰器bind写法：button.addEventListener('click', p.getDate.bind(p) ); 
    // d) 有装饰器，避免使用bind的写法: button.addEventListener('click', p.getDate ); 

function AutoBind( _target: any, _name: string, descriptor: PropertyDescriptor ){
    const originMethod = descriptor.value;          // 在descriptor的value属性中为监听目标( 这里是getDate()函数 )
    const adjDescriptor: PropertyDescriptor = {     // 返回的descriptor内容
        configurable: true,   // 可以自由配置
        enumerable: false,    // 在循环中不显示( 具体不清楚 )
        get(){                // get属性：方便用户执行额外的逻辑
            const boundFunction = originMethod.bind(this);  // 给getDate()函数提前bind，这样在使用时无需bind
            return boundFunction;
        }
    }
    return adjDescriptor;
}

class Printer {
    name:string = 'init data';
    @AutoBind getDate(){
        console.log( this.name );
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
// 正常写法: button.addEventListener('click', ()=>p.getDate );
// 无装饰器bind写法：button.addEventListener('click', p.getDate.bind(p) );  
button.addEventListener('click', p.getDate ); // 有装饰器，避免使用bind的写法 


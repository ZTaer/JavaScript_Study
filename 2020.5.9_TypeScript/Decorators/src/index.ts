console.log('--start--');
/* 装饰器( 完成笔记 ) */
// 0. 记录class代码
    // a) constructor: Function: 此参数代表，抓取当前文件中的class代码
    // b) 注意: constructor参数名称可随意修改
function Logger( logMsg: string ){
    console.log('--- Logger Start ---');
    return function( constructor: Function ){
        console.log('--- Logger Function ---');
        console.log( logMsg );
        console.log( constructor );
    }
}

// 1. 通过装饰器，渲染H5标签
function WithTemplate( template: string , hookId: string ){
    console.log('--- WithTemplate Start ---');
    return function( constructor: any ){                            // 这里必须要传值，否则将报错
        console.log('--- WithTemplate Function ---');
        const hookTarget = document.getElementById(hookId)!;
        if( hookTarget ){
            const p = new constructor();                            // 实列化后，可以获取class中的属性
            hookTarget.innerHTML = template;
            hookTarget.querySelector('h1')!.textContent = p.name;   // 将class中name属性渲染到h1标签中
        }
    }
}

// 3. 装饰器运行顺序：
    // a) 先从, 自上到下执行装饰器: Logger Start --> WithTemplate Start
    // b) 在从装饰器内部return函数, 自下而上执行: WithTemplate Function --> Logger Function
    // 类装饰器——优先级 4 
    // 方法装饰器——优先级 2 
    // 访问器或属性装饰器——优先级 3
    // 参数装饰器——优先级 1 

@Logger( '测试装饰器，抓取class' )                                    // 运行装饰器 - 抓取class代码
@WithTemplate( `<h1>渲染个标题吧</h1>`, "app-test" )                  // 通过装饰器 - 渲染标签
class App {
    name = "Ztaer";
    constructor(){
        console.log("---- App - Start ----");
    }
}
const test = new App();


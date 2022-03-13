# 资源
    0. https://github.com/febobo/web-interview
    1. https://juejin.cn/book/6844733763675488269

# 浏览器类
0. 浏览器缓存
    a) Service Worker: 请求时先查询,查不到在发请求
    b) Memory Cache: 内存缓存，页面内容大部分
    c) Disk Cache: 根据请求header决定哪些内容，存储在硬盘中，及时关闭浏览器，在打开此数据依然存在，如某个页面的cookie token
    d) Push Cache: Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放。
    e) 网络请求: 如果所有缓存都没有命中的话，那么只能发起请求来获取资源了。
1. 浏览器渲染原理
2. 跨域问题
    a) 什么是跨域? - 浏览器的同源安全策略，协议相同（protocol）主机相同（host）端口相同（port), 如果3者有一种不同,那么就是跨域
    b) 解决跨域的有效策略? - 
        0. 前端: 用whistle代理调试
        1. 后端: 通过配置nginx实现代理

# 原生JS类
0. 原型及原型链
    a) https://juejin.cn/post/6844904093828251662
        0. 什么是原型链? - 原型与原型层层相链接的过程即为原型链。
    b) https://juejin.cn/post/6844904151332159501
        0. 说说原型链和继承吧? - 
            a) JavaScript 中没有类的概念的，主要通过原型链来实现继承。通常情况下，继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript只是在两个对象之间创建一个关联（原型对象指针），这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。
    c) https://juejin.cn/book/6844733763675488269/section/6844733763759374350
        0. 什么是原型? - 每个 JS 对象都有 __proto__ 属性，这个属性指向了原型, 这个属性在现在来说已经不推荐直接去使用它了，这只是浏览器在早期为了让我们访问到内部属性 [[prototype]] 来实现的一个东西。
        1. 原型的指向过程? -  原型的 constructor 属性指向构造函数，构造函数又通过 prototype 属性指回原型，但是并不是所有函数都具有这个属性，Function.prototype.bind() 就没有这个属性。
        2. 什么是原型链? - 其实原型链就是多个对象通过 __proto__ 的方式连接了起来
        3. 原型链的作用? - 
            a) 继承: 一个对象就可以通过委托访问另一个对象的属性和函数
            b) 直接访问一些方法和属性: 为什么 obj 可以访问到 valueOf 函数，就是因为 obj 通过原型链找到了 valueOf 函数。
1. 闭包
    a) 什么是闭包? - 函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。
    b) 闭包的作用? - 闭包存在的意义就是让我们可以间接访问函数内部的变量。
    c) 闭包的应用? - 
        0. 防抖: 规定时间内多次促发, 将重置促发时间
        1. 节流: 规定时间内最多促发次数限制
2. 宏任务,微任务,执行栈,Event Loop
    a) 执行栈: JS 代码的时候其实就是往执行栈中放入函数
    b) 解释一下什么是 Event Loop? -
        0. 当我们执行 JS 代码的时候其实就是往执行栈中放入函数 
        1. 当遇到异步的代码时,会被挂起Task队列中,
        2. 一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为
        3. ( 什么是宏任务和微任务? ) Task 队列中，任务源可以分为,微任务（microtask）和宏任务
    c) 微任务包括: process.nextTick(node), promise, MutationObserver
    d) 宏任务包括：script, setTimeout, setInterval, setImmediate, I/O, UI rendering
    e) 微任务快于宏任务? - 其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话才会先执行微任务。
3. 深拷贝潜拷贝
    a) 解决了什么问题? - 
        0. 对象类型在赋值的过程中其实是复制了地址，从而会导致改变了一方其他也都被改变的情况, 我们不希望这类事情发生
        1. 解决两者享有相同的地址的问题
    b) 什么是浅拷贝? - 拷贝一层对象，所有的属性值到新的对象中
    c) 如何实现浅拷贝? - Object.assign, 解构符
    d) 什么是深拷贝? - 拷贝一层对象，所有的属性值到新的对象中 
    e) 如何实现深拷贝? - 
        0. JSON.parse(JSON.stringify(object)) 来解决。
            a) 缺点: 
                0. 会忽略 undefined
                1. 会忽略 symbol
                2. 不能序列化函数
                3. 不能解决循环引用的对象
        1. 使用loadsh下的cloneDeep方法解决
        2. 自己写递归逻辑
            a) 递归中止逻辑: 判断入参不是object
            b) 如果是object进行属性赋值
            c) 注意: 简易深拷贝，深拷贝是很困难的，需要我们考虑好多种边界情况，比如原型链如何处理、DOM 如何处理等等
4. this相关
    a) this的定义: this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象
    b) this的指向
        0. 我们只需要记住，谁调用了函数，谁就是 this
        1. 对于 new 的方式来说，this 被永远绑定在了 赋值的变量 上面，不会被任何方式改变 this
    c) 箭头函数里的this
        0. 箭头函数没有this
        1. 如果有function函数包裹了它,那么它指向window
    d) this绑定规则
        0. 默认绑定
            a) 场景: 全局环境中定义xxx函数，内部使用this关键字 
                0. 非严格模式下: --> this指定window
                1. 严格模式下: --> tihs指定undefind
        1. 隐式绑定
            a) 场景: 函数还可以作为某个对象的方法调用，这时this就指这个上级对象
                0. { a:1, b: function(){ this.a  } }, this.a其实就是1
        2. new绑定
            a) 场景: 通过构建函数new关键字生成一个实例对象，此时this指向这个实例对象
                0. 原因: 是因为new关键字改变了this的指向 
            b) 特殊场景: new的实例函数中，return {}，那么this指向返回的{}, 如果是非对象，那么this依然指向fucntion本身( 注意是new的情况下 )
        3. 显示绑定( 暂时不考虑 )
5. mvc,mvp,mvvm
    a) https://juejin.cn/post/7014844340576976926
    b) mvc是什么?
        0. Model：负责保存应用数据，与后端数据进行同步。
        1. Controller：负责业务逻辑，根据用户行为对 Model 数据进行修改。
        2. View：负责视图展示，将 Model 中的数据可视化出来。
        3. 优点: 一定程度上降低了维护成本
        4. 缺点: 
            a) 因为开发过程并不灵活。例如，一个小小的事件操作，都必须经过这样的一个流程，那么开发就不再便捷了
            b) 实际开发过程中: 由于很多的开发者都会在view中写一些逻辑代码，逐渐的就导致 view 中的内容越来越庞大，而 controller 变得越来越单薄, 变得代码越来越难维护
    c) mvp是什么?
        0. Presenter：presenter可以理解为一个中间人，它负责着View和Model之 间的数据流动，防止View和Model之间直接交流。
        1. 优点:
            a) 它分离了 View 和 Model 降低了一定开发和维护的成本
        2. 缺点:
            a) 相对于 MVC 来说少了一些灵活
            b) presenter 的体积增大，难以维护
    d) mvvm是什么?
        0. MVVM 可以分解成(Model-View-VIewModel)
            0. VIewModel: ViewModel 可以理解为在 presenter基础上的进阶版
            1. ViewModel 会实现一套更新策略自动将数据变化转换为视图更新
            2. 通过事件监听响应View中用户交互修改 Model 中数据,减少了大量DOM操作代码
        1. 优点: MVVM 在保持 View 和 Model 松耦合的同时，还减少了维护它们关系的代码，使用户专注于业务逻辑，兼顾开发效率和可维护性。
6. var、let 及 const
    a) var、let 及 const 区别 ?
        0. var有变量提升,它将成为作用域最顶部,所以可以在声明它之前就可调用
        1. var在全局作用域下声明, 会挂载到window上其他不会
        2. let 和 const基本一直, 但后者不可在被赋值
7. 作用域
    a) 变量和函数生效的区域
    b) 作用域分类
        0. 全局作用域: 何不在函数中或是大括号中声明的变量, 任意访问
        1. 函数作用域/局部作用域: 函数内部变量,不能在函数外访问
        2. 块级作用域: ES6引入了let和const关键字,和var关键字不同，在大括号中使用let和const声明的变量存在于块级作用域中。在大括号之外不能访问这些变量
    c) 作用域链: 当在Javascript中使用一个变量的时候，首先Javascript引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域, 如果找不到,在严格模式下会报错
8. promise相关
    a) promise的3个状态
        0. pending（进行中）
        1. fulfilled（已成功）
        2. rejected（已失败）
    b) 正常使用的promise
        0. 示例: 
        const p1 = new Promise((resolve, reject) => {
            resolve('hello');
        })
        .then(result => result)
        .catch(e => e);
    c) promise.all的使用
        0. 示例: const p = Promise.all([p1, p2, p3]);
        1. 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled
# React类
0. React生命周期相关
    a) 说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？
        0. 创建阶段
            a) constructor: 实例过程中自动调用的方法，在方法内部通过super关键字获取来自父组件的props, 在该方法中，通常的操作为初始化state状态或者在this上挂载方法
            b) getDerivedStateFromProps: 不论是props变化还是state变化，也会调用
            c) render
            d) componentDidMount
        1. 更新阶段
            a) getDerivedStateFromProps
            b) shouldComponentUpdate: 用于告知组件本身基于当前的props和state是否需要重新渲染组件
            c) render
            d) getSnapshotBeforeUpdate: 此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些UI视觉上的状态
            e) componentDidUpdate
        2. 卸载阶段
            a) componentWillUnmount: 取消事件监听
1. React性能优化相关
    a) React自身:
        0. React凭借virtual DOM和diff算法拥有高效的性能
        1. React.memo: 将组件保持在内存中，方便快速读取
        2. React.lazy: 懒加载组件，通常情况下和路由配合, 实现按需加载
    b) webpack:
        0. 压缩编译文件
        1. babel自带变量缩短
        2. 代码切片
    c) 服务端渲染:
        0. 推荐使用next.js现成脚手架,他们考虑的更全面
2. React hooks组件与React Class组件区别, 以及他们的各优缺点
    a) 函数组件语法更短、更简单，这使得它更容易开发、理解和测试
    b) class组件存在生命周期，对组件操作可控性更强，但虽这hooks逐渐完善, 这个优点也慢慢被函数组件所吞噬
3. 组件通信类型
    a) 父子组件通信: props 
    b) 兄弟组件通信: 共同的父组件来管理状态和事件函数
    c) 跨多层级组件通信: Context API
    d) 任意组件: redux
4. 阻止事件冒泡
    a) event.preventDefault
5. Real DOM和 Virtual DOM 的区别？优缺点？
6. 说说React中的setState执行机制?
7. React中的key有什么作用？
8. 说说对React refs 的理解？应用场景？
9. 说说React Jsx转换成真实DOM过程？
# 项目类
0. 动态组件/动态表单, 方案制定

# webpack类
0. 说说你对webpack的理解？解决了什么问题？
1. 说说如何借助webpack来优化前端性能？ 
# 算法类
0. 快速排列
1. 说说你对栈、队列的理解？
2. 说说你对冒泡排序的理解？如何实现？应用场景？
3. 说说你对快速排序的理解？如何实现？应用场景？
4. 说说你对二叉树的理解？相关的操作有哪些？
5. 说说你对链表的理解？常见的操作有哪些？


<pre>
Udemy课程：Jonas Schmedtmann - https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15080910#overview
    # 1 ~ # 4: 介绍Node.js
    # 5( 完成笔记 )
        a) 00:00 - 为什么要使用Node.js?
        b) 3:49 - I/O model是什么? ( 等待研究 )
        c) 4:57 - Node.js实话项目，以及不适合项目
            0. 适合: 构建，视频网站，聊天工具, API交互web程序
            1. 不适合: 图像处理, 视频转换, 文件压缩
                a) 原因: 因为node.js社区没有相关开发
                b) 推荐: Python3
    # 6( 完成笔记 )
        a) 00:00 - Node.js小试牛刀 
        b) 2:29 - " node "命令, 可以进入node.js命令行模式, 书写一些js语法
            0. 退出命令: " .exit " | Ctrl+D
        c) 4:10 - node命令行模式下，"TAB"按键，显示全局可用变量
        d) 5:25 - 下划线的使用，下划线代表上一个返回的数据，如: 3*8 --> 24 --> _+6 --> 30
        e) 5:50 - 查看变量下的内容: 如 String，则在node命令行下输入: " String. " + 按2下TAB键 
        f) 6:09 - 清除屏幕: MAC --> commd + k; Window --> console.clear()
    # 7( 完成笔记 )
        a) 00:00 - 核心模块
        b) 1:35 - 命令：node xxx.js 运行js文件
        c) 3:40 - node.js下索引第三方库的写法
            0. fs库: 文件读写函数库
        d) 5:20 - 学会查看阅读node.js官方文档: https://nodejs.org/docs/latest-v11.x/api/index.html
    # 8( 完成笔记 )
        a) 00:00 - fs库的使用
        b) 3:15 - fs库读取文件
        c) 6:48 - fs库写入文件
            0. Date.now(): 当前时间戳( 毫秒为单位 )
    # 9( 完成笔记 )
        a) 00:00 - 4个重要的概念
            0. 同步( 阻塞代码 )
            1. 异步( 非阻塞代码 )
            2. 阻塞: 影响性能
            3. 非阻塞: 性能良好，需要callBack写法
        b) 1:58 - 同步，异步代码，对比
        c) 7:04 - I/O代表: 输入/输出
            0. node.js就是围绕着callBack来处理请求
        d) 8:04 - 注意: callBack写法 !== 一定是异步
        e) 9:19 - 回调地狱callBack Hell: 错误写法示例
    # 10( 完成笔记 )
        a) 00:00 - 异步读写文件
        b) 10:32 - 用回调地狱的形式，读写文件( 只是示例, 实际开发不可用 )
    # 11( 完成笔记 )
        a) 00:00 - 建立一个简单的server
        b) 7:21 - 完整的server代码
        c) 8:09 - 访问server
        d) 9:49 - Ctrl+C退出程序，注意：在修改完新的代码后，要重启服务
    # 12( 完成笔记 )
        a) 00:00 - 路由
        b) 2:08 - 通常路由是借助express库的，但是这里是小项目，用原生构建路由即可
        c) 8:19 - res.url反馈的是当前请求的路由路径，我们可以根据这个来做一些，简单的路由操作。同时为做更复杂的路由时，暂且引用"url库"
        d) 12:21 - res.writeHead改写包头使用示范
            0. 包的状态码: 如404，200, 等....
            1. "Content-type"熟悉: 可以声明返回数据类型, "text/html" 返回html数据
            2. "my-xxx": "也可以自定义添加一些内容"
    # 13( 完成笔记 )
        a) 00:00 - 构建一个简单的API
        b) 5:35 - "__dirname"代表当前目录，通常在node.js下使用配置文件路径( 索引库的路径时除外 )
        c) 9:51 - 发送json数据
        d) 13:41 - 改进API，让数据只读取一次，api接口直接反馈数据。( 利用JS代码的作用域，解决 )。
    # 14( 完成笔记 )
        a) 00:00 - HTML创建模板变量
    # 15( 完成笔记 )
        a) 00:00 - 加工HTML模板
        b) 8:26 - 正则替换模板变量
        c) 11:47 - 模板变量函数书写完毕
        d) 16:52 - node.js配合，将模板产品渲染
        e) 18:38 - 修复HTML产品模板错误
    # 16( 完成笔记 )
        a) 00:00 - 解析产品URL，并构建产品详情页
        b) 0:20 - 导入url库
        c) 2:46 - 使用url.parse函数解析当前url，获取url中的参数
        d) 4:46 - 解析url: 目的是将url与url中的参数分离，保证路由正常不受url中的参数影响访问
        e) 8:30 - 渲染产品详情页面代码
        f) 8:48 - 修正产品详情页HMTL，返回/overview页面按钮
    # 17( 完成笔记 )
        a) 00:00 - Node.js每一个文件就是一个模块
        b) 3:09 - Node.js的方式 module.exports 导出函数，使可以在全局调用
        c) 4:57 - Node.js的方式 导入本地模块
    # 18( 完成笔记 )
        a) 00:00 - npm
        b) 4:27 - npm init 初始化建立npm
    # 19( 完成笔记 )
        a) 00:00 - npm安装第三方库
        b) 1:56 - npm安装slugify到生产分支: npm install slugify - 更加易读的URL
        c) 3:49 - npm安装nodemon到开发分支: npm install nodemon --save-dev - 代码改变自动重启node服务
        d) 7:13 - npm在全局安装nodemon这样就能在全局使用，在不同项目间无需重复安装: npm i nodemon --global ( i 代表 install )
        e) 9:05 - 使用nodemon监听文件: nodemon index.js 
        f) 11:40 - npm在package.json快捷命令配置
    # 20( 完成笔记 )
        a) 00:00 - slugify库的使用
        b) 6:31 - 根据slugify官方文档知：此乃字符串加工库
        c) 7:44 - 任务：根据slugify官方文档，做一些测试
    # 21( 完成笔记 )
        a) 00:00 - 版本号，以及更新
        b) 00:00 - 版本号解析: 例如: 1.18.11 --> 主要版本号.次要版本号.补丁程序版本号
            0. 主要版本号: 出现重大改变时改变，可能不支持向下兼容
            1. 次要版本号: 改动不大增加新功能时使用，并且向下兼容
            2. 补丁程序版本号: 修复bug错误时使用
        c) 4:24 - npm更新package.json库的方式
            0. 查看可更新版本: npm outdated
            1. 更新指定版本例: npm install xxx@1.0.0
            2. 在package.json下: 
                a) "^1.0.0": "^"代表接受，次要版本，以及补丁版本的更新，不接受主要版本更新。
                b) "~1.0.0": "~"代表仅接受, 补丁更新 
                c) "*1.0.0": "*"代表接受全部更新( 不推荐 )
            3. 直接更新版本: npm update xxx
        d) 7:56 - npm删除库: npm uninstall xxx
    # 22( 完成笔记 )
        a) 00:00 - vscode配置和插件介绍
        b) 1:16 - 插件
            0. image preview: 代码图片预览
            1. DotENV: 查看当前本地环境
            2. Pug beautiful：用于HTML模板浏览使更漂亮
            3. TabNine：让tab键智能写一些代码片段( 不推荐 )
            4. TODO Highlight: 参考2:10视频，TODO起高亮作用
        c) 3:55 - Prettier 格式化代码插件：功能开启 settings ---> 搜索format ---> Format On Save 打勾
        d) 5:32 - 自定义prettier, 单引号变为双引号, 更多功能请查阅官方文档
    # 23( 无需笔记 )
        a) 00:00 - 回顾
    # 24( 无需笔记 )
        a) 00:00 - 后端原理简介
    # 25( 完成笔记 - 需要根据视频截图做笔记 )
        a) 00:00 - 网络工作原理
        b) 11:49 - 完整的，客户访问服务器，流程图
        c) 13:13 - TCP/IP总体概述: 传递数据时，分解成多个小块，去发送，每个小块都有IP通过路由来到达访问目标。
            0. 分解成小块的原因是：尽量减少网络上的传输拥挤
    # 26( 完成笔记 - 需要根据视频截图做笔记 )
        a) 00:00 - http通过调试器，看一些包的基本信息
        b) 0:56 - 浏览器设定为，无缓存状态, 方便调试
    # 27( 完成笔记 )
        a) 00:00 - 前端和后端开发
        b) 0:48 - Front End: 前端工程师
        c) 3:46 - Back End: 后端工程师
            0. 存储文件 + http( 前端后端沟通的桥梁 ) + APP( 逻辑程序 ) + DataBase( 数据库 ) = 组建成WEB服务器
    # 28( 完成笔记 )
        a) 00:00 - 区分: 静态网站，动态网站，API
        b) 3:58 - 区分图: 静态网站，动态网站( 服务端渲染 )
        c) 6:36 - Node.js非常适合构建API，当然也适合，服务端渲染的构建动态网站
        d) 6:52 - 区分图: 动态网站( 服务端渲染 )，API( 客户端渲染 )
        e) 9:08 - API的巨大优势( 跨平台 – 甚至有公司专门只提供API服务来收益 )
    # 29( 无需笔记 )
        a) 00:00 - 输入了解Node.js简介
    # 30( 完成笔记 - 需要根据视频截图做笔记 )
        a) 00:00 - Node.js依赖
        b) 1:54 - Node.js二大依赖
            0. Google V8
                a) 作用: 将node.js代码转为，计算机可以理解的机器码
                b) 底层: JS & C++
            1. libuv
                a) 作用: 
                    0. 异步循环( 处理简单的事情 )，线程池( 处理复杂的事情 )
                    1. 帮助JavaScript: 访问，文件系统，网络系统，等...
                b) 底层: C++
            3. 其它依赖:
                a) http-parser库: 用于解析http
                b) c-ares库: 处理一些DNS请求的内容
                c) OpenSSL库: 记录
                d) zlib: 压缩
        c) 3:41 - Node.js底层依赖图
    # 31( 完成笔记 )
        a) 00:00 - 进程，线程，线程池
        b) 02:29 - Node.js单线程执行
            0. 程序初始化，
            1. 顶级代码先执行
            2. 所需模块正常
            3. 注册回调事件: 向http server 监听端口等...
            4. 事件循环开始: Start Event Loop ( 防止阻塞 | Node体系的核心 )
        c) 04:00 - 线程池: 帮助单线程的Node.js解决太沉重的任务，防止阻塞事件循环
            0. Libuv提供线程池
            1. 线程池: 提供额外的4个线程, 用于处理沉重的任务
                a) 最大理论可配置128线程，但大多情况4个线程已经够用 
                b) 沉重任务交给线程，由底层决定，开发人员无法操控
            2. 线程池: 常用来解决
                a) 文件系统访问
                b) 加密相关，如缓存密码
                c) 压缩内容
                d) DNS查找
    # 32( 完成笔记 )
        a) 00:00 - Node.js架构核心 事件循环 | Event Loop | Node.js防止阻塞规则( 核心 )
        b) 4:09 - Event Loop | 事件循环4个队列阶段顺序:
            0. timer相关的callback队列：如settimeout
            1. I/O事件相关callback队列: 如，异步的文件系统访问，网络相关异步
            2. setImmediate callBack队列: 是特殊的计时器，更高级的用例中很重要
            3. Close callBack | 关闭回调队列: 如，web server停止运行
        c) 6:00 - 2个特殊队列
            0. nextTick()队列
            1. 微任务队列
            2，目的解决: somePromise异步函数
        d) 9:15 - Node.js单线程的优缺点 | Node.js防止阻塞规则( 核心 )
            0. 优点:
                a) 因为是单线程处理，主线程只处理简单的事件循环，繁杂交给线程池，因此资源占用小
                b) Node.js轻巧且易扩展
            1. 缺点:
                a) 单线程非常危险，因为一旦单线程被阻塞，程序将崩溃
            2. PHP优缺点:
                a) 优点: 每个用户对应一个线程
                b) 缺点: 占用资源高
            3. Node.js防止阻塞规则( 核心 )
                a) fs,crypto,zlib( 文件|加密|网络相关 )等库，不要使用非异步callback函数
                b) 事件循环下: 不要进行复杂的计算 
                c) 尽量减少小心，大型的json字符串解析
                d) 不要使用过于复杂的，正则表达式
    # 33( 完成笔记 )
        a) 00:00 - 实践事件循环体系( 核心 )
        b) 4:38 - 异步callback函数测试代码
        c) 9:49 - I/O下的异步顺序代码测试
        d) 12:12 - 加密库: crypto
            0. 异步加密函数: 
                a) 模型: crypto.pbkdf2( "密码", "( 未知 )", "密码迭代次数", "密码长度", "加密算法", "回调函数" )
                b) 例如: crypto.pbkdf2( "password", "salt", 100000, 1024, "sha512", () => {} )
        e) 13:57 - 加密时间统计, 以此方便判断，循环事件是否被阻塞
        f) 15:22 - 配置线程池数量( 最大128 ), 在配合时间统计，以此判断线程池对事件的影响
        g) 17:00 - 同步加密函数, 配合时间统计，用于测试被阻塞时的状态
    # 34( 完成笔记 )
        a) 00:00 - node.js 事件监听体系
            0. event emitter: 事件发射器 | 发起一个请求
            1. event listener: 监听事件
            2. attached callback function: 通过回调函数，返回请求结果
        b) 2:52 - 观察者模式流程图
    # 35( 完成笔记 )
        a) 00:00 - 观察者模式实战: 感觉像是在模拟node.js http服务模式
        b) 1:56 - 模拟: 促发事件
        c) 3:38 - 观察者模式源码实验: 以及监听事件写法
        d) 5:25 - 观察者模式，传入参数
        e) 7:04 - class写法：功能同上
        f) 10:58 - 构建简易的http服务
            0. 注意: 是一种新的写法，期功能逻辑函数，并没写道回调函数内。
            1. server.on("request", ()=>{}): 回调发送请求的逻辑
            2. server.on("close", ()=>{}): 回调关闭服务的逻辑
        g) 13:32 - 构建完毕简易的http服务
    # 36( 完成笔记 - TODO: 核心 )
        a) 00:00 - 流介绍
        b) 1:29 - 流的概念
            0. 目的: 无需接受完整文件，即可进行加工处理，大大提高了工作效率，降低了资源占用
                a) 原因: 即使接受不完整的文件，我们也可以进行处理工作，无需等待完整文件, 造成资源浪费
            1. 常用: 常用于处理视频
        c) 4:53 - 介绍4种流类型
            0. 可读取流
                a) pipe() - 管道，听说非常强大
                b) read()
            1. 可写入流
            2. 双工流: web socket，用于聊天工具
            1. 转换流: 可读写, 其实zlib Gzip就是对流的一种加工
    # 37( 完成笔记 - TODO: 核心 )
        a) 00:00 - 实战流
            0. 注意: 实战时，是用的观察者模式，并传统的模式
        b) 4:09 - 方法一: 传统的fs读取文件发送( 文件较大时，不推荐使用 ) 
            0. 推荐使用: 面对大文件时，推荐使用流，否则将有可能耗尽计算机资源
        c) 9:23 - 方法二: 流读取文件方式，并传输，源码
        d) 10:33 - 构建，流读取文件发生错误，时逻辑
            0. 状态码: 500, 因为是服务器出现错误
        e) 11:16 - 修正: 状态码修改，语法错误
        f) 13:02 - 方法三: 最佳的流构建方式
        g) 15:43 - 管道流方法，源码
    # 38( 完成笔记 )
        a) 00:00 - 导入/导出第三方库
        b) 4:07 - 3种导入库的方式流程图
    # 流额外知识: ( 完成笔记 )
        a) 第三方框架: 处理流有rtmp/hls/webrtc
            0. webrtc前端处理流的方式
        b) 回调地狱: 未找到解决方案( 等待研究 )
        c) 6-streams-github-video: 为node.js视频流服务实例
        d) req以及res的简称:
            0. 请求 - request req 
            1. 响应 - response res
    # 39( 完成笔记 )
        a) 00:00 - 实战: 导入导出模块, require/exports
        b) 1:46 - console.log( arguments ); 打印: 当前可调用库
        c) 3:30 - 打印: require底层的一些信息
        d) 7:00 - module.exports实战演示
        e) 7:34 - module.exports另外一种导出方式，实战演示
        f) 11:27 - exports配合require导入多个函数
        g) 15:09 - require配合module.exports另类调用方式( 新奇 )
    # 40( 无需笔记 )
        a) 00:00 - 主要目标学习异步函数
    # 41( 完成笔记 )
        a) 00:00 - 回调地狱写法演示( 生产环境切忽使用 )
        b) 5:14 - 安装superagent超级代理库
        c) 7:49 - 使用superagent库，请求api数据
        d) 9:26 - 将获取到的数据，保存在本地
            0. API测试: https://dog.ceo/api/breed/husky/images/random
            1. API测试: `https://dog.ceo/api/breed/${狗的种类}/images/random`
        e) 10:51 - 处理回调函数错误写法
    # 42( 完成笔记 )
        a) 00:00 - promise解决，地狱回调写法
        b) 5:47 - 因为superagent本身为promise故可以直接使用then等进处理，catch进行错误处理
    # 43( 完成笔记 )
        a) 00:00 - promise解决，地狱回调写法2, 以回调函数示例 
        b) 5:39 - promise代替回调函数写法( 避免地狱回调写法 - 核心 )
        c) 8:44 - promise，writeFile代替回调写法
        d) 10:09 - 使用，promise避免地狱回调, 写法
        e) 12:57 - 完善的promise避免地狱回调, 写法
        e) 14:26 - 完整的promise避免地狱回调, 写法
    # 44( 完成笔记 )
        a) 00:00 - 使用async/await避免地狱回调
        b) 6:31 - promise配合async，解决地狱回调写法，更加的简洁。 
        c) 7:39 - 完整的，async配合promise地狱回调解决方法
    # 45( 完成笔记 )
        a) 00:00 - async细节补充
        b) 6:12 - 细节补充: 即使async报错，也将执行，之后的then事件( 注意: async默认返回的为promise故可使用then进行搭配 )
        c) 7:43 - throw err; 故意引发错误，进行错误抓取
        d) 9:15 - 异步的IIFF: 做一些异步执行顺序测试
    # 46( 完成笔记 )
        a) 00:00 - 同时进行多个promise异步等待
        b) 2:59 - await配合Promise.all([])进行多个promise异步等待
        c) 4:18 - Promise.all将返回一个数组类型的，获取的异步数据
        d) 5:36 - 将数据结果，写入到本地 
    # 47( 无需笔记 )
        a) 00:00 - 准备学习express
    # 48( 无需笔记 )
        a) 00:00 - express简介: node.js开发框架，方便开发
    # 49( 完成笔记 )
        a) 00:00 - Postman测试API工具必备
        b) 0:48 - 官网下载: https://www.postman.com/downloads/
            0. 官方文档: https://learning.postman.com/docs/getting-started/introduction/
    # 50( 完成笔记 )
        a) 00:00 - 配置基本的路由
        b) 2:25 - 初始化npm配置( 比较标准 )
        c) 3:09 - 安装express@4版本，切忽安装5版本
        d) 8:47 - 启动: express hello word 程序接口
        e) 9:32 - 通过postman初步测试express构建的接口
        f) 11:11 - express发送json数据类型 
        g) 14:20 - express构建post类型api
    # 51( 完成笔记 )
        a) 00:00 - RESTful API 接口体系( TODO: 核心 )
            0. API行业标准
            1. 5个规范: 
                a) 清晰的API分为逻辑资源
                b) 结构化URL
                c) 使用标准的HTTP方法,请求/发送数据的方法
                d) JSON格式数据交互( 通常情况 )
                e) 无状态RESTful API标准 | 聪明的逻辑
        b) 3:25 - RESTful API 规范
        c) 8:51 - 请求、发送数据不同类型的意义
        d) 11:31 - 合理的URL接口，以及请求/发送包的类型
        e) 13:30 - JSON格式标准
        f) 15:50 - 无状态RESTful API标准:
            0. 注意: 区别于传统的API标准，RESTful API无状态标准
            1. 区别: 与前端约定好特定的路由，用于获取对应的数据，无需后端记录前一步接口信息做逻辑，可以直接根据当前前端信息直接做逻辑
            2. 比如: 请求不同分页数据
    # 52( 完成笔记 ) 
        a) 00:00 - 未来项目展示 | 处理Get请求
        b) 3:51 - 注意url: 有api版本 ( 非常智慧的习惯 )
        c) 10:33 - mock本地json数据，构建get请求
        d) 11:16 - 增加新的属性参数
    # 53( 完成笔记 )
        a) 00:00 - 处理POST请求 "增加" - 数据
        b) 2:58 - 使用express的中间件: 方便express加工，请求/发送的数据，也方便玩家调用数据
            0. 配置中间件: app.use( express.json() );
        c) 4:06 - postman建立项目
        d) 4:21 - postman保存实例
        e) 5:59 - postman在post请求下增加，入参方式
        f) 6:23 - 接受到post的入参: 因为express中间件的原因，故已将自动转为js对象格式
        g) 8:55 - 加工post的入参，因为没有数据库创建id，故手动创建id，后进行数据加工
        h) 11:33 - 将加工后的数据，保存本地( 因为没有数据库 )
            0. 注意: 状态码
                a) 200 - 表示, 正常
                b) 201 - 表示, 已创建 | 一般用于服务器响应请求
        i) 13:16 - 写入数据后，做出post响应返回数据
        j) 14:24 - 因为数据库，故无法即时更新数据并返回, 又因为fs读取文件的方式，故需要重启服务器，才能保存数据实时性( 实验环境 )
    # 54( 完成笔记 )
        a) 00:00 - 响应URL参数: "查询" - 返回的数据
        b) 4:01 - url带参方式:
            0. 多个带参
            1. 可选带参
            2. 这种url带参方式，有一个就够了，在多不容易管控
        c) 5:17 - 模拟数据库，根据url带来的id，来查询对应id数据
        d) 6:25 - 将id字符串类型转为number类型，string*1 转换为 number 类型，是js的一个小技巧
        e) 10:22 - 当查询到无数据时，返回404失败信息，配合find来做逻辑，不建议使用tour.length的写法
        f) 11:41 - 修正为配合find做404逻辑( 推荐 )
    # 55( 完成笔记 )
        a) 00:00 - 参数更新接口: "更新" - 更新对应id的数据
            0. 包类型: patch - 常用于更新数据逻辑
        b) 5:43 - 只做了响应逻辑，并未做写入逻辑，目的只是用于测试模拟API
    # 56( 完成笔记 )
        a) 00:00 - 删除接口
            0. 包类型: delete - 常用于删除逻辑
        b) 1:33 - delete逻辑，注意返回规范:
            0. 规范一: 包状态码为204 - 代表无内容的意思
            1. 规范二: 删除成功返回{ status: "success", data: null }
    # 57( 完成笔记 )
        a) 00:00 - 重构代码，使其更加规范化，提高维护性
        b) 1:36 - 重构: 返回全部数据逻辑
        c) 2:12 - 重构: 返回指定id数据逻辑
        d) 3:26 - 重构: 以此类推的重新构建
        e) 5:48 - 更优化路由逻辑写法: app.route("url").get(逻辑).post(逻辑) ( 推荐使用 )
    # 58( 完成笔记 )
        a) 00:00 - express中间件: 理论知识
    # 59( 完成笔记 )
        a) 00:00 - 构建自己的express中间件
        b) 6:15 - 构建自己的中间件函数，并且证明测试实验，中间件与API接口的执行顺序
        c) 7:59 - 中间件: 加工接受的包，增加时间属性，并且利用到API接口逻辑
    # 60( 完成笔记 )
        a) 00:00 - 使用第三方中间件
        b) 1:06 - 安装morgan: yarn add morgan --dev
        c) 2:30 - 便于维护性: 进行代码格式化分区
        d) 6:20 - 使用中间件: app.use( morgan( 'dev' ) )功能，渲染接受包的信息: 
            0. 例如: GET /XXXX 200 5.00ms - 8745
            1. 解析: 包类型 路由 状态码 耗费时间 - 包的大小
        e) 7:18 - 通常morgan('dev')作用:
            0. 提高开发便捷性
            1. 写入日志
        f) 8:13 - express常用文档: 
            0. express函数文档: http://expressjs.com/en/4x/api.html
            1. 中间件文档: http://expressjs.com/en/resources/middleware.html
    # 61( 完成笔记 )
        a) 00:00 - 构建user相关的API接口
        b) 2:53 - 构建user相关API路由
        c) 4:46 - 构建user相关的api逻辑( 模拟逻辑 )
        d) 5:56 - 在postman里构建: 结构化的测试API的节点
    # 62( 完成笔记 )
        a) 00:00 - express下更好路由写法
        b) 4:29 - 中间件express.Router(): 更好的路由写法
        c) 6:54 - 中间件express.Router(): 改进user路由
    # 63( 完成笔记 )
        a) 00:00 - 更好的文件结构
        b) 3:32 - 创建: routes文件夹: 放置api路由
            0. 注意: api逻辑以后将放置: controllers文件夹
        c) 8:51 - 创建: controllers文件夹: 放置api逻辑，用于配合api路由
            0. 使用MVC结构: model view controller
        d) 9:53 - 改进api逻辑导出方式，方便调用
        e) 11:35 - 将api逻辑调用至api路由: 方便配合
            0. 当前演示有二种调用方法
        f) 13:18 - user的api逻辑同上
        g) 15:46 - 创建: server.js
            0. 作用: 
                a) 存放express接口监听逻辑
                b) 数据库配置相关
                c) 错误处理相关
                d) 环境变量相关
            1. 注意: app的导入/导出
        h) 16:24 - 改写package.json的nodemon的启动方式
    # 64( 完成笔记 )
        a) 00:00 - 局部中间件使用: 入参中间件改写
        b) 3:48 - 局部中间件: express.Router().param: 获取url入参
            0. 注意: 仅在指定url起作用的'中间件' ( 非常棒 )
        c) 7:55 - 在逻辑区, 构建入参抓取逻辑
        d) 8:11 - 路由入参，中间件处理，调用逻辑区，入参抓取逻辑
    # 65( 完成笔记 )
        a) 00:00 - 链接多个中间件写法
        b) 5:10 - 构建: 指定路由api中间件，用于api的逻辑效验
            0. 状态码400: 入参效验失败
        c) 7:03 - 多中间件写法作用:
            0. 验证用户是否登陆
            1. 效验入参是否正确
            2. 验证用户权限是否达标
    # 66( 完成笔记 )
        a) 00:00 - express设定前端文件目录
        b) 2:30 - 目的: 可访问html...相关前端文件
            0. 使用express.static()中间件: 开放public文件夹
        c) 2:50 - 域名访问，前端文件
    # 67( 完成笔记 )
        a) 00:00 - 环境变量
            0. 目的: 方便根据不同的，环境变量，做一些逻辑，如访问不同的数据库等...
        b) 2:36 - app.get('dev'): 打印当前环境变量
        c) 3:37 - process.env: 访问查看全局变量
        d) 7:48 - 构建config.env环境配置文件
        e) 8:00 - vsocde插件: DotEnv, 有助于配置文件高亮显示
        f) 9:40 - dotenv库: 使项目利用config.env配置文件
            0. 安装dotenv: yarn add dotenv
            1. 使用dotenv，应用config.env配置文件
            2. 启动项目后: console.log( process.env );即可查看到应用的配置信息
        g) 10:29 - console.log( process.env );即可查看到应用的配置信息
        h) 12:19 - 发挥环境变量的作用:
            0. 根据环境变量: 做一些逻辑，如是否启用morgan等中间件功能
        i) 14:32 - 修正: 代码位置，config配置在app之前运行
        j) 15:59 - 不建议在package.json使用，命令行的方法设定环境变量
            0. 推荐: 分别构建，生产环境/开发环境的, config文件
    # 68( 完成笔记 | 已实战位置 )
        a) 00:00 - Eslint & prettier 配置
        b) 1:39 - 安装eslint: 突出开发语法错误
        c) 1:52 - 安装prettier
        d) 5:12 - 安装辅助，eslint，开发的库，目的是突出显示语法错误
            0. 安装: yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --dev
        e) 8:25 - 格式化工具
            0. ESLint官网配置规则参考: https://eslint.org/docs/rules/
            1. Prettier官网: https://prettier.io/
        f) 9:31 - 注意: PROBLEMS命令窗口，可以查看eslint报错位置
        g) 11:31 - ESlint规则演示: 
            0. 不进行console.log代码警告
            1. 变量没使用报错 ( 建议关闭 )
            2. const变量使用错误报错
        h) 12:11 - Eslint会配合vscode显示: 文件错误数量，以及位置
    # 69( 无需笔记 )
        a) 00:00 - MongoDb介绍
    # 70( 完成笔记 )
        a) 00:00 - MongoDb介绍
    # VsCode编程习惯配置 - 配合ESlint | 可兼容prettier( 默认禁用prettier | 完成笔记 )
        a) 安装必备组件:
            0. 安装: yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --dev 
        b) 配置: .eslintrc.json
            0. 配置相应eslint规则
        c) vscode配置:
            0. LF格式设定: 
                a) 编辑setting.json --> "files.eol": "\n",
            1. 关闭根据文件读取格式配置:
                a) 编辑setting.json --> "editor.detectIndentation": false, 
            2. 设定默认缩进为4个空格:
                a) 设置搜索: "editor.tabSize" --> 写入: 4
            3. 设定默认格式化规则为ESLINT
                a) 右键js代码内，弹出的菜单: 选择"格式化文档方式" --> 选择eslint选项
            4. 设定自动格式:
                a) 保存自动格式化
                    0. 设置搜索: "editor.formatOnSave" --> 勾选
                b) 快捷键自动格式化
                    0. 快捷键: Shift + Alt + F
        d) eslint问题查询，以及快速自动解决方法
            0. 在问题命令窗，查看错误，右击错误icon，选择autoFix all选项进行自动修复
            1. 使用上方vscode配置, 将根据eslint自动格式化
            

</pre>

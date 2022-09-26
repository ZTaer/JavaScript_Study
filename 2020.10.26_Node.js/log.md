<pre>
Udemy课程：Jonas Schmedtmann - https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15080910#overview
注意: 随着视频资源的时间更新迭代,日志可能与视频顺序有所偏差
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
# 50( 完成笔记 - 练习项目正式启动 )
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
    b) 2:57 - 自定义中间件逻辑
    c) 6:15 - 构建自己的中间件函数，并且证明测试实验，中间件与API接口的执行顺序
    d) 7:59 - 中间件: 加工接受的包，增加时间属性，并且利用到API接口逻辑
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
# 68( 完成笔记 )
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
    b) 1:14 - MongoDB与传统数据库的区别:
        0. 非关系数据库( NoSql ) !== 关系数据库
        1. 集合 !== 表
        2. Bson文档格式( 与json格式类似 ) !== 行数
    c) 4:18 - MongoDB能做什么?
    d) 7:39 - 关系数据库与，非关系数据库区别( 等待研究 )
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
# 71( 完成笔记 )
    a) 00:00 - macOs安装MongoDB
# 72( 完成笔记 )
    a) 00:00 - windows安装MongoDB
    b) 1:27 - 下载MongoDB: https://www.mongodb.com/try/download/community
    c) 3:54 - 安装完MongoDB后，创建文件结构
        0. 构建路径: C:\data\db
    d) 5:14 - 运行MongoDB, 在power shell中
        0. 启动路径: MongoDB/sever/x.0/bin
        1. ./mongod.exe: 启动数据库
        2. ./mongo.exe: 数据库shell
    e) 6:27 - 通过shell测试数据库是否正常
    f) 8:10 - 配置系统环境变量，使mongod.exe在全局即可调用
        0. setting界面搜索"env"
        1. 高级 --> 环境变量 --> 系统环境变量 --> 编辑'path'选项
        2. 增加MongoDB安装所在的: mongod.exe文件目录路径
        3. 即可在全局运行mongod.exe 或者 mongo.exe以启动数据库
# 73( 完成笔记 )
    a) 00:00 - 创建本地数据库
    b) 0:36 - 启动MongoDB的shell命令: mongo
    c) 4:09 - 建立数据库，并增加一条数据 ( 注意: 此时并无数据建模 )
        0. 启动数据库shell: mongo
        1. 建立数据库: use xxx-name
        2. 传入数据: db.xxxName.insertMany({对象数据})
            a) db === 当前数据库
            b) xxxName === 合集名称
            c) insertMany() === mongo写入数据命令
        3. 二种写入数据库，的方法
            a) insertOne({xxx})
            b) insertMany({xxx})
    d) 6:23 - 查看当前数据库中指定合集数据: db.xxxName.find() | 当前数据库下的.合集名称.find()
        0. show dbs: 查看当前创建的数据库: 默认有3个 admin , config , local
        1. use xxxName: 可以切换不同的数据库，也可以创建数据库
        2. show collections: 查看当前数据库下合集
    e) 7:04 - 退出数据库: quit()
# 74( 完成笔记 )
    a) 00:00 - MongoDB Shell | 写入数据 | 创建文档
        0. 掌握mongo shell原因是: MongoDB可以适用与任何语言做数据库，不仅仅只是node.js
    b) 3:53 - 写入数据库shell命令
        0. mongo | 启动MongoDB Shell
        1. show dbs | 显示当前数据库
        2. use xxxName | 切换到指定数据库、创建数据库
        3. db.xxxCollectionName.insertMany([ {xxx}, {yyy} ]) | 写入多条数据，MongoDB将自动创建_id
        4. db xxxCollectionName.find() | 显示xxxCollectionName合集内容
# 75( 完成笔记 )
    a) 00:00 - MongoDB Shell | 查询文档
    b) 1:43 - 过滤字符串 , 查询过滤字段内容:
        0. db.xxxCollectionName.find(): 查询合集内容
        1. db.xxxCollectionName.find({ xxxName: "xxx" }): 查询过滤指定字段内容
    c) 4:24 - 运算符过滤 , 单条过滤条件 | $lte
        0. db.xxxCollectionName.find({ price: {$lte: 500  } })
            a) 目的: 过滤出低于或者等于500的price值
        1. $lte === <=
    d) 5:35 - 运算符过滤 && 多条过滤条件 : | $lt, $gte
        0. db.xxxCollectionName.find({ price: {$lt: 500  }, rating: {$gte: 4.8 } })
            a) 目的: 过滤出低于500的price值, 并且, rating大于或者等于4.8值以上, 的数据
        1. $lt === <
        2. $gte === >=
    e) 10:00 - 运算符过滤 || 多条过滤条件 : | $or
        0. db.xxxCollectionName.find({ $or: [ {price: {$lt: 500  }}, {rating: {$gte: 4.8 } ]} )
            a) 目的: 过滤出，低于500的price值，或者，rating大于4.8值以上，的数据
        1. $or === ||
        2. $gt === >
    f) 11:55 - 运算符过滤 , 仅保留指定字段 : | 
        0. db.xxxCollectionName.find({ $or: [ { price: {$lt: 500  }, rating: {$gte: 4.8 } ], { name: 1 } }) ( 等待研究 )
            a) 目的: 
                0. 过滤出，低于500的price值，或者，rating大于4.8值以上，的数据
                1. 过滤出的数据，仅保留name字段 ( 注意: _id无法删除必须要有 )
# 76( 完成笔记 )
    a) 00:00 - MongoDB Shell | 更新文档
    b) 2:48 - db.xxxCollectionName.updateOne({ name: "xxxx" }, { $set: { price: 666 } } ) 
        0. 模型: db.xxxCollectionName.updateOne( {筛选目标} , { $set: { 更新内容 } } )
        1. 目的: 更新一项，过滤出目标，进行price值更新
    c) 4:09 - 练习: 过滤出price大于500，评分大于或者等于4.8
        0. db.tour.find( { price: { $gt: 500 }, rating: { $gte: 4.8 } } )
    d) 6:27 - db.xxxCollectionName.updateMany( { price: { $gt: 500 }, rating: { $gte: 4.8 } }, { $set: { premium: 666 } } )
        0. 模型: db.xxxCollectionName.updateMany( {筛选目标} , { $set: { 更新内容 } } )
        1. 目的: 更新多项, 过滤出目标，增加premium属性
    e) 7:18 - 替换过滤出的数据: db.xxxCollectionName.replaceOne(); 用法类似 ( 等待研究 )
# 77( 完成笔记 )
    a) 00:00 - MongoDB Shell | 删除文档
    b) 1:30 - db.xxxCollectionName.deleteMany({ rating: { $lt: 4.8 } }); 
        0. 模型: db.xxxCollectionName.deleteMany( {筛选删除目标} )
        1. 目的: 过滤条件，删除多项
    c) 2:15 - 删库跑路: db.xxxCollectionName.deleteMany( {} )
        0. 目的: 匹配所有的文档，进行删除
# 78( 完成笔记 )
    a) 00:00 - compress可视化MongoDB数据库 ( 可视化本地数据库, 或者远程数据库 ) 
    b) 0:40 - compress下载: https://www.mongodb.com/try/download/compass 
    c) 2:22 - compress链接MongoDB本地数据库
    d) 3:51 - 使用compress工具, 注入数据, 输入时可切换输入的数据类型
    e) 6:28 - 使用compress工具，过滤数据
# 79( 完成笔记 )
    a) 00:00 - MongoDB Atlas 远程数据库托管
    b) 1:54 - 官网: https://www.mongodb.com/cloud/atlas
    c) 2:23 - MongoDB Atlas: 创建一个新的项目
    d) 3:11 - 配置集群，默认免费
    e) 4:18 - 构建集群成功
# 80( 完成笔记 )
    a) 00:00 - compress: 链接我们的远程数据库
    b) 0:18 - 单机connet按钮配置ip，以及密码
    c) 0:51 - 配置ip，以及账号，以及随机密码
    d) 1:45 - 选择链接方式为compress
    e) 1:56 - 复制生成的链接到compress
    f) 2:42 - compress的connet选项，将自动填入内容，在填写密码即可，链接到远程数据库
    g) 3:07 - 构建新的数据库
    h) 4:14 - 在线上查看我们，在本地写入的数据
    i) 5:28 - 配置链接数据库的ip白名单
    j) 5:42 - MongoShell: 链接我们的远程数据库
    k) 6:28 - 复制链接，到本地MongoShell, 执行
        0. 注意: 退出已连接本地数据库的shell
        1. show dbs 检测数据库是否正常
# MongoShell命令总结( 完成笔记 )
    a) mongo.exe | 启动mongo shell
    b) 清屏: cls
    c) 创建/切换数据库: use xxx-xxx
    d) 突出Shell: quit()
    e) 查看当前状态类命令:
        0. show dbs | 查看当前数据库
        1. db | 查看当前所在数据库
        2. show collections | 查看当前所在数据库文档
    f) 查询类命令:
        0. db.xxxCollectionsName.find() | 查询当前合集内容
            a) 过滤类型:
                0. 单条件数据过滤: db.xxxCollectionsName.find( { title: "xxx" } )
                1. 多条件&&数据过滤:  db.xxxCollectionsName.find( { price: {$lte: 500}, rating: {$gte: 4.5} } )
                2. 多条件||数据过滤:  db.xxxCollectionsName.find( $or:[ {price: {$lte:500}}, {rating: {$gte:4.5}} ] )
                3. 多条件||数据过滤,仅保留指定字段: db.xxxCollectionsName.find( $or:[ {price: {$lte:500}}, {rating: {$gte:4.5}} ], {title:1})
            b) 过滤符:
                0. $gte === >=
                1. $gt === >
                2. $lte === <=
                3. $lt === <
                4. $or === ||
    g) 写入类命令:
        0. db.xxxCollectionsName.insertOne({}) | 写入一条数据
        1. db.xxxCollectionsName.insertMany([{},{}]) | 写入多条数据
    h) 更新类命令:
        0. db.xxxCollectionsName.updateOne({过滤条件},{ $set:{ 更新内容 } }) | 更新单条数据
        1. db.xxxCollectionsName.updateMany({过滤条件},{ $set:{ 更新内容 } }) | 更新多条数据
        2. db.xxxCollectionName.replaceOne(); 用法类似 ( 等待研究 )
    i) 删除类命令: 
        0. db.xxxCollectionName.deleteOne({过滤条件}) | 删除单条数据
        1. db.xxxCollectionName.deleteMany({过滤条件}) | 删除多条数据
        2. db.xxxCollectionName.deleteMany({}) | 删除所有的数据 ( 注意: 危险，此乃删库跑路必备命令 )
# 81( 无需笔记 )
    a) 00:00 - Mongoose库: 作用将node.js与MongoDB数据库相结合使用
# 82( 完成笔记 )
    a) 00:00 - Node.js连接远程数据库/本地数据库
    b) 0:42 - Node.js连接远程数据库, 获取连接配置信息
    c) 0.49 - 更详细的演示，复制url连接，注意url键值变量替换
    d) 1:58 - 连接url键值替换:
        0. mongodb+srv://oo7:<password>@cluster0-test-oo7.yeesp.mongodb.net/<dbname>?retryWrites=true&w=majority
        1. <password>: 密码
        2. <dbname>: 数据库名称
    e) 3:49 - config.env配置: 本地数据库，以及远程数据库，信息
        0. 注意: 也就是说，node.js是可以连接多个数据库的
    f) 4:43 - 安装: mongoose@5版本
        0. 命令: yarn add mongoose 
    g) 7:02 - server.js: 远程数据库URL加工: 环境变量数据，替换PASSWORD
    h) 9:01 - server.js: Node.js结合Mongoose配置远程数据库逻辑
    i) 11:01 - server.js: Node.js结合Mongoose配置本地数据库逻辑 
    j) 12:16 - 初始化数据库, 防止出错，准备填充数据
# 83( 无需笔记 - 回忆remeber )
    a) 00:00 - 什么是Mongoose?
# 84( 完成笔记 )
    a) 00:00 - mongoose.Scheme构建数据模型
        0. 目的: 声明数据结构, 强大的数据效验功能测试
    b) 6:02 - 构建tour数据的mongoose.Scheme数据模型
# 85( 完成笔记 )
    a) 00:00 - 创建文档 | 数据写入到数据库，以及mongoose.Scheme强大的效验功能测试
    b) 4:40 - mongoose存储数据: .save() 数据存入数据库中, 有错误处理逻辑
    c) 6:27 - mongoose.Scheme发挥了作用: 阻止不正确的写入数据方式 ( 核心: 牛逼 )
    d) 6:47 - mongoose.Scheme属性: unique | 值唯一
# 86( 无需笔记 )
    a) 00:00 - 后端架构MVC
# 87( 完成笔记 )
    a) 00:00 - 构建MVC架构的程序
    b) 2:00 - Models: 放置mongoose.model，的mongoose.Scheme
    c) 3:06 - Controllers: 导入mongoose.Scheme使用
    d) 4:22 - Controllers: 删除无用的代码
    e) 5:58 - routes: 调整无用的中间件
# 88( 完成笔记 )
    a) 00:00 - .create(): 构建新的数据，写入至数据库
        0. .save(): 功能类似
    b) 8:38 - 构建API: 新建数据接口，并做错误处理逻辑
        0. 400状态码: 代表处理错误
    c) 9:46 - PostMan测试API接口: 成功情况测试
        0. mongoose.Scheme会直接无视，没有在Scheme定义过的入参( 核心: 我喜欢 )
    d) 10:34 - PostMan测试API接口: 失败情况测试
    e) 11:34 - 此错误处理逻辑，提示信息: 生产环境，不可使用
# 89( 完成笔记 )
    a) 00:00 - 查询文档 | 查询数据库 | 文档查询
    b) 2:57 - .find(): 查询数据
    c) 5:15 - 通过中间件拿到url的入参id，进行文档查询
        0. .findById(): 通过id查询数据
    d) 6:49 - .findById数据库底层规则写法
# Mongoose命令总结( 完成笔记 - 长期维护 ):
    a) Scheme语法总结:
        0. new mongoose.Schema({ ...xxx }): 构建Schema
        1. 属性功能:
            a) type: 指定数据类型
                0. String: 字符串类型
                1. Number: 数字类型
                2. Bollen: 布尔类型
                3. [xxx]: xxx Array类型
                    a) [Date]: 时间Array类型
                    b) [String]: 字符串Array类型
                    c) [Number]: 数字Array类型
            b) required: 是否必填
                0. 报错提示写法: [ true, '报错信息' ]
            c) unique: 是否唯一
                1. 意思: 当前属性，不可重复出现在数据库中 
            d) trim: 清除字符串，二端空格
            e) default: 默认值
            f) select: 永远限制不展示字段, 设定select: false无论任何情况都将不输出此字段数据
            g) maxLength | minLength : 字符串最大最小长度效验
            h) min | max : 效验数字，最大，最小值
            i) enum枚举值: 仅允许存储指定字符串
                0. 注意: 仅支持String类型，不支持Number类型
                1. 使用规范: { values: ["xxx","yyy"], message: "错误信息" }
        2. 实战参考: JavaScript_Study\2020.10.26_Node.js\9-node-mongodb\models\tour.models.js 
    b) 功能函数总结:
        0. mongoose.connect( mdb链接, 功能属性参数 ): 连接数据库
        1. mongoose.model( "MongoDB存储合集名称", 相关联的mongoose.Schema ): 决定数据存储位置并将合集与SCHEMA相连 ( 核心 )
            a) model.prototype.create(): 写入文档 | 写入数据至数据库
            b) model.prototype.save(): 与create功能相似
            c) model.prototype.find( { 运算符 } ): 查询文档 | 查询数据库内容
            d) model.prototype.findById(id): 根据id查询文档内容 | 根据id查询数据库内容 
            e) model.prototype.findByIdAndUpdate( id, 更新内容, 属性配置 ): 根据id更新文档内容 | 根据id更新数据库内容
            f) model.prototype.findByIdAndDelete( id ): 根据id删除文档内容 | 根据id删除数据库内容
            g) model.prototype.sort(): 根据字段排序
            h) model.prototype.select(): 限制字段
            i) model.prototype.skip().limit(): 分页
                0. model.prototype.skip(): 跳跃数据
                1. model.prototype.limit(): 限制数据数量
            j) model.prototype.countDocuments(): 统计查询数据结果 
# 90( 完成笔记 )
    a) 00:00 - 更新文档 | 修改数据库
    b) 6:41 - Mongoose官方文档: https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
        0. 文档规范示意:
            a) 在new对象使可用: Model.prototype.xxx();
    c) 10:21 - 根据url提供的id，更新指定id数据，并有效验逻辑
# 91( 完成笔记 )
    a) 00:00 - 删除文档 | 删除数据库中的内容
    b) 2:22 - 删除指定id数据库逻辑
# 92( 完成笔记 )
    a) 00:00 - 根据实际数据，构建Mongoose.Schema
    b) 0:47 - PostMan获取真实数据
    c) 1:31 - PostMan存获取的json数据
    d) 3:18 - 开始: 根据真实数据，构建Mongoose.Schema
    e) 5:32 - Mongoose.Schema语法: 
        0. default: 设定默认值
    f) 6:43 - Mongoose.Schema语法:
        0. trim: 清除字符串二端空格
    g) 11:03 - Mongoose.Schema语法:
        0. required: 强制性填写数据 ( 写法特殊 )
            a) 模型: required: [ true, " 报错信息 " ]
        1. Mongoose.Schema数据类型:
            a) type: [String] | 数组类型数据结构, 例如: [ "xxx","yyy" ]
    h) 13:01 - Mongoose.Schema数据类型:
        0. type: Date | 日期类型
        1. type: [ Date ] | 数组日期类型
        2. 推荐: 存储时间戳, 例如: Date.now()
    i) 15:00 - 添加真实的数据，用于验证Mongoose.Schema是否正常工作 ( 注意: 删除id字段 )
# 93( 完成笔记 )
    a) 00:00 - 导入开发数据至MongoDB
    b) 2:38 - 构建导入数据库数据，脚本
        0. 脚本功能
            a) 连接数据库，且有写入权限
            b) 读取mock数据，写入数据库中
            c) Mongoose.Schema要监控写入的数据
    c) 7:32 - 构建: 删除数据脚本函数
    d) 9:07 - 修正: 文件路径读取错误的问题
    e) 10:09 - js脚本入参:
        0. process.argv全局变量: 查询运行脚本入参
    f) 11:23 - 根据入参做逻辑
    g) 12:35 - process.exit()全局变量函数: 脚本退出
    h) 14:20 - 修正mock数据错误
# 94( 完成笔记 ) 
    a) 00:00 - API基本过滤写法: 构建url过滤api功能
    b) 2:13 - PostMan带url入参，使用方法
    c) 3:36 - req.query获取url入参 ( 核心 )
    d) 4:46 - 调处nodemon日志, 方便开发
    e) 6:09 - 注意: api数据结构，非常的标准化
        0. 当查询数据时:{ 
            status: '状态', 
            result: 查询结果数量, 
            data: { xxx: [ 数据 ] } 
        }
    f) 7:50 - 查询数据二种方式: 当前为特殊的mongoose写法第二种，某些情况非常有用( 等待研究 )
    g) 12:57 - forEach过滤写法,配合delete运算符 ( 核心 )
        0. 目的: 过滤出不在指定范围内的字段数据
        1. 核心: delete运算符 
    h) 13:40 - forEach配合delete过滤结果
    i) 15:03 - 这种写法的目的: 是为了扩展api更能更加的方便
    j) 18:35 - 初步查询构建, 注意: 未完整版
# 95( 完成笔记 )
    a) 00:00 - API高级过滤写法: 更好的API ( 注意: 当前为非安全API )
    b) 2:59 - 命令高级过滤，老师想打造一个高级过滤API，配合MongoDB查询命令
        0. 疑问: 
            a) 高级过滤API虽然强大，那如何考虑性能问题?
            b) 既然可以使用mongodb命令，那安全问题如何解决?
        1. 核心: 实现此功能的核心，在于，url加入mongodb过滤运算符，并做相应逻辑
    c) 7:25 - 目的: 将指定过滤运算符，通过正则进行加工替换，加工成Mongodb过滤命令
        0. 注意: 正则解析，记得搞笔记
    d) 8:58 - url入参，过滤命令转换成功
    e) 9:31 - 非安全: url入参高级过滤查询数据代码
    g) 10:52 - 非安全: 高级过滤API使用演示
# 96( 完成笔记 )
    a) 00:00 - API排序写法:
    b) 3:38 - 基本的排序写法: Model.prototype.sort();
    c) 4:42 - 默认sort为升序，注意入参，加-号为降序
    d) 8:18 - 为第二排序条件做实验，将字段数据相等的值，进行不等，方便观测排序结果
    e) 8:47 - 多排序条件: 代码实际运行结果
    f) 8:58 - 多排序条件代码: 这里以price为第一排序条件，ratingsAverage为第二排序条件
        0. 注意: Model.prototype.sort(); 默认为升序，url入参加‘-’号时为降序
    g) 10:03 - 默认为: 数据创建时间排序
# 97( 完成笔记 )
    a) 00:00 - API限制数据字段写法: 仅需要指定字段数据
    b) 4:01 - 限制字段逻辑
    c) 4:13 - 限制字段逻辑测试
    d) 4:41 - 注意: url参数'-'删除数据指定字段
    e) 5:54 - 永远限制不展示字段: 在Mongoose.Schema设定select: false无论任何情况都将不输出此字段数据 
# 98( 完成笔记 )
    a) 00:00 - API分页写法: 
    b) 4:24 - mongoose分页函数用法
    c) 6:14 - 设定默认分页为1，数据数量限制为100
    d) 8:04 - 构建分页代码
    e) 9:01 - 分页实战演示
    f) 9:35 - 处理: 超出分页范围请求逻辑
    g) 13:04 - 处理: 超出分页范围请求逻辑代码
# 99( 完成笔记 )
    a) 00:00 - API针对业务要求，别名路由获取数据，写法: 如最评分最好的5条路线
        0. 单独设定一个路由，通过配置默认参数，来获取数据
    b) 1:57 - 评分最好的5条路线: 无别名路由情况下，请求参数
    c) 4:05 - 配置别名路由中间件: 方便加工url入参
    d) 6:34 - 中间件代码: 增加url入参
    e) 8:04 - 别名路由实战演示
# 100( 完成笔记 )
    a) 00:00 - 重构API: 使维护性以及灵活性更强
        0. 我靠，竟然用class来重构，我不喜欢
    b) 7:48 - 功能转移进class，并使用class方法来调用函数
    c) 8:21 - 返回整个calss
    d) 10:44 - 删除主动报错逻辑
    e) 11:08 - 提示: class的入参: this.query === Tour.find()查询函数 | this.queryString === req.query传url入参
    f) 15:08 - 将class api 单独放入到 utils 文件夹中，并导入使用 ( 等待研究 )
# 101( 完成笔记 )
    a) 00:00 - 聚合管道计算 | 初步进行数据分析 ( 核心 - 屌爆 )
    b) 10:44 - Model.prototype.aggregate([]);魔法
        0. 计算数据平均值，最大值，最小值
        1. 运算符文档: https://docs.mongodb.com/manual/reference/operator/aggregation/match/
    c) 11:42 - 构建路由，方便测试api数据
    d) 12:38 - 聚合计算查询: 也需要await
    e) 13:04 - 聚合计算查询: 测试成功
    f) 14:29 - 聚合计算查询: $sum:1 加数据数量计算，"$sum: $字段名" 以及数量总和计算
    g) 14:45 - 测试api
    h) 16:12 - 根据difficulty进行数据分析 ( 魔法级别 - 核心 )
    i) 16:19 - 根据ratingAverage进行数据分析  ( 魔法级别 - 核心 )
    j) 16:25 - 测试api
    k) 17:35 - $toUpper运算符: 大写字段
    l) 18:47 - $sort: 升序排序
    m) 19:30 - $ne: 不等于运算符，其match数据结果将不包含指定字段
    n) 19:47 - 测试api 
    o) 19:57 - 注意: 聚合管道计算查询，可以进行多次match查询计算
# 102( 完成笔记 )
    a) 00:00 - 聚合管道计算 | 数据分析解决业务逻辑 ( 核心 - 屌爆 )
        0. 业务要求: 计算年度中，最忙的几个月时间
    b) 2:11 - 构建: api路由
    c) 7:08 - 解构运算符: $unwind, 通过解构指定字段数组，迭代出多条数据，方便进行数据分析
        0. 例: { name: 123, start: [1,2,3] }
            a) $unwind计算后: { name: 123, start: 1 } { name: 123, start: 2 } { name: 123, start: 3 } 
    d) 9:52 - $match运算符: 配合$gte,$lte匹配过滤出，符合指定日期范围内的数据
    e) 11:05 - 时间相关运算符，官方文档: https://docs.mongodb.com/manual/reference/operator/aggregation/#date-expression-operators
    f) 12:46 - $month运算符，提取时间字段，月份，在进行$group数据分析
    g) 14:06 - $push运算符: 构建数组类型数据，因为有多种旅游团
    h) 16:45 - $project运算符: 删除指定字段
        0. $sort - 在根据numTourStart字段数据，进行降序
    i) 17:26 - $limit运算符: 限制数据量，依然起作用
    j) 18:53 - 多读读官方文档将掌握更多骚操作: https://docs.mongodb.com/manual/reference/operator/aggregation/
# 103( 完成笔记 )
    a) 00:00 - mongoose: 虚拟属性
    b) 4:35 - mongoose.schema增加入参: 允许虚拟属性输出
        0.  { 
                toJSON: { virtuals: true }, // 虚拟属性变为真实
                toObject: { virtuals: true } // 虚拟属性可被输出
            }
    b) 4:58 - 定义虚拟属性，并根据真实属性计算，并将虚拟属性输出
        0. 注意: 虚拟属性是不会存储在数据库中的
# 104( 完成笔记 )
    a) 00:00 - mongoose: 存储中间件 | 文档中间件 | post hooks
    b) 2:26 - mongoose.pre('save',function): .save .create 保存前，促发中间件
        0. 注意: insertMany()不会促发此中间件
        1. this: 代表当前准备存储的数据 ( 核心 )
    c) 4:49 - 保存数据: 用于测试是否促发了mongoose中间件
    d) 5:42 - mongoose中间件: 构建代码，并将即将保存的数据，打印出
    e) 6:19 - 安装: yarn add slugify
    f) 8:39 - mongoose中间件: 也需要next()来执行下一步
    g) 9:08 - 将新增字段补充到mongoose.schema
    h) 12:59 - mongoose.post('save'function): 响应返回给前端数据时促发
        0. 注意: 中间件可以有多个 --> 中间件next() --> 在去执行其他中间件 --> 如果无其他中间件则回归到主逻辑 ( 核心 )
# 105( 完成笔记 )
    a) 00:00 - mongoose: 查询中间件 
    b) 1:55 - mongoose.pre('find',function); 实例: 构建隐藏vip客户数据
    c) 2:36 - 配置secreTour的mongoose.schema,方便配合查询中间件做逻辑
    d) 4:48 - 查询中间件，在某条数据，检测到secreTour为true时，通过$ne运算符进行屏蔽数据
        0. 目的: 使secreTour 为true时，单挑数据, 不会出现在Model.prototype.find()数据查询结果中
        1. 注意: 
            a) 中间件拦截不到的逻辑，有可能被查询, 比如Model.prototype.findId(), 需要其他相应逻辑处理
            b) secreTour字段,的mongoose.schema的配置
    e) 5:01 - 测试api
    f) 7:10 - 查询中间件流程: 客户端api发起查询请求 --> 查询中间件 --> api逻辑 --> 返回数据
    g) 8:55 - 处理查询中间件，非find可查询隐秘数据问题:
        0. 处理方式一: 正则表达式 ( 推荐 )
            a) 正则: /^find/ - 匹配所有以find开头的字段
        1. 处理方式二: 对应findxx函数做相应中间件逻辑 ( 不推荐 )
    h) 9:45 - mongoose中间件查询文档: https://mongoosejs.com/docs/middleware.html#types-of-middleware
    i) 13:41 - mongoose.post(/^find/, function): 查询结束时，此中间件将被调用
        0. 可用来处理查询结果逻辑
        1. 也可以计算，数据库查询时间
# 106( 完成笔记 )
    a) 00:00 - mongoose: 聚合中间件
    b) 1:04 - mongoose.pre('aggregate',function)实例: 接着在聚合这里，处理隐秘vip客户数据，的逻辑
        0. 因为: 数据分析时将隐秘客户信息数据一起，分析了， 现将隐秘客户数据排除
    c) 1:45 - 中间件的作用: 避免多余的重复代码 ( 中间件的意义 - 核心 )
    d) 5:42 - 聚合中间件: 通过this.pipeline拦截，聚合命令，并做相应逻辑，从而过滤掉隐秘客户数据
        0. this.pipeline()可以查看到，当前准备执行的"聚合运算符"数组
        1. .unshift(): 在数组末尾加入相应，"聚合运算符命令"，做相应逻辑
            a) .unshift()为标准的处理array的js函数，并非是第三方, 参考es5
# 107( 完成笔记 )
    a) 00:00 - 数据验证 - 内置验证器
    b) 1:03 - 非常重要: 黄金准则 - 不直接接受用户输入的数据，为了安全性必须要做好数据效验, 以及清理无用数据
    c) 3:28 - mongoose.schema数据效验:
        0. maxLength | minLength - 字符串最大最小长度效验
    d) 4:09 - 测试api
    e) 5:03 - 关闭效验: 则更新api接口，数据通过，但是建议开启效验
    f) 6:38 - mongoose.schema数据效验:
        0. min | max - 效验数字，最大，最小值
    g) 8:59 - mongoose.schema数据效验: 
        0. enum枚举值: 仅允许存储指定字符串
        1. 注意: 仅支持String类型，不支持Number类型
# 108( 完成笔记 )
    a) 00:00 - 自定义验证器
    b) 5:02 - 构建: 自定义效验器
        0. 注意: 效验函数只能返回true/false, true代表效验通过，false代表效验失败
        1. VALUE: 能抓取到，对应的入参
    c) 6:26 - 注意: this.xxx读取相应字段入参，只能在mongoose.schema淫威下使用
    d) 7:56 - 第三方效验库( 已内置mongoose ): https://github.com/validatorjs/validator.js
        0. 注意: 虽然已经内置validator, 但依然要安装才能使用
    e) 9:48 - 安装validator: yarn add validator
    f) 10:03 - 导入validator效验
    g) 11:38 - 第三方库validator的使用:
        0. validator.isAlpha: 验证字符串是否仅包含字母
    h) 11:56 - 测试api，第三方库validator
        0. 如果name字段中，包含数字则效验不通过
# 109( 无需笔记 )
    a) 00:00 - express处理错误简介
# 110( 完成笔记 )
    a) 00:00 - ndb调试工具
    b) 1:05 - 安装ndb: npm install ndb --global --save-dev | yarn add ndb --dev
    c) 2:25 - 配置package.json, debug
    d) 4:00 - ndb工具编辑代码，与vscode编辑代码同步
    e) 5:01 - 打断点，并运行当前代码
    f) 6:29 - node.js 5个基本状态信息变量
    g) 7:36 - 调试器右侧Scope --> Local --> app --> _router --> stack: 查看当前中间件堆栈信息
    h) 8:52 - 调试器右侧Scope --> Global --> process --> env: 存储着当前环境变量
    i) 11:58 - 断点调试: 这里可直接看到，当前代码的变量参数
        0. 断点: 代码将执行到断点时，停止执行
    j) 13:53 - 跳过断点按钮: 继续执行代码按钮 
    k) 14:11 - 跳过断点后，代码正常执行
    l) 14:45 - 演示: 故意搞错代码，来进行debug演示
    m) 16:09 - 演示: 打断点, 并单击"执行下一步代码"按钮
    n) 16:47 - 演示: 多此进行下一不代码按钮，鼠标悬停，查看当前变量状态，以找出bug
    o) 17:51 - 演示: 修正bug继续执行代码
    p) 17:32 - 演示: 退出当前功能按钮: 跳过当前函数逻辑, 进入跨越到下一步逻辑
    q) 18:52 - 演示: debug个到，输出数据，可以在右侧变量栏中，看到查询的数据
# 111( 完成笔记 )
    a) 00:00 - 处理不存在的路由地址
    b) 5:36 - 处理不存在的路由逻辑写法
    c) 5:42 - 测试逻辑
    d) 6:43 - 注意: 处理不存在路由逻辑，要放置在，路由最下方，否则其他路由将无法正常执行
    e) 6:53 - 测试逻辑
# 112( 完成笔记 )
    a) 00:00 - 处理错误概述
    b) 2:50 - 错误类型:
        0. 操作错误：
            a) 如: 访问不存在的路由
        1. 编程错误:
            a) 如: bug
        2. 解决错误处理方式:
            a) 目的: 是打算使用，集中错误处理中间件
# 113( 完成笔记 )
    a) 00:00 - 构建全局错误处理中间件
    b) 7:34 - 构建: 简易的，全局错误处理逻辑; 
        0. 构建: 为方便测试，制作错误，并设定错误状态码，以及传递错误消息，方便测试全局中间件错误逻辑是否正常工作
    c) 8:14 - 测试错误逻辑
# 114( 完成笔记 )
    a) 00:00 - 重新构建: 错误处理组件
    b) 3:14 - 根据状态码，改写错误status信息
        0. "xxx".startWith('x'): 检测字符串，开头是否符合指定字符串
    c) 4:53 - 留下this.isOperational属性: 伏笔 ( 等待研究 - 目前了解模糊 )
    d) 5:31 - err.stack: 错误堆栈追踪
    e) 7:22 - 构建: AppError 错误处理组件
        0. Error.captureStackTrace( this, this.constructor ): 报告错误堆栈信息 ( 等待研究 - 目前了解模糊 )
    f) 7:43 - 导入 AppError 组件
    g) 8:23 - 使用 AppError 组件配合: 处理错误路由逻辑
    h) 8:29 - 测试逻辑
    i) 10:16 - 将错误逻辑: 移至errorController.js, 方便维护
    j) 10:50 - 使用: 错误逻辑
    k) 10:58 - 测试逻辑
# 115( 完成笔记 )
    a) 00:00 - 抓捕异步函数中的错误
        0. 目的: 避免接口api逻辑重复书写try catch
    b) 4:05 - 高阶函数: 直接传递async函数，并在高阶函数内做catch统一处理
        0. 目的: 避免接口api逻辑重复书写try catch, 抓取错误做统一处理
    c) 5:18 - 根据高阶函数，调整接口函数逻辑写法
    d) 7:28 - 修正高阶函数写法: 之所以这么写，是为了避免函数被立即执行，只是返回一个逻辑，而已.
    e) 8:26 - next可将错误，传递给，全局错误中间件处理
    f) 10:14 - 测试错误抓取逻辑
    g) 11:08 - 将高阶函数，移动至: utils\catchAsync.js方便维护
    h) 13:20 - 将接口逻辑，应用高阶函数
        0. 注意: 
            a) async函数删除try catch
            b) 增加next入参, 方便高阶函数抓取错误
    i) 14:04 - 测试逻辑
# 116( 完成笔记 )
    a) 00:00 - 增加404错误
    b) 1:33 - 错误演示: 切忌不可将catchAsync在route下使用，因为有的一些方法是同步的，一些方法是异步的，不容易debug
        0. 尽量将catchAsync写在controllers下
    c) 6:04 - 使用: 主动报错逻辑，并提供报错信息，以及状态码改变
# 117( 完成笔记 )
    a) 00:00 -完善AppError错误处理组件 
    b) 2:15 - 完善错误处理组件, 根据不同环境返回报错信息
        0. err - 完整的报错信息
        1. err.statusCode - 错误状态码信息
        2. err.message - 错误信息
        3. err.status - 错误状态信息
        4. err.stack - 错误堆栈信息 ( 注意: 仅开发环境返回此数据 )
    c) 3:39 - 将生产环境，开发环境，返回报错信息函数拆分出来
    d) 4:42 - 启用伏笔: AppError 下的 this.isOperational
        目的: 避免将一些开发环境报错信息，返回给生产环境用户
    e) 6:06 - this.isOperational作用: true时返回正常报错信息，false返回通用型报错信息，避免泄露开发报错信息
    f) 7:49 - 方便开发查看报错信息console.err()
# 118( 完成笔记 )
    a) 00:00 - 处理数据库报错信息
        0. 3种数据库保存类型 - 当前
        1. 注意: 效验错误类型，根据error.stack下的开头字符串进行错误类型效验 ( 原视频中错误属性name已在新版本消失 )
            a) .startsWith()验证字符串开头, 返回true/false: "X123,123".startsWith("X123");
    b) 0:40 - 第一种错误: casterror 因数据库返回的错误信息演示
        0. 注意: 切换为开发环境查看报错信息
        1. 复现: tour查询文档返回接口
    c) 1:58 - 第二种错误: MongoError Mongoose效验错误类型
        0. 复现: tour创建文档接口，如title重复
    d) 2:43 - 第三种错误: ValidationError 在写入以及更新,数据库时报错
        0. 复现: tour更新文档接口，如评分属性超过mongoose.schema规定
    d) 5:45 - 检测到CastError数据库错误，单独给数据库错误，做逻辑
        0. 注意: error.name === CastError 时为数据库报错信息 
    e) 8:08 - 构建: 数据库报错函数逻辑
    f) 8:31 - 数据库错误处理逻辑:
        0. 逻辑流程: 
            a) 识别CastError为数据库报错类型
            b) 通过相应的函数逻辑处理，修改error属性
            c) 返回error对象属性信息
    g) 8:48 - 启动生产环境，老师的为mac可以用命令，windows手动更改变量环境吧
# 119( 完成笔记 )
    a) 00:00 - 第二种错误: MongoError Mongoose效验错误类型 | 处理重复字段数据库报错逻辑
    b) 1:17 - 处理因重复字段数据库报错逻辑
        0. 核心: error.code === 11000: 代表重复字段错误
    c) 5:43 - 构建: 处理因重复字段数据库报错函数逻辑
        0. 注意: 正则是用于抓取，重复字段关键字
# 120( 完成笔记 )
    a) 00:00 - 第三种错误: ValidationError 在写入以及更新,数据库时报错 | 处理mongoose验证错误
    b) 2:36 - ValidationError错误类型: mongoose错误
    c) 2:59 - 根据ValidationError错误类型做错误处理逻辑
    d) 3:47 - 初步构建错误处理逻辑
    e) 3:57 - 因为错误类型不止一个，所以要便利字段，来恢复错误信息
    f) 6:06 - 完整的错误处理逻辑
    g) 6:40 - 错误等级: 处理错误级别
        0. 轻微错误
        1. 中级错误
        2. 严重错误
# 121( 完成笔记 )
    a) 00:00 - 处理express之外的错误，比如数据库连接失败 | 最后的安全网
    b) 2:33 - 数据库连接: 抓取错误位置
    c) 3:37 - 监听错误: 未处理拒绝对象 | unhandled rejection
    d) 4:59 - 最后的安全网: process.on( 'unhandledRejection', (err)=>console.log(err) );
    f) 8:22 - 错误处理逻辑:
        0. server.close(()=>{}) - 关闭服务
        1. process.exit(1) - 退出程序
        2. 生产环境: 使用第三方工具来重启服务
# 122( 完成笔记 )
    a) 00:00 - 处理未捕获异常错误 | 最后的安全网
    b) 2:08 - 最后的安全网: process.on( 'uncaughtException', (err)=>console.log(err) );
    c) 2:53 - 优化错误打印结果
    d) 4:26 - 注意: 只能监听process.on之后的错误代码
    e) 5:26 - 放置最顶端，监听错误
        0. 注意: 不过正常情况下，无需如此
    f) 5:56 - 后续逻辑文件，出错依然能监听到
    g) 6:48 - 如果错误发生在中间件内，虽然安全网无法监听，其实能被以前写的错误逻辑抓取到错误
    h) 6:59 - 测试错误处理逻辑
    i) 8:14 - 介绍 - 中间件错误逻辑顺序
    j) 8:34 - 开发环境: 测试错误逻辑，能打印具体错误信息
# 123( 无需笔记 )
    a) 00:00 - 身份验证，授权和安全性
        0. JSON Web Tokens | 效验技术
# 124( 完成笔记 )
    a) 00:00 - 用户建模
    b) 6:04 - 构建user mongoose schema
        0. 注意: 邮箱效验，使用的validator.isEmail第三方库
    c) 9:09 - 构建password mongoose schema
    d) 9:47 - 细节: mongoose schema导出, 注意开头大写, 规范
    e) 
# 125( 完成笔记 )
    a) 00:00 - 构建新用户接口
    b) 4:13 - 构建: 基本的创建新用户controller
        0. 注意: 写入数据库方法.create()
    c) 7:52 - 配置注册user路由
    d) 9:33 - 测试注册用户api
    e) 10:32 - 查看数据库是否存在注册的用户
# 126( 完成笔记 )
    a) 00:00 - 完善加密密码逻辑
    b) 3:23 - schema: 自定义效验，二次确定密码
        0. return true - 通过验证，否则则相反
        1. 注意: 创建/保存数据时，校验起作用。
    c) 5:08 - 测试注册用户api邮箱效验逻辑
    d) 5:46 - 测试注册用户api密码效验逻辑
    e) 6:26 - 注意: 永远不要在数据库中存储普通密码
        0. 加密: 存储在数据库中的密码要加密
        1. 原因: 防止hacker日了数据库, 拿到明文密码，瞎几把搞
    f) 7:20 - 开发规范: 胖模型，瘦控制器    
    g) 10:14 - 构建加密中间件: 
        0. 防止重复加密: 当密码没有修改时不进行加密
            a) .isModified() mongose schema自带的效验是否改变逻辑
        1. 加密: salt 密码，然后哈希，防暴力破解
        2. bcrypt
    h) 11:28 - 安装: bcrypt - 加密库
        0. 命令: yarn add bcryptjs
    i) 13:04 - 使用bcrypt.hash方法
        0. 第二个参数决定密码强度: 但值越大更加消耗cpu资源，推荐10,12
        1. 注意: 此方法为异步
    j) 15:42 - 构建: 基本的加密逻辑, 
        0. 二次确定密码: 不进行同步加密，且不存储到数据库中， 故为undefind, ( 后续逻辑将修正 )
    k) 16:45 - 测试加密逻辑
        0. 注意: 二次确认密码，不在存储数据库字段中
    l) 18:10 - 重复密码 - 经过哈希处理，加密后也会变的不同
# 127( 完成笔记 )
    a) 00:00 - 使用JWT( Json Web Tokens )进行身份效验
        0. 目的: 登陆用户可访问资源，非登陆用户不可访问
    b) 3:55 - https: 为了防止JWT泄露, 安全性，一定要使用https
    c) 5:11 - JWT解析:
        0. 注意: 任何人都可以解密JWT, 因此无法存储敏感信息
        1. JWT结构: 
            a) header | 头部
                0. 放置相关令牌的元数据
            b) payload | 有效载荷
                0. 可以放置一些，自定义数据
            c) verify signature | 效验签名
            d) 注意: header & payload 无加密，任何人都可以查看数据
            e) JWT组合: header+payload+secret+signature = JWT
    d) 7:57 - JWT效验流程图
# 128( 完成笔记 )
    a) 00:00 - 注册用户
    b)  3:22 - 修复用户注册安全漏洞
    c) 5:14 - 安装jsonwebtoken: yarn add jsonwebtoken
    d) 6:00 - jsonwebtoken - github文档
    e) 7:34 - 导入jsonwebtoker至auth controller
    f) 8:48 - 构建token
    e) 10:23 - JWT - 构建自己secret在环境变量中，加入到token中
        0. 注意: 构建的secret,为32位
    f) 12:04 - JWT - 设定JWT签名到期时间
    g) 12:50 - 生成的token，发送给用户
        0. 注意: jwt.sign()中包含签署到期时间入参
    h) 13:14 - 完善注册逻辑
    i) 13:48 - 测试注册逻辑
    j) 14:41 - jwt.io - 测试JWT是否有效 ( jwt debug 站点 )
        0. 注意: debug jwt token时，删除payload下的，iat/exp( 发布时间/到期时间 )保证debug正常
# 129( 完成笔记 )
    a) 00:00 - 登陆用户
    b) 3:20 - 构建: 初步构建基本的登陆逻辑
        0. 第一步: 验证用户是否输入，email和密码
        1. 第二步: 验证email和密码的正确性
        2. 第三步: 如果一切正确，则发送token
    c) 5:18 - 临时发送mock的token数据，测试登陆接口是否可相应
    d) 5:43 - 设定，登陆接口路由
    e) 6:47 - 测试登陆api
    f) 7:26 - 登陆逻辑在特定条件下return next()的原因: 
        0. 确保逻辑立即结束完成
        1. 防止因在同一个controller逻辑下，因二次res而报错
    f) 9:26 - mongoose schema 将passwrod设为select: false, 使接口无法发出密码到外界
    g) 11:57 - 构建: 查询用户逻辑, 复用的tour查询逻辑
    h) 12:07 - 测试查询用户逻辑
    i) 12:58 - 查询指定的登陆用户数据:
        0. 注意: 因mongoose schema限制了password输出: 故使用.select("+password")来指定数据输出
        1. 模型: User.findOne({email}).select("+password");
            a) 含义: 根据email查询用户数据，并指定一定要输出password字段数据, 方便用户验证
    j) 13:42 - 输出用户查询结果，方便验证逻辑正确性
    k) 16:47 - 注意: mongoose schema 将指定字段设为select: false时, 在mongoose.schema下也无法使用this.password来调用
    l) 18:21 - 构建: 通用性验证用户逻辑方便调用，在Model下 | 构建: 通用性逻辑方便调用
        0. 注意: 尽量使用异步逻辑
        1. 验证密码思路: 
            a) 用户提交密码
            b) 进行加密
            c) 然后与数据库中密码对比验证
        2. bcrypt.compare( 提交的密码，数据库密码 ): 对比验证，返回true则通过
    m) 19:25 - 使用: 在Model下构建的通用性验证密码逻辑
    n) 20:13 - 构建: 验证密码失败逻辑
        0. 状态码: 401, 代表用户授权失败
        1. 失败原因: 用户查询不到，以及用户密码错误
    o) 21:52 - 节约性能的，验证用户逻辑
    p) 23:12 - 构建: 根据用户id构建输出token逻辑，方便调用 ( controller下 )
    q) 23:34 - 完整的无状态登陆用户逻辑( 未来将完善 )
    r) 25:08 - 清除user数据，验证测试，注册用户/登陆用户，逻辑
# 130( 完成笔记 )
    a) 00:00 - 保护路线 | 访问路线必须登陆，并验证token正确性
    b) 1:18 - 保护思路: 路由加中间件验证逻辑 
    c) 2:33 - 构建: 保护中间件位置, auth controller下
    d) 3:17 - 保护: 保护线路逻辑位置 
    e) 6:28 - JWT验证用户逻辑顺序
        0. 获取token
        1. 验证token
        2. 验证用户是否正确
        3. 签发token后，检测用户是否修改了密码
    f) 7:12 - 打印包头信息
    g) 7:14 - 测试结果
    h) 8:47 - postman修改包头
    i) 12:57 - JWT: 获取token，并验证token是否存在
        0. 状态码: 401, 代表用户授权失败
# 131( 完成笔记 )
    a) 00:00 - 保护路线 | 验证token
    b) 1:48 - JWT: 验证jwt secret
    c) 3:33 - 回调获取验证结果:
        0. 引入util包，使用promisif( jwt.verify | 验证逻辑 )( 获取的token，环境变量jwt secret | 入参 );
        1. promisif是异步，可以获取回调结果, 配合awit
    d) 4:07 - 打印: 如果token验证成功，则返回用户id以及token签发有效期
    e) 5:23 - debug错误的token，用于验证测试，token效验逻辑
    f) 5:54 - 测试
    g) 7:25 - 错误处理: 利用中间件处理jwt因secret错误逻辑
    h) 8:15 - 构建: jwt因secret错误逻辑
    i) 8:46 - 生产模式: 启动输出模式，效验错误逻辑，是否正常
    j) 9:21 - 准备: 处理jwt到期时间逻辑
        0. 效果token到期时间为5000 | 注意: 5s不起作用 ( 临时方便测试token到期逻辑 )
    k) 12:20 - 错误处理: 利用中间件处理jwt因到期，错误逻辑
    l) 12:50 - 构建: jwt因到期，错误逻辑
    m) 13:45 - 恢复jwt过期时间为90d
    n) 19:19 - JWT: 验证用户逻辑 ( 总感觉有问题 | 等待研究 )
        0. 防止，用户不存在，token依然存在的问题
    o) 21:55 - 增加用户改变密码时间, 方便验证用户是否修改密码
    p) 22:22 - 构建: 验证用户是否修改了密码，如果用户修改了密码则，使用户重新登陆，重新生成jwt
    q) 26:47 - 比较时间: 验证用户是否修改密码
        0. jwt创建时间 < 修改密码时间 ---> 代表用户修改了密码，用户需重新登陆，重新生成token
        1. xxx.getTime()/1000; 时间戳( ms ) --> 转换 --> 时间戳( 秒 )
    r) 28:33 - 构建: 验证用户是否修改了密码逻辑,return false没修改，return true为修改
    s) 29:18 - 完成第四步逻辑，用户密码修改，重新登陆，重新生成token
    t) 30:40 - 同感校验后，授权访问路线, req.user = freshUser未来铺垫属性
# 132( 完成笔记 )
    a) 00:00 - postman高级玩法
    b) 02:03 - 设定环境变量:
        0. 设定环境变量，方便索引使用
        1. 设定url，写不同的域名, 方便切换环境开发测试
    c) 7:25 - postman: test标签，写测试自动化语法, 将获取的属性值加入到，全局环境变量中
        0. 目的: 获取的token放入到环境变量
        1. 获取: 获取返回值变量属性
    d) 8:24 - postman: 查看自动化语法，是否起作用，将指定属性，加入到全局环境变量
    e) 9:54 - postman: 使用全局环境变量token
# 133( 完成笔记 )
    a) 00:00 - 用户权限设定
    b) 2:37 - 增加用户授权中间件
    c) 4:36 - mongoose schema 设定用户角色, 可根据不同项目实际清空创建角色
    d) 6:18 - 中间件: 设定路线仅有指定用户有访问权限
    e) 11:47 - 中间件: 用户权限controller中间件
    f) 12:50 - 使用普通用户，测试带权的delete接口
    g) 13:40 - 无权测试
        0. 状态码: 403, 代表无权限
# 134( 完成笔记 )
    a) 00:00 - 密码重置
    b) 2:11 - 路由: 设定忘记密码路由，重置密码路由
    c) 3:56 - 忘记密码: 逻辑
    d) 5:42 - 引用crypto, 用于生成简单的令牌
    e) 7:22 - 此令牌不可明文存储于数据库中，防止hacker
    f) 9:01 - 设定，重置密码令牌字段，以及重置令牌有效时间字段, 如10min
    g) 10:02 - 构建: 生成重置令牌，schema中间件
        0. 注意加密逻辑，以及，生成的有效时间逻辑
    h) 15:07 - 修正路由
    i) 16:13 - 构建: 重置密码逻辑
        0. 生成重置token密码: 由a901结尾
        1. user.save({ validateBeforeSave: false }); 代表无视校验存储
# 135( 完成笔记 )
    a) 00:00 - node.js发送电子邮件: nodemailer
    b) 1:15 - 构建email.utils.js
    c) 2:49 - 基本的email逻辑
    d) 5:58 - 配置Gmail: 但是不推荐，因为每天发送超过500邮件，就会标记为垃圾邮件
    f) 6:56 - mailtrap: 注册邮件服务商开发API
    g) 8:29 - 全局环境变量，配置mailtrap要求的配置
    h) 11:38 - 基本的邮件逻辑
        0. nodemailer配置查看: https://mailtrap.io/inboxes/1269629/messages
    i) 额外Youtube:
        0. nodemailer发送演示: https://www.youtube.com/watch?v=nF9g1825mwk
            a) 26:06 - 使用smtp server邮件服务
        1. 搭建smtp sever邮件服务: 
            a) 简易版: https://www.youtube.com/watch?v=_pJt5zLxPtc
            b) 详细版: https://www.youtube.com/watch?v=N7BmgJWnztk
    j) 18:33 - 拼接修改密码相关信息，并发送邮件
    k) 20:25 - 增加防错逻辑
    l) 21:43 - 测试重置密码逻辑
# 136( 完成笔记 )
    a) 00:00 - 设置新的密码
    b) 1:50 - 令牌验证逻辑: url获取的未加密"重置令牌"与数据库存储的加密重置令牌，进行比较，是否相等
        0. token比较逻辑: 未加密令牌进行加密，在与数据库中的加密令牌比较，是否相等
    c) 2:44 - 基本的，重置密码逻辑
    d) 3:24 - 配置，重置密码路由
    e) 3:39 - 为了验证"重置密码token"的正确性，需重新加密计算
    f) 6:22 - 数据库过滤查询: "重置密码token"是否存在，并且判断有效时间是否过期，一切正常则继续重置密码逻辑，否则报错
    g) 9:11 - 重置密码后，从数据库中，删除"重置密码token"以及"token"有效时间，并重新生成jwt token
        0. 注意: 这里直接将入参的password赋与，数据库查询结果，是因为password会经过中间件加密，故可直接存储数据库中即可。
        1. 注意: 重新生成token
    h) 10:12 - 测试逻辑
    i) 10:27 - 重邮件拿区，临时修改密码链接
    j) 11:13 - 测试重置密码逻辑
    k) 12:14 - 注意: 使用数据库的.save()逻辑
        0. 原因: 数据库操控使用.save: 因为能够促发mongoose schema的校验逻辑以及中间件
        1. 不可使用: .update逻辑，无法促发校验逻辑以及中间件
    l) 16:20 - 构建中间件: 验证密码是否修改，以更新数据库中的密码修改时间
        0. this.isModified("keyName"): 验证数据是否改变，数据发生改变返回true，数据没有发生改变返回false ( 核心 )
        1. this.isNew: 验证是否为新增加的数据，是返回true，否则返回false ( 核心 )
        2. "密码更新时间"字段: 如果密码发生改变或者新建，中间件将，"密码更新时间"字段,时间数据更新保存
        3. 目的: 记录密码修改更新时间
    m) 18:01 - 防止: token建立时间 > 密码改变时间, 故密码更新时间-1000ms
    n) 18:45 - 测试"重置令牌"过期后逻辑，是否正常
# 137( 完成笔记 )
    a) 00:00 - 更新当前用户密码: 验证当前密码正确性, 在修改密码 ( 不通过邮箱修改密码 ) 
    b) 2:46 - 基本逻辑
    c) 7:11 - 完善重置密码逻辑
        0. 步骤一: 查询用户是否存在
        1. 步骤二: 确认用户密码是否正确
        2. 步骤三: 更新密码保存
            a) 注意: 不使用非.save保存数据，原因是无法进行mongoose.schema的校验数据
    d) 9:54 - 构建: 通用方法，发送用户新生成的token
        0. 构建原因: 此方法重复使用地方较多
    e) 10:57 - 步骤四: 发送jwt token
    f) 11:57 - 配置路由
    g) 13:15 - jwt token 保存在服务器中的JWT环境变量下
    h) 14:40 - 修正: 密码验证逻辑
    i) 15:32 - 测试功能逻辑
    j) 16:02 - PostMan: 自动化更新token变量
# 138( 完成笔记 )
    a) 00:00 - 更新当前用户数据: 
    b) 3:24 - 基本逻辑
    c) 3:48 - 步骤一: 防密码更新逻辑，更新密码则报错
    d) 5:24 - 配置: 更新数据路由 
    e) 8:54 - 测试，防密码更新逻辑
    f) 9:13 - 测试，更新数据路线，为保护路线
    g) 11:12 - 根据保护路线策略: findByid进行更新数据，需要验证密码
    h) 14:57 - findByIdAndUpdate来更新用户数据( 无需验证用户密码 )
        a) 为了安全性: 仅指定字段更新数据
    i) 17:34 - 过滤出指定字段，保证数据更新安全
    j) 18:15 - 完善的更新数据逻辑
    k) 19:40 - 测试逻辑是否正常
# 139( 完成笔记 )
    a) 00:00 - 注销当前用户
        a) 基本逻辑: 用户注销，其实并为在数据库中，真正的删除，只是改变一种昨天字段active: true/false, 方便用户在未来重新激活账号
    b) 1:31 - mongoose.schema 增加用户活动字段: 用于标识是否为注销用户
    c) 3:03 - 构建: 注销用户逻辑
    d) 3:06 - 配置路由
    e) 5:03 - 测试注销用户逻辑
    f) 5:26 - active成功改变 
    g) 9:17 - find中间件: 仅查询输出活动用户不是active:false, 用find中间件进行过滤
    h) 9:36 - 测试查询逻辑
# 140( 完成笔记 )
    a) 00:00 - 安全策略 
    b) 2:49 - 预防XSS攻击
        0. JWT: 存储在cookie中，不能存储在localStroge中，防止读取到JWT进行跨站脚本攻击(XSS攻击)。
            a) Cookie: 浏览器只能接受，或者发送Cookie值，外部用户无法改变
        1. 清空用户表单值
        2. 设置特殊的http headers包头
# 141( 完成笔记 | 实战位置 )
    a) 00:00 - 通过Cookie发送JWT
        0. 原因: 为了安全性JWT不可存储在localStorage
        1. Cookie: 服务器发送给前端一串字符串
    b) 2:39 - 发送Cookie开发位置
        0. 设定Cookie过期时间，过期将自动删除Cookie
    c) 3:16 - 配置环境变量: Cookie过期时间
    d) 4:15 - 设置90天的有效期: 注意转换为ms单位
    e) 4:56 - 发送Cookie安全选项:
        0. secure: true; 仅在加密安全的链接上发送Cookie( https )
        1. httpOnly: true; 使浏览器无法修改Cookie( 预防XSS攻击 )
    f) 6:30 - 区分开发环境/生成环境Cookie配置项: 
        0. 原因: secure: true仅在https发送Cookie，但测试环境为http，故区分环境发送Cookie选项
    g) 7:37 - 测试逻辑
    h) 8:47 - 在发送jwt token/发送Cookie做: 防密码暴露输出逻辑
    i) 9:11 - 查看全局接受的Cookie
        0. Cookie接受逻辑: 后端发送Cookie后, 不同字段名称为追加模式，同字段名称为替换模式 
# 142( 完成笔记 )
    a) 00:00 - 实施限速 
    b) 0:59 - 安装: yarn add express-rate-limit
        0. 目的: 用于限制接口速率，以及屏蔽多次访问的IP
    c) 3:45 - 允许同一个IP，在一小时内最大访问数为100次 
    d) 4:46 - 将限制IP逻辑，应用至对应路由
    e) 4:54 - 如果有限制速率，包头会出现二个属性，用于显示当前限制数，以及可访问数
    f) 5:52 - 计数逻辑，将在服务重启后重置，或者约定时间到期重置 
    g) 6:35 - 测试限制逻辑
        0. 429状态码: 代表访问次数过多，遭到访问限制
# 143( 完成笔记 )
    a) 00:00 - 设置安全性的http包头
    b) 0:26 - 安装: yarn add helmet
        0. 目的: 给http包头设置安全属性
    c) 2:18 - 配置安全的http头
    d) 3:17 - 限制包的大小，超过10kb将不接受
    e) 4:11 - 测试包头安全逻辑，多出了很多属性，浏览器可以理解这些安全属性
# 144( 完成笔记 )
    a) 00:00 - 数据清理
        0. 目的: 防止hacker攻击
    b) 1:11 - 安全逻辑
        0. 防NoSql注入
        1. 防Xss跨站脚本攻击
        2. 注意: 安全逻辑，放置express.json解析数据之后
    c) 2:26 - 演示NoSql注入攻击 ( 核心 )
        0. 直接管理员登陆
    d) 3:57 - 安装: yarn add express-mongo-sanitize
        0. 目的: 用于防御NoSql注入攻击
    e) 4:09 - 安装: yarn add xss-clean
        0. 目的: 用于防御xss攻击
    f) 5:25 - 导入二个安全库
    g) 6:00 - 配置: 防御NoSql,本质上是清除mongose运算符例$符号等...
    h) 6:24 - 测试防御NoSql攻击
    i) 8:18 - 测试xss攻击
    j) 8:32 - 配置: 防御Xss攻击
# 145( 完成笔记 )
    a) 00:00 - 防止参数污染
    b) 1:18 - 测试参数污染入参
    c) 2:05 - 污染参数演示: 当前有二个重复的入参，导致逻辑错误
    d) 2:39 - 安装: yarn add hpp
        0. 目的: 防参数污染
    e) 3:16 - 配置: 防御参数污染逻辑
    f) 5:17 - 配置: 参数白名单，在白名单中的参数，将不进行去重
    g) 8:12 - 手动白名单，为暂时保持代码简洁性
# 146( 无需笔记 )
    a) 00:00 - 数据建模
# 147( 完成笔记 - 理论知识 )
    a) 00:00 - MongoDB数据建模 
    b) 3:27 - 解析现实中实例数据结构
    c) 6:46 - 一: 数据之间的关系类型
        0. 基本的数据关系介绍
    d) 11:45 - 二: 规范化数据结构
    e) 17:35 - 三: 什么时侯用嵌入
        0. 关系类型
        1. 读/写比率
        2. 查询关系
    f) 20:02 - 四: 引用类型
        0. 注意: 
            a) 单条数据不能超过16m大小
            b) 注意: 不要使数组无限增长
        1. 第一种: 父子关系( 1:Few )
            a) 父知子，子不知父
            b) 适合 < 16m
        2. 第二种: 父子关系( 推荐 - 1:Ton/1:Many )
            a) 子知父，父不知子
            b) 适合海量数据, 如日志
        3. 第三种: 双向关系( Many:Many )
            a) 父之子，子知父
    g) 24:32 - 模型构建总结 ( 机翻 )
        0. 最重要的原则是：构建数据以匹配应用程序查询和更新数据的方式
        1. 换句话说，首先确定应用程序用例中出现的问题，然后对数据进行建模，以便以最有效的方式回答这些问题；
        2. 一般来说，总是倾向于嵌入，除非有充分的理由不嵌入，尤其是在 1: little 和 1:many 关系上；
        3. 1:TON 或 Many:Many 关系通常是引用而不是嵌入的好理由；
        4. 另外，当数据更新很多时，如果你需要自己频繁访问一个数据集，最好使用引用；
        5. 当数据大部分被读取但很少更新时使用嵌入，并且当两个数据集本质上属于一起时；
        6. 不要让数组无限增长。因此，如果您需要规范化，请对 1:Many 关系使用子引用，对 1:Ton 关系使用父引用；
        7. 对多：多关系使用双向引用
# 148( 完成笔记 )
    a) 00:00 - 根据项目构建数据模型 
        0. 项目总体模型构建图
# 149( 完成笔记 )
    a) 00:00 - 建模: 地理位置
    b) 8:32 - 构建: 旅游点地理位置模型，mongoose schema
    c) 9:54 - mock数据
    d) 10:20 - 脚本导入mock数据至数据库
    e) 10:51 - 脚本操控数据库
        0. 删除老数据，注入新的数据
    f) 11:10 - 在数据库中查看数据库
# 150( 完成笔记 - 模糊 )
    a) 00:00 - 建模( 嵌入 - 不推荐 ): 导游
    b) 1:02 - 增加导游mongoose schema
    c) 2:17 - 增加guides入参
    b) 5:37 - 构建存储中间件，异步查询多个用户id，并存储至数据库
        0. 异步查询结果，生成为数组
        1. 配合Promise.all, 因为async本质为Promise异步
    c) 6:20 - 通过用户id组，查询返回用户信息组
    d) 7:33 - 引用总结: 查询数据时，在中间件中做查询加工处理，通过id查询引用对应id信息
# 151( 完成笔记 )
    a) 00:00 - 建模( 引用 - 推荐 ): 导游
    b) 2:37 - mongoose schema导游id特殊写法
        0. 目的: 方便根据用户id查询用户信息
    c) 3:54 - 入参传入导游id
        0. 目的: 此id为mongodb要求类型id，方便之后做查询引用逻辑
# 152( 完成笔记 )
    a) 00:00 - 建模( 引用 - 填充数据 ): 导游
    b) 1:41 - 增加填充数据逻辑populate
    c) 2:08 - 测试，将显示用户完整信息
    d) 3:07 - 查看数据库中，仍为用户id
    e) 4:23 - 使用populate过滤数据
    f) 7:58 - 将填充逻辑，迁移至，查询中间件，方便应用全局查询
    g) 8:35 - 测试逻辑
    h) 9:30 - 更新接口: 更新导游信息，返回数据依然被填充，中间件的作用  
    i) 10:10 - 引用总结: ( 父知子 - 1:more ) 
        0. 第一步: mongoose schema 构建用户id模型: mongoose.Schema.ObjectId
        1. 第二步: 构建查询填充中间件
# 153( 完成笔记 )
    a) 00:00 - 建模: 评论数据模型( 父引用, 面对巨量数据 )
    b) 1:18 - 评论数据结构:
        0. 评论
        1. 评分
        2. 创建时间
        3. 导游id
        4. 用户id
    c) 1:52 - 构建: 评论的schema, review.model.js
    d) 3:49 - 构建: 评论shcema代码
    e) 7:09 - 构建: 导游id，用户id
        0. type: mongoose.Schema.ObjectId, mongoose快速的获取用户id游戏规则
        1. ref: 'xxx', mongoose指定查询文档名称
    f) 8:04 - mongoose.schema允许虚拟属性输出
# 154( 完成笔记 )
    a) 00:00 - 创建和获取评论
    b) 4:24 - 构建review.controller.js: 查询全部评论API
    c) 4:38 - 创建评论API
    d) 7:24 - 配置: 评论路由主线路
    e) 9:22 - 构建: review.routes.js: 配置评论相关子线路API路由
    f) 14:55 - 测试: 创建评论API接口
        0. 完善方案:
            a) 需要用户登录，要知道用户准确id
            b) 当前登录用户，于评论提交用户id要一致，防止请求被劫持，因此冒充其他用户评论
    g) 16:23 - 测试: 查了全部评论API接口
# 155( 完成笔记 )
    a) 00:00 - 数据填充,评论模型
    b) 3:48 - populate填充逻辑中间件
        0. 多属性填充写法
    c) 4:03 - 测试填充逻辑
# 156( 完成笔记 )
    a) 00:00 - 虚拟填充
        0. 应用场景: 子知父，父不知子, 使父知子的查询方式
        1. 示例: 这里以tour与review示例
    b) 1:26 - 使父知子的查询方式: 有二种
        0. 手动查询
        1. 虚拟填充( mongoose )
            a) 既能填充数据结构，又不会存储在数据库中
            b) 原因: 无限增长的数组存储在数据库中，是很可怕的，不可行
            c) 虚拟填充优势: 避免数据库存储无限延伸的数组，将所需引用的子项进行实时查询计算 
    c) 2:58 - 以tour获取review示例 
        0. 编辑tour的schema, 为虚拟填充做准备
    d) 3:43 - 无限增长的数组添加的schema，不可行禁止此操作
    e) 5:10 - 虚拟填充: 中间件
        0. tourSchema.virtual("reviews",{
            ref: "review" // 从review文档中查询
            foreignField: "tour" // tour对应review中存储的id
            localField: "_id" // 对应字段名称 ( 核心 - 是父与子联系查询的核心 )
        })
        1. 虚拟逻辑解析: 在返回的数据结构中，增加reviews字段, 此字段下的数据为，查询的对应id的子数据
        2. 入参解析{
            ref: "review" // 从review文档中查询
            foreignField: "tour" // tour对应review中存储的id
            localField: "_id" // 对应字段名称 ( 核心 - 是父与子联系查询的核心 )
        }
    f) 6:54 - 测试: 获取指定tour
        0. 看下虚拟字段reviews是否增加
        1. 此时在postman看来reviews并无数据，是因为，有了虚拟字段后，依然需要populate来逻辑加工填充
    g) 7:46 - populate填充虚拟字段：加工单个获取tour的find逻辑
        0. 与处理非填充字段无差
    h) 9:48 - 清除多余的填充
        0. 发现虚拟字段中，嵌套填充，可进行所需数据适当清除
    i) 10:04 - 测试逻辑
# 157( 完成笔记 )
    a) 00:00 - 简易的嵌套路由
        0. 嵌套路由应用实际情况
        1. 提交tour评论url: POST /tour/xxxTourIdxxx/reviews
        2. 获取tour评论url:  GET /tour/xxxTourIdxxx/reviews
        3. 获取指定评论url:   GET /tour/xxxTourIdxxx/reviews/xxxUserIdxxx
    b) 6:01 - tour路由下，导入review controller api逻辑, 做获取评论相关路由逻辑
    c) 8:26 - 适应不同路线那入参
        0. 从url那入参
        1. 从正常入参中那
        2. 目的: 适应多线路由，访问通个api逻辑
    d) 11:18 - 修正在tour下的评论路由
    e) 11:30 - 测试逻辑
# 158( 完成笔记 )
    a) 00:00 - express嵌套路由
        0. 目的: 代替简易的嵌套路由
    b) 2:23 - 实施express嵌套路由
        0. 先导入评论路由
    c) 3:25 - 配置路由: 原理同初始路由思路 
    d) 5:20 - 评论路由: 配置mergeParams: true属性
        0. 目的: 当前路由，方便获取其他路由的入参 ( 核心 )
    e) 7:39 - 测试逻辑
# 159( 完成笔记 )
    a) 00:00 - 完善查询评论Get请求逻辑
    b) 2:50 - 增加逻辑: 入参存在tourId则指定查询，否则查询全部评论
    c) 4:05 - 测试逻辑
# 160( 完成笔记 )
    a) 00:00 - 构建: 通用型工厂函数, 删除逻辑( 注意: 权衡维护成本 )
        0. 原因: 虽然可以方便的使用在多种场合，但虽着项目增长，不易维护，推荐使用react组件思维构建api逻辑
    b) 2:31 - 构建: handleFactory.js 书写函数
    c) 4:58 - 构建: 指定id数据删除通用逻辑函数
    d) 5:57 - 使用: 删除通用逻辑，用至，tour删除
    e) 7:26 - 测试删除tour逻辑
    f) 8:30 - 使用: 通用删除逻辑应用至，删除评论
    g) 10:11 - 测试删除评论逻辑
    h) 11:35 - 使用: 通用删除逻辑, 应用至, 删除用户
    i) 12:50 - 测试删除用户逻辑
# 161( 完成笔记 )
    a) 00:00 - 构建: 通用型工厂函数, 更新和创建逻辑( 注意: 权衡维护成本 )
    b) 2:11 - 构建: 通用型更新逻辑
    c) 3:31 - 使用: 通用型更新逻辑，应用至，更新用户信息
    d) 4:28 - 使用: 通用型更新逻辑，应用至，更新评论信息
    e) 4:43 - 路由: 更新评论逻辑，配置到评论路由
    f) 5:26 - 测试: 测试更新评论逻辑
    g) 7:35 - 构建: 通用型创建逻辑
    h) 7:54 - 使用: 通用型创建逻辑，应用至，创建tour
    i) 10:00 - 使用: 通用型创建逻辑，应用至，创建评论
        0. 改进: 但因有多余逻辑，不可直接使用通用逻辑，故将多余逻辑，应用至中间件
    j) 10:18 - 路由: 中间件应用至评论路由
    k) 10:40 - 使用: 通用型创建逻辑，应用至，创建评论
    l) 13:06 - 测试逻辑
# 162( 完成笔记 )
    a) 00:00 - 构建: 工厂函数,查询逻辑
    b) 2:38 - 构建: 通用型查询逻辑，可以配置populate入参
    c) 4:00 - 应用, 新构建的查询逻辑, 查询tour
    d) 4:14 - 测试逻辑
    e) 5:13 - 应用, 查询user
    f) 5:36 - 应用, 查询review
    g) 5:50 - 配置review查询路由
    h) 6:16 - 测试逻辑
    i) 8:03 - 构建: 通用型多功能查询
    j) 8:19 - 应用，多功能查询至tour
    k) 8:54 - 测试逻辑
    l) 10:39 - 改进，通用型多功能查询逻辑, 以适应查询评论
    m) 12:00 - 测试逻辑
    n) 13:10 - 应用. 多功能查询至user
    o) 14:02 - 测试逻辑
    p) 14:30 - 主要API逻辑总结
        0. 多功能查询全部
        1. 查询单个
        2. 创建单个
        3. 更新单个
        4. 删除单个
# 163( 完成笔记 )
    a) 00:00 - 添加一个user获取me的端点/获取自身信息的端点
        0. 目的: 方便获取当前用户信息
    b) 1:56 - 创建获取userId的中间件
    c) 2:53 - 配置路由/me, 应用中间件
    d) 4:06 - 测试获取自身信息
# 164( 完成笔记 )
    a) 00:00 - 完善接口的身份认证和授权
    b) 1:18 - 多功能查看tour取消身份验证, 因为想暴露给用户
    c) 1:57 - 修改tour接口，需要身份验证
    d) 2:15 - 更新tour接口，需要身份验证
    e) 3:00 - 查看年财报, 身份验证
    f) 5:30 - 便捷式身份验证路由，route.use(xxxx); 代码下方路由将全部受影响，代码上方则不受影响
        0. 原因: 中间件也有执行顺序
    g) 5:43 - 删除下方路由多余身份验证中间件 
    h) 7:46 - 便捷式权限验证路由，同上方思路相同
    i) 8:52 - 测试api
    j) 11:27 - 便捷式身份验证，评论api
    k) 12:39 - 更新、删除评论api仅admin以及用户访问
# 165( 完成笔记 )
    a) 00:00 - 导入评论，和用户数据
    b) 2:02 - 改进脚本，支持多个mongoose文档
    c) 2:11 - 使用脚本清空数据库
    d) 3:24 - 取消密码校验, 方便脚本导入数据
    e) 4:03 - 暂时注释密码加密，在用脚本导入数据
    f) 5:59 - 成功导入数据后，默认admin登录密码test1234
    g) 7:10 - 测试api
# 166( 完成笔记 )
    a) 00:00 - mongodb索引提高性能
    b) 1:24 - 修改查询tour的接口，使其能够看到，查询统计数据
    c) 1:47 - 测试结果: 
        0. 目的: 比较有索引后的性能提升效果
        1. executionStats统计结果
            a) nReturned: 输出结果
            b) totalDocsExamined: 查询文档数有9
        2. 解决方法:
            a) 了解索引index
    d) 4:02 - compass查看索引index
        0. 索引决定查询性能
    e) 5:06 - 增加: 以price字段为例，增加索引，提高查询性能
        0. 索引使用规则: 模糊
            a) 数字类型
    f) 5:50 - 测试结果
        0. 有了索引，查询文档统计减少，性能确实得到了提升 
    g) 8:08 - compass查看新建的索引: 有时需要等待较长的时间，才能生效
        0. 索引类型:
            a) 单字段索引
            b) 复合字段索引
    h) 9:32 - 增加: 复合索引字段
            a) 索引写法: 数字类型 - 所以以升序/降序为主, 二者并无差别 ( 核心 )
    i) 13:16 - 索引使用法则: ( 核心 )
        0. 索引不可随意使用，因为他特别占用资源
        1. 索引最好使用在高频率查询字段上, 建立高读写比数据库
        2. 总之一句话: 好钢用在刀刃上
    j) 13:48 - 增加: 单字段索引 
    k) 14:24 - compass查看字段
    l) 15:54 - 注释查询统计函数
# 167( 完成笔记 )
    a) 00:00 - 计算tour的平均评分: 创建评论时
        0. 目的: 应用存储相关数据集统计分析信息
            a) 防止: 避免重复查询计算，节约计算资源
            b) 意思: 提前计算好并存储，需要时直接读取，无需每次查询都重复计算
            c) 应用场景: 评分，评论数量, 等...
    b) 4:15 - 使用静态方法创建计算评论数量逻辑
    c) 5:30 - 使用聚合管道查询tourId
    d) 8:11 - 构建: 聚合查询计算
    e) 10:52 - 应用计算函数，至评论存储中间件
    f) 11:00 - 测试逻辑
    g) 11:35 - 测试逻辑: 创建一个tour
    h) 12:15 - 测试逻辑: 登录一个用户账号
    i) 12:45 - 测试逻辑: 评价, 发起之后验证下console.log计算结果是否正确
    j) 15:51 - 修正逻辑: pre修改为post
        0. 原因: 是pre在新的评论未保存时进行的计算, post是在新的评论保存在数据库后进行计算
        1. 注意: post中间件是没有next的
    k) 16:18 - 测试逻辑: 新建评论，然后验证console.log计算结果是否正确
    l) 20:08 - 将计算结果存储
    m) 20:31 - 测试结果: 查看tour, 评价数量，评论平均分
    n) 21:46 - 总结: 
        0. 目的: 在创建评论时，计算评价数量，以及评价平均分
        1. 在model下创建，静态逻辑
        2. 将静态逻辑应用至，post中间件中, 在this.controller下执行
            a) 使用post中间件原因: 是pre在新的评论未保存时进行的计算, post是在新的评论保存在数据库后进行计算
# 168( 完成笔记 )
    a) 00:00 - 计算tour的平均评分: 更新,删除评论时
    b) 1:28 - 难点: findByIdAndUpdate(findOneAndUpdate)/findByIdAndDelete(findOneAndUpdate)无中间件文档，只能建立一种中间件绕过机制, 预中间件
        0. 注意: findByIdAndXXXX --底层--> findOneAndXXXX 
    c) 8:26 - 构建: 预中间件( 诊断findByIdXXX..., findOneAndXXXXX )进行计算
        0. 构建pre下的this.r = await this.findOne(), 目的是为了给, post中间件传递查询属性
            a) 中间件之间数据有传递性 ( 核心 )
            b) 比如当前的this.r, 利用这一特性来计算新的操控数据库的结果计算
            c) this.findOne(): 获取当前查询加工的数据
    d) 8:46 - 测试逻辑, 更新评论
    e) 10:24 - 测试逻辑，删除评论，查看计算结果是否正确
    f) 11:50 - 评论删除完毕后，计算逻辑报错，需增加防错逻辑
    g) 13:03 - 计算逻辑: 增加防错处理
        0. 原因: 无评论时，查询结果为空数组，故需对应处理
    h) 13:40 - 测试逻辑
# 169( 完成笔记 )
    a) 00:00 - 限制用户评论数量: 当前场景，每个旅游项目用户只能评价一次    
    b) 2:33 - 配置复合索引: 用户+tour保持唯一
        0. 此代码, 可能要间隔非常长的时间来生效, 有可能是一天以后....
    c) 3:36 - 测试逻辑: 防止重复评论已生效
    d) 7:05 - 修复平均评分，小数问题
    e) 8:29 - mongoose schema 处理小数，四舍五入问题
    f) 9:07 - 测试逻辑: 小数处理
# 170( 完成笔记 )
    a) 00:00 - 地理空间查询，在半径内查询游览 
        0. 例: 查询半径300公里内的旅游
    b) 1:49 - 路由解析:
        0. 第一种路由: "/tours-within/:distance/center/:lathing/unit/:unit" --> "/tours-within/300/center/12,23/unit/mi"
            a) distance: 距离
            b) lathing: 坐标
            c) unit: 单位 ( mi -> 英里 )
        1. 第二种路由: "/tours-within?distance=300&lathing=12,23&unit=mi"
    c) 4:02 - 设定路由
    d) 5:47 - 空间查询api初步构建
    e) 8:18 - 处理空间坐标入参
        0. 状态码400 - 入参错误
    f) 10:36 - 修正路由，书写错误
    g) 10:44 - 测试路由，那入参是否正常
    h) 16:34 - 单位入参加工:
        0. 目的: 应对mongoose地理查询入参，为此做逻辑加工
        1. 入参: radius( 弧度 ): 距离 / 地球半径 = 弧度 
            a) 英里(mi): distance / 3963.2
            b) 公里(km): distance / 6378.1 
    i) 17:03 - mongoose地理空间运算符: ( 核心 )
        0. 示例: Tour.find( { startLocation: { $geoWithin: { $centerSphere: [ [ 经度,纬度 ], 弧度 ] } } } )
        1. $geoWithin: 对startLocaltion字段过滤
        2. $centerSphere: 根据入参进行半径之内过滤查询
    j) 18:18 - 增加startLocation空间坐标索引, 提高查询过滤性能
        0. 注意: 索引单位, '2dsphere' -> 代表二维平面上的点, mongoose的游戏规则
    k) 19:07 - debug调试
        0. 原因: 空间api逻辑错误
    l) 20:55 - debug到错误原因, $centerSphere 拼写错误
    m) 21:43 - 测试逻辑
    n) 23:34 - compass下的schema可以查看对数据库的字段分析, 以及空间地理位置坐标的分析
        0. 注意: 删除无效的地理坐标，才能出现地图
    o) 24:56 - 在地图中拖动，按住shift，可以看到过滤条件
    p) 25:34 - compass schema 可以根据过滤条件的数据进行分析 ( 强大 )
    q) 26:10 - 测试逻辑: 空间过滤
    r) 26:36 - 通过compass schema验证测试结果正确性
    s) 28:30 - mongoose地理空间运算符官方文档
# 171( 完成笔记 )
    a) 00:00 - 地理空间聚合 - 计算距离
    b) 1:26 - 配置路由
    c) 5:34 - 构建距离计算api函数
    d) 6:33 - $geoNear用法:
        0. 目的: 使用$geoNear计算空间坐标间的直线距离
        1. 注意: $geoNear使用条件 
            a) 索引: 需要 2d 或 2dsphere 索引
            b) 聚合管道位置: 需在聚合管道第一个位置，否则会报错 
        2. 当前场景已有startLocation为2dsphere索引，故可直接使用$geoNear来计算直线距离
        3. 示例: const data = await Tour.aggregate([{ $geoNear: { near: { type: "Point", coordinaes: [ 经度, 纬度 ] }, distanceField: "字段名" } }])
            a) 解析: 
                0. near: 设定起点
                1. distanceField: 返回的字段名称
            b) 注意: 一定要注意$geoNear使用条件
    e) 7:41 - 测试出现错误: $geoNear聚合管道不在第一位
    f) 9:06 - 修正错误: 暂时暂时此中间件，保证$geoNear在聚合管道的第一位
    g) 9:26 - 测试逻辑: 计算直线距离
    h) 11:14 - 增加逻辑: 距离数据，转为单位为km，并返回数据仅保留指定字段
        0. 转换m至km: $geoNear下的distanceMultiplier: 0.001 
            a) 原因: 默认计算结果单位为m
        1. $project目的: 仅保留指定字段
    i) 11:24 - 测试逻辑: 转换km
    j) 14:38 - 构建: 单位变量, km 、mi(英里) 为了单位转换 
    k) 14:44 - 应用单位变量
    l) 15:06 - 测试逻辑: 通过入参转换距离数据单位
# 172( 无需笔记 - 暂不实战 )
    a) 00:00 - 使用postman创建API文档
    b) 1:38 - 处理敏感数据，将敏感数据存储至postman环境变量中类似{{jwt}}
    c) 2:16 - 入参使用postman环境变量
    d) 3:00 - 给每个接口做备注，说明此接口的功能
    e) 4:13 - 给postman下的文件夹做备注
    f) 5:25 - 可以给入参添加备注
    g) 5:39 - 发布文档: 按钮
    h) 6:37 - 配置相关信息，不选择环境，单击发布按钮
    i) 7:26 - 文档
        0. 注意: 此发布文档，为公开，任何人都可以访问
    j) 9:56 - 可在web页面直接运行postman以同步文档中的接口至本地postman
# 173( 无需笔记 )
    a) 00:00 简介课程UI渲染
# 174( 完成笔记 )
    a) 00:00 - 服务端渲染，客户端渲染
    b) 1:13 - 渲染流程图
    c) 1:38 - 查看服务端渲染结果
# 175( 完成笔记 )
    a) 00:00 - 在express中配置pug模板引擎 / 哈巴狗模板引擎 ( 可选学习 )
    b) 2:01 - express声明使用的渲染引擎，pug模板引擎，已内置express 
    c) 4:27 - express设定渲染模板位置路径, 通过path.join确定路径位置
        0. path.join拼接路径: 使用他是为了，应对不同的环境，保持正确的路径 
    d) 5:07 - express设定生成页面路径
    e) 6:34 - 建立: 第一个pug模板文件
    f) 7:56 - 配置: 渲染页面路由
    g) 9:04 - 安装pug模板: yarn add pug
    h) 9:12 - 浏览渲染后的主页面
# 176( 完成笔记 )
    a) 00:00 - pug渲染模板引擎，基础知识 
    b) 2:55 - pug写法，( 挺神奇的，是我喜欢的菜 ) 
    c) 3:06 - 浏览器预览渲染结果
    d) 4:55 - pug写法: 引用css
        0. 注意: pug支持原生html写法
    e) 5:36 - 引入页面icon
    f) 5:42 - 预览效果
    g) 9:33 - 给pug传入变量
    h) 10:46 - pug使用变量渲染
    i) 11:21 - pug备注写法: 会渲染至html
    j) 11:34 - pug备注写法： 不行渲染至html
    k) 11:59 - pug使用简单的js语法
    l) 12:10 - 预览效果
    m) 12:54 - pug中，写js方式
    n) 12:59 - 预览效果
    o) 14:05 - pug中，插入js写法
    p) 14:22 - 预览效果
# 177( 完成笔记 )
    a) 00:00 - 构建pug模板
    b) 3:20 - 构建pug模板head
    c) 5:29 - 根据html转译成pug格式
    d) 6:26 - pug的div写法
    e) 9:36 - pug的header部分, 接下来是内容部分
    f) 12:17 - li嵌套内容，便捷式写法
    g) 14:06 - footer内容已翻译pug
    h) 15:11 - 修正css
# 178( 完成笔记 )
    a) 00:00 - pug获取文件渲染, 如导航栏 
    b) 1:54 - 安装: pug beautify - 方便格式化pug
    c) 2:05 - 构建: _header.pug文件,并复制header部分
        0. 格式化pug:
            a) 安装: pug beautify
            b) 选中: 全选要求格式化的代码
            c) vscood命令: 
                0. Mac: command+shift+p
                1. 注意: pug beautify也自带快捷键
            d) 输入pug: 选择pug beautify格式化
    d) 3:12 - 构建: _footer.pug, 并复制footer部分
        0. 命名规范: 服务于其他模板，通常用_xxx.pug命名，方便渲染
    e) 3:22 - 引入使用: pug模板文件
# 179( 完成笔记 )
    a) 00:00 - 用块扩展pug
    b) 2:41 - 配置路由, 相关tour渲染模板
    c) 4:13 - block content: 块链接
    d) 5:12 - extends base: 模板引用
        0. 目的: 引用base.pug模板到当前文件, 并在block content渲染当前pug文件内容，从而形成新的页面
    e) 7:48 - 引用base.pug模板到当前文件, 并在block content渲染当前pug文件内容，从而形成新的页面
    f) 8:22 - 预览页面 
    g) 9:09 - pug模板，使用title变量
# 180( 完成笔记 )
    a) 00:00 - 配置pug项目结构化
    b) 1:58 - 路由结构化
    c) 2:44 - 配置主路由
    d) 3:40 - 将api逻辑，转移至controller下
    e) 4:14 - 应用controller逻辑，至路由
    f) 5:04 - 改进路由
# 181( 完成笔记 )
    a) 00:00 - 配置overview页面1
    b) 2:25 - 构建: 确定overview页面构建思路
    c) 3:58 - 查询数据，传入pug模板( 好原始 )
    d) 9:39 - 复制card模板, 到overview页面
    e) 9:48 - 预览页面
    f) 11:12 - each tour in tours: pug预发循环迭代
    g) 11:17 - 预览页面
# 182( 完成笔记 )
    a) 00:00 - 配置overview页面2
    b) 3:58 - 给pug配置变量，动态迭代渲染card
        0. 注意: 注意图片路径, 从public读取
    c) 4:07 - 预览效果
    d) 6:53 - 以此类推，变量写入pug中
    e) 8:07 - 变量写入pug中，变量对应
    f) 9:51 - 格式化时间: .toLocalString()
    g) 13:59 - 完成card的pug变量填充
    h) 15:09 - 优化card排列布局
    i) 15:21 - 预览效果
# 183( 完成笔记 )
    a) 00:00 - 配置tour页面1
    b) 3:03 - 构建: 确定tour页面构建思路
    c) 3:33 - 配置路由
    d) 5:25 - populate()数据填充
    e) 9:29 - 修正css路径，为绝对路径 
    f) 9:58 - 修正tour模板，相关文件路径
    g) 11:14 - 传入模板tour变量，以配合渲染
    h) 11:22 - 在模板中应用变量 
    i) 12:30 -  pug根据变量修正图片
    j) 15:56 - pug构建mixin模板块
        0. 目的: 像函数一样方便调用渲染
    k) 17:03 - 调用mixin渲染
    l) 17:37 - mixin传入变量配置
        0.  像使用函数一样
    m) 17:43 - 预览效果
    n) 20:03 - pug中使用js预发方式, 并mixin根据需求应用
    o) 20:21 - 预览效果
# 184( 完成笔记 )
    a) 00:00 - 配置tour页面2
        0. 关键字: quick facts  
    b) 3:07 - each迭代渲染导游变量内容
    c) 4:49 - pug中使用js语法判断渲染内容
    d) 5:31 - pug描述部分标题渲染
    f) 7:23 - pug描述部分, 数组内容渲染方式
    g) 11:44 - each循环，使用循环索引值
    h) 12:35 - 修正错误
    i) 14:41 - 建立评论渲染函数
    j) 14:57 - 使用评论函数
    k) 17:16 - 补充评论细节函数
    l) 17:24 - 查看渲染评论效果
    m) 20:44 - 调整渲染评论星星逻辑
    n) 21:20 - 调整header跳转根目录
    o) 22:54 - 评论pug方法移动到单独的文件下
    p) 24:53 - tour底部渲染
    q) 24:59 - 预览效果
# 185( 完成笔记 )
    a) 00:00 - Map地图,构建基础结构
    b) 4:38 - 引入mapbox.js
    c) 5:03 - 地图相关逻辑开发位置
    d) 7:41 - 导入地图相关信息
    e) 10:43 - 转移mapbox.js到文件底部
    f) 10:53 - 尝试在js中获取地图dom中数据
# 186( 完成笔记 )
    a) 00:00 - MapBox地图第三方库使用
    b) 1:57 - 访问MapBox官方，获取访问权限
    c) 2:34 - 引入MapBox要求的js cdn文件
    d) 2:42 - 引入要求放置的js代码,token
    e) 3:06 - mapbox token js代码放置位置
    f) 5:57 - 在mapbox官方，构建自己的地图
    g) 7:34 - 设计自定义风格地图，并使用style url
    h) 7:47 - 使用自定义风格地图
    i) 7:58 - 预览效果
    j) 10:59 - mapbox文档
    k) 11:11 - mapbox部分属性实验
        0. zoom - 缩放地图
        1. center - 定义中心坐标
        2. interactive - 是否允许地图互动
    l) 15:28 - 使用mapbox js构建地图
    m) 16:17 - 设定初始坐标: 带自定义标记
    n) 17:49 - js构建地图代码
    o) 18:43 - 修正地图代码
    p) 21:11 - 优化显示细节，增加地图边距，使看着更舒适
    q) 21:19 - 预览效果
    r) 23:42 - 增加: 单击坐标，有气泡框显示自定义信息效果
    s) 23:57 - 给气泡框增加偏移
    t) 24:07 - 预览效果
    u) 25:47 - 禁用地图缩放，只允许平面移动
# 187( 等待笔记 )
    a) 00:00 - 构建登录页面
    b) 1:23 - 设定登陆页面路由
    c) 2:46 - 渲染逻辑接口
    d) 3:49 - 构建: pug模板文件 
    e) 5:32 - 浏览登陆页面,此时并无登陆逻辑
# 188( 等待笔记 )
    a) 00:00 - 登陆API应用1
    b) 3:58 - 用原生js做提交逻辑( 太上古了 )
    c) 4:18 - 禁用eslint( 太暴力了,不推荐 )
    d) 5:12 - 引入登陆逻辑js文件
    e) 6:14 - 测试登陆逻辑，是否抓取到了输入的数据
    f) 7:10 - 用CDN放松引入axios
    g) 10:46 - 登陆异步逻辑
    h) 11:47 - 防错逻辑改进，方便展示后端逻辑返回的错误信息
    i) 13:06 - 测试逻辑
    j) 14:27 - 登陆成功后, 浏览器查看cookie是否存在
        a) cookie是验证用户成功与否的关键
    k) 15:27 - 安装cookie-parser
    l) 15:56 - 中间应用cookie-parser
    m) 18:18 - node增加验证cookie下的jwt逻辑
    n) 19:05 - 保护路由, 限制/tour/:slug用户必须登陆才能浏览
    o) 19:39 - 删除cookie,访问,受保护的路由,测试是否成功
        0. 因为没用做登陆跳转逻辑, 所以看到的是返回数据
    p) 20:19 - 登陆后测试页面访问是否正常
# 189( 等待笔记 )
    a) 00:00 - 登陆API应用2
    b) 6:33 - 构建中间件: node登陆逻辑，使不能报错误信息 ( 实战位置 )
    c) 7:14 - 应用中间件
    d) 10:13 - 改进header显示，登陆用户信息
    e) 12:59 - 登陆中间件有bug
    f) 13:39 - 错误原因: 中间件下next被调用了2次
    g) 13:57 - 测试修复结果
    h) 17:09 - 完善登陆逻辑, 登陆成功/登陆失败逻辑
# 190( 等待笔记 )
    a) 00:00 - 登陆API应用3 ( 核心 )
    b) 3:51 - 安装打包工具"yarn add parcel-bundler -D"
        0. 作用: "parcel-bundler"是为了打包项目,代替webpack配置,开箱即用,简单便捷
        1. 注意: 注意打包工具的版本，防止意外错误
    c) 7:25 - 配置js压缩相关package.json
    d) 8:08 - 修改: pug模板文件只依赖，打包后的js文件
    e) 12:32 - 改进js文件写法, 适配打包
    f) 12:58 - 安装: babel相关,编译js代码,以适配各种浏览器" yarn add @babel/polyfill " 
    g) 14:16 - 改进mapbox写法
        0. 注意: 部分代码需要迁移至index.js
    h) 17:43 - dom防错逻辑写法
    i) 20:33 - 改进dom逻辑位置
    j) 25:51 - js写个toast弹窗
    k) 26:49 - 应用弹窗逻辑
    l) 27:17 - 测试弹窗
# 191( 等待笔记 )
    a) 00:00 - 退出登陆
        0. 思路: 初始化cookie，覆盖有效的jwt token
    b) 3:56 - 构建: 退出登陆API逻辑
        0. 寿命10秒
        1. 值可以是自定义字符串
        2. 因为没有敏感信息,无需安全要求
    c) 4:22 - 构建: 配置退出登陆api路由 ( 注意修正 )
    d) 7:47 - 构建: 前端退出请求逻辑
        0. 注意: 刷新页面location.reload(true): true非常重要,没有它浏览器可能会从缓存那文件,造成页面不及时性.
    e) 9:07 - 应用"退出登陆"按钮前端逻辑
    f) 10:30 - 修正: 退出登陆路由
    g) 12:38 - 改进: jwt token 验证逻辑，以适应退出登陆
# 192 --修正--> 193( 等待笔记 )
    a) 00:00 - 渲染错误页面, 如404页面 ( 核心 )
    b) 0:32 - 解决错误路由问题，渲染指定错误信息
        0. 可以指定的错误页面
        1. 也可以指定的错误信息组件展示
    c) 2:00 - 初步改进: 渲染接口错误逻辑, 渲染404信息
    d) 2:09 - 核心属性: "isOperational: true"
        0. 区分错误类型: 当属性为true时，是因操作导致的错误, 方便后续区分错误类型进行逻辑加工
    e) 3:41 - 错误逻辑区分: 区分api错误逻辑，与其他错误类型逻辑
        0. 当url带"/api"则不进行错误页面/信息渲染, 因为他们要走是api错误逻辑
        1. 当url不带"/api"时，并发生了错误, 则渲染错误页面/信息渲染
    f) 5:58 - 在开发环境，增加错误渲染逻辑
        0. 目的: 开发环境将透露具体错误信息, 生产环境则不会透露
    g) 6:50 - 构建: pug错误组件
    h) 8:19 - 完善: 开发环境错误渲染逻辑, 与前端错误组件渲染信息呼应
    i) 8:24 - 测试逻辑
    j) 9:37 - 完善: pug错误组件
    k) 14:42 - 将错误渲染逻辑，应用至生产环境，这里优化了if else写法, 以及返回错误信息的简化, 不透露具体错误信息
        0. 注意: return res
    l) 19:07 - 修复: 错误信息没有反馈成功，这里需要单独赋值, 建议深拷贝object内容
    m) 20:05 - 测试错误逻辑
# 194( 等待笔记 ) 
    a) 00:00 - 建立用户账号界面test
    b) 2:08 - 构建用户面板pug
    c) 4:50 - 构建pug的mixin导航栏菜单函数,方便渲染
    d) 6:08 - 应用导航Mixin渲染方法
    e) 7:58 - 用if逻辑区分,admin用户与非admin用户渲染的导航栏菜单
    f) 9:05 - 表单用户数据回填改造
    g) 11:31 - 改进路由策略,适配用户面板路由
    h) 12:02 - 适配: 使pug模板能访问user数据
    i) 13:12 - 构建controller渲染account(用户)模板页面
    j) 13:30 - 配置用户头像单击后进入，用户信息界面 
    k) 14:30 - 修正头像
# 195( 等待笔记 - 无需实战,部分node.js逻辑需要笔记 )
    a) 00:00 - 更新用户数据( 接近原生方法 )
    b) 4:21 - 改造form表单( 用的原生玩法 )
    c) 4:57 - 配置提交表达数据的路由
    d) 5:46 - 改造controller用于接收提交的表单数据
    e) 9:11 - express.urlencoded({ extended: true, limit: "10kb" })中间件,使express可以解析url上的编码行式的数据 ( 等待笔记 )
        0. extended: 为true时可以传输特别复杂的数据
        1. limit: 现在传输字段大小
    f) 11:56 - 给提交表单的路由增加保护逻辑
    g) 15:07 - 表单提交用户数据，后端接口逻辑
    h) 15:53 - 测试功能是否正常
    i) 16:10 - 防错逻辑展示
# 196( 等待笔记 - 无需实战,部分node.js逻辑需要笔记 )
    a) 00:00 - 用api更新用户数据
    b) 8:14 - 更新用户数据前端请求逻辑
    c) 9:14 - 前端提交逻辑
# 197( 等待笔记 - 无需实战 )
    a) 00:00 - 更新密码
    b) 3:47 - 更新密码api请求逻辑
    c) 5:25 - 监听form表单
    d) 7:08 - 原生表单提交逻辑,提交api密码
    e) 10:19 - 完善请求逻辑,充值表单数据
# 198( 无需笔记 )
    a) 00:00 - 上传文件,图像处理,电子邮件
# 199( 等待笔记 )
    a) 00:00 上传图片
    b) 
    

  

        
</pre>


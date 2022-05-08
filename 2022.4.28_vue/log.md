Udemy课程：Jonas Schmedtmann - https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15080910#overview
注意: 随着视频资源的时间更新迭代,日志可能与视频顺序有所偏差
# 1 ~ # 9: 介绍vue.js
# 10( 等待笔记 )
    a) 00:00 - vue开发工具
        0. vue官网: https://staging-cn.vuejs.org/
        1. Dev工具: https://staging-cn.vuejs.org/guide/scaling-up/tooling.html#browser-devtools
# 11( 等待笔记 )
    a) 00:00 - VUE data 方法
        0. 变量只能在template中使用
# 12( 等待笔记 )
    a) 00:00 - vue渲染多个实例
    b) 1:36 - vue只能有一个root元素，多余的则不渲染
    c) 2:57 - vue渲染多个实例,同时渲染多个root元素的方法
# 13( 等待笔记 )
    a) 00:00 - vue访问实例数据
    b) 4:06 - 访问实例函数的data
    c) 5:23 - 偏底层的代理访问
        0. VM是实例化变量,详情查看代码
        1. 可正常访问: console.log( VM, VM.start, VM.$data.start )
# 14( 等待笔记 )
    a) 00:00 - VUE methods 方法
    b) 3:29 - methods增加方法实例
    c) 3:42 - 可访问方法/函数
        0. 注意: 如果使用箭头函数那么this将不起作用
    d) 
# 15( 等待笔记 )
    a) 00:00 - VUE 内置指令
    b) 1:35 - chrome调试工具,限制下载速度进行调试 ( 小细节 )
        0. chrome强制刷新快捷键
            a) win: ctrl+f5
            b) mac: shift + # + r
    c) 2:26 - 隐匿未渲染dom元素: 标签属性配置v-cloak
        0. 代码内容:
        <pre lang="html"  >
            <div id ="app" v-cloak ></div>
        </pre>
    c) 4:12 - 隐匿未渲染dom元素: css代码配置
        0. 注意: vue在渲染完毕后，会将"v-cloak属性"清除
        1. 代码内容:
        <pre lang="css" >
            [v-cloak] {
                display: none;
            }
        <pre>
# 16( 等待笔记 )
    a) 00:00 - 数据绑定
    b) 2:36 - v-model绑定数据变量
        0. 列如是一个input
# 17( 等待笔记 )
    a) 00:00 - 绑定属性
    b) 1:31 - 绑定任意属性v-bind:xxx = "变量"
    c) 2:20 - v-bind:xxx="" 简写方式 :xxx=""
# 18( 等待笔记 )
    a) 00:00 - v-html字符串编译成html
    b) 2:44 - v-html配合vue data渲染使用
# 19( 等待笔记 )
    a) 00:00 - 监听事件
    b) 2:07 - 单击事件
    c) 2:24 - 构建事件函数
    d) 3:02 - v-on:click演示单击事件
    e) 4:10 - @click单击事件简写
        0. 注意: vue methods中要有对应的方法
    f) 5:31 - @input改变内容事件
        0. 注意: vue methods中要有对应的方法
    g) 6:26 - 配合@input的改变事件写法
# 20( 等待笔记 )
    a) 00:00 - 通过事件传递数据
    b) 1:12 - html事件入参传输写法
    c) 1:50 - js事件入参处理写法
        0. 标单禁止冒泡: event.preventDefault()
        1. $event可以获取默认回调的数据
# 21( 等待笔记 )
    a) 00:00 - 事件修饰符
    b) 1:48 - 阻止默认事件vue写法
        0. @input.prevent="handleXXX"
        1. 目的: 阻止冒泡代替event.preventDefault();
# 22( 等待笔记 )
    a) 00:00 - 键盘事件和修饰符
    b) 1:07 - @keyup按键修饰符html写法
    c) 1:41 - 配合@keyup逻辑写法
        0. keyup官方文档相关: https://staging-cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers
    d) 4:21 - 按键演示实例html写法
# 23( 等待笔记 )
    a) 00:00 - v-model修饰符
    b) 3:30 - v-model约束数据类型
        0. v-model.number="handleXXX"
    c) 4:49 - v-model.lazy.trim懒同步+处理字符串二端空格
# 24( 等待笔记 )
    a) 00:00 - 计算属性
    b) 3:26 - methods中的方法计算逻辑
        0. 当methods中有函数A有return数据,则每一次调用methods其他方法B时,该A方法也会被调用,用于实时跟踪数据
        1. 因为有无用计算，所以技术类推荐放入computed
    c) 4:20 - 在vue computed构建方法
    d) 4:31 - 使用vue computed下的方法
        0. computed必须要return一个值,而methods无需
        1. computed只有当你引入对应的值发生变化时，才会促发
# 25( 等待笔记 )
    a) 00:00 - vue watch 异步监听数据变化
    b) 2:35 - 监听实例
# 26( 等待笔记 )
    a) 00:00 - class用法,变更css样式
    b) 2:32 - 增加一个data布尔类型变量
    c) 3:05 - 动态class在html写法
    d) 3:43 - 实例演示
    e) 4:35 - 在computed构造: 计算class方法
    f) 4:48 - :class使用computed计算方法
    g) 7:42 - :class多个变量写法
        0. 当前功能: 不仅仅可以操控背景颜色，也可以操控字体颜色相关
    h) 7:59 - 演示
# 27( 等待笔记 )
    a) 00:00 - 绑定样式
    b) 4:35 - 操控style的方式 
        0. 更多操控样式官方文档: https://staging-cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes
# 28( 等待笔记 )
    a) 00:00 - 条件渲染
    b) 1:47 - v-if 根据逻辑决定是否渲染dom
        1. 官方文档: https://staging-cn.vuejs.org/api/built-in-directives.html#v-if
    c) 6:50 - v-else-if & v-else 判断条件决定渲染,中间不能有隔离标签否则失效
    d) 9:20 - <template />相当于<React.Farmate />
# 29( 等待笔记 )
    a) 00:00 - v-show指令 
    b) 0:49 - v-show指令的使用
        0. 注意: v-show隐藏时dom依然存在,区分与v-if是不存在与dom的
        1. 官方文档: https://staging-cn.vuejs.org/api/built-in-directives.html#v-show 
# 30( 等待笔记 )
    a) 00:00 - 遍历渲染
    b) 4:43 - v-for遍历渲染,基本使用
        0. 渲染数据: ["a","b"]
    c) 6:18 - v-for遍历list类型渲染
        0. 渲染数据: [{ name:"a",age:1 },{name:"b",age:2}]
    d) 8:18 - v-for遍历多级嵌套遍历
        0. ( value, key, index ) in people
            a) key: 键值名称,当遍历为Object时
    e) 11:11 - v-for遍历单个标签要加:key类似于react中的key, 方便引擎内部性能提升
        a) 官方文档: https://staging-cn.vuejs.org/guide/essentials/list.html#list-rendering
# 31( 等待笔记 )
    a) 00:00 - 了解:key的作用
        0. 解析: 其实与React中的key目的一样
# 32 ~ 33( 无需笔记 )
# 34( 等待笔记 )
    a) 00:00 - vue小实例
    b) 5:15 - 构建对应滑块属性
    c) 6:53 - 变量应用至html
    d) 10:15 - 构建计算逻辑transform
    e) 10:38 - 构建重置逻辑
    f) 11:15 - 应用逻辑至html
    g) 11:32 - 项目变形演示
# 35( 等待笔记 )
    a) 00:00 - 复制到剪切板 
    b) 0:49 - 复制逻辑html
    c) 3:56 - 初步构建复制逻辑
        0. 复制思路: 构建textarea塞入复制内容,渲染到dom中,选中内容,复制
        1. el.select() - 选中内容
        2. document.execCommand("copy") - 复制内容
    d) 6:43 - 完善复制逻辑
        0. 复制思路: 
            a) 构建textarea塞入复制内容
            b) 设定为只读
            c) 通过css隐藏内容
            d) 塞入数据
            e) 增加至dom中
            f) 选中内容
            g) 复制内容
            h) 移除dom
# 36( 无需笔记 )
# 37( 等待笔记 )
    a) 00:00 - 挂载vue实例
    b) 4:45 - 非webpack情况下，挂载vue
# 38( 等待笔记 )
    a) 00:00 - vue的生命周期
    b) 4:38 - 完整的生命周期流程图
# 39( 等待笔记 )
    a) 00:00 - vue使用生命周期
    b) 2:31 - 加载组件时: 生命周期代码
    c) 5:38 - 数据更新时: 生命周期代码
    d) 7:35 - 卸载组件时: 生命周期代码
    e) 7:59 - 控制台卸载组件
    f) 8:52 - 生命周期官方文档: https://staging-cn.vuejs.org/guide/essentials/lifecycle.html
# 40( 等待笔记 )
    a) 00:00 - 虚拟dom
    b) 7:05 - 数据更新 --> 修改虚拟dom --> 同步到实际dom
        0. 期思路与react一样
# 41( 无需笔记 )
    a) 00:00 - 代理的反应性
    b) 7:06 - new Proxy代理Object写法
        0. 目的: 可以设定索引逻辑,当索引目标时可以定制一些,索引后执行的逻辑
        1. 参考Proxy文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
# 42( 无需笔记 )
    a) 00:00 - vue编译器
    b) 9:59 - Vue.h()html编译器 ( 不推荐 )
# 43( 等待笔记 )
    a) 00:00 - 组件介绍
    b) 5:11 - 构建组件
    c) 5:45 - 对组件的应用
# 44~57( 无需笔记 - 临时跳过 )
    a) 00:00 - webpack配置vue开发环境
# 58( 等待笔记 )
    a) 00:00 - vue CLI
        0. 官方文档: https://cli.vuejs.org/zh/
    b) 3:57 - 安装vue cli:  
        0. npm install -g @vue/cli 
        1. yarn global add @vue/cli
    c) 5:00 - 生成vue脚手架
    d) 5:44 - 选中vue3 default暂时无需配置多个第三方库
# 59( 无需笔记 )
    a) 00:00 - 本地服务
# 60( 等待笔记 )
    a) 00:00 - 审查文件
    b) 7:57 - vue文件组成3部分
        0. html <template></template>
        1. javascript <script></script>
        2. css <style></style>

# 61( 等待笔记 )
    a) 00:00 - 创建组件
    b) 2:38 - 构建基本组件

# 62( 等待笔记 )
    a) 00:00 - 创建子组件
    b) 2:48 - 基本子组件
    c) 5:42 - 全局注册子组件 ( 不推荐 ) 
        0. 会影响webpack优化编译
    d) 7:12 - 使用子组件
         





   

        
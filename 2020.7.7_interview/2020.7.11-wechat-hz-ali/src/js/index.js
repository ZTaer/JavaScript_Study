console.log("---start---");
/**
 * HR推荐的面试题( 等待笔记 )
 */

/**
 * 1. React虚拟dom
 */
// 虚拟dom是什么?
    // a) 一个虚拟DOM(元素)是一个一般的js对象，准确的说是一个对象树(倒立的)；
    // b) 虚拟DOM保存了真实DOM的层次关系和一些基本属性，与真实DOM一一对应；如果只是更新虚拟DOM，页面是不会重绘的。

// Virtual DOM算法流程 ?：
    // a) 用JavaScript对象结构表示DOM树的结构，然后用这个树建构一个真正的DOM树，插入到文章当中。
    // b) 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树的差异。
    // c) 把记录的差异应用到老树中，构建的真正的DOM树上，更新渲染。

/**
 * 2. js如何创建一个对象?
 */
// es5:
    // a) 用new Object: var test = new Object;
    // b) 用花括号: var test 2 = {};
// es6: 
    // a) 用class

/**
 * 3. 如何清除浮动?
 */
// a) clear: both; 在浮动目标的结尾处，定一个clear:both;的div标签
// b) 父级标签: 定义高度
// c) 父级标签: 定义overwatch: hidden;

/**
 * 4. 如何让一个元素在页面看不见
 */
// a) opacity: 0;
// b) hidden属性: 给标签添加hidden属性,通常与js配合
// c) visibility:hidden; 

/**
 * 5. react-router的原理( 没有研究过 )
 */

/**
 * 6. 盒模型
 */
// a) margin --> border --> padding --> content

/**
 * 7. 页面中的性能优化
 */
// a) 压缩html, css, js: 清除空格，注释
// b) 尽量页面少用图片,图片最好是jpg格式
// c) 减少css，js文件数量，像webpack一样把他们打包在一起
// d) gzip压缩
// e) 减少域名查询, dns查询也消耗时间，因为有时我们会获取第三方域名资源

 /**
  * 8. 如何解决跨域，jsonp有什么特点?
  */
 // a) 跨域: 即域名，端口号，协议等不一样，访问就会产生跨域问题
 // b) 解决: script image iframe 等标签都可以进行跨域
 // c) jsonp特点: jsonp不支持post方法 所以在表单等一些情况下，是无法使用jsonp的 

/**
 * 9. js闭包
 */
// a) 什么是闭包: 函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包
// b) 闭包的作用: 闭包存在的意义就是让我们可以间接访问函数内部的变量。

/**
 * 10. js用什么函数判断变量类型
 */
// a) typeof，或者instanceof
// b) instanceof: xxx instanceof Array
// c) instanceof其它作用: 
    // 0. 检测Object.prototype是否存在于参数obj的原型链上
    // 1. 判断实列是否属于父类

/**
 * 11. typeof 数字返回值?
 */
// "number": number字符串

/**
 * 12. 浏览器加载资源的顺序( html, 图片, js, css )?
 */
//浏览器加载资源的顺序：
    // a) 最高级：html,css,font
    // b) 然后：js，xhr
    // c) 然后是多媒体：图片-语音-视频
    // d) 最后：prefetch预加载的资源 

/**
 * 13. 怎么提高网页加载速度
 */
// a) 压缩html, css, js: 清除空格，注释
// b) 尽量页面少用图片,图片最好是jpg格式
// c) 减少css，js文件数量，像webpack一样把他们打包在一起
// d) gzip压缩
// e) 减少域名查询, dns查询也消耗时间，因为有时我们会获取第三方域名资源

/**
 * 14. js怎么遍历对象
 */
// a) for in: 迭代出键值
// a) Object.keys(obj): 输出一个键值数组
// c) Object.values(obj): 输出一个数据数组

/**
 * 15. css选择优先级
 */
// a) id --> class --> 标签名称

/**
 * 16. css定位，悬浮在右下角
 */
// .xxx{ position: fixed; right:0px; bottom:0px; }

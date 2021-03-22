/**
 * 构建 - 异步错误处理: 统一抓捕异步函数中的错误( 完成笔记 )
 *      a) 目的: 避免接口api逻辑重复书写try catch, 抓取错误做统一处理
 *      b) 用于: 一般使用在controllers下单api async异步接口逻辑，方便统一处理错误
 *      c) 高阶函数:
 *          0. 直接传递async函数，并在高阶函数内做catch统一处理
 *          1. 修正高阶函数写法: 之所以这么写，是为了避免函数被立即执行，只是返回一个逻辑，而已.
 *          2. next可将错误，传递给，全局错误中间件处理
 */
module.exports = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
};

/**
 * 构建: 全局错误处理中间件( 完成笔记 )
 *      a) err.stack: 存放着错误堆栈位置信息
 */
module.exports = (err, req, res, next) => {
    // console.log("err.stack - 抓取错误堆栈位置", err.stack);

    err.statusCode = err.statusCode || 500; // 当err.statusCode不存在时，默认设定为500
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });

    next();
};


/**
 * 构建: 错误处理组件( 完成笔记 - 推荐 )
 *      a) 标准写法: 错误处理逻辑
 *      b) 目的: 方便使用于，错误逻辑，提供错误信息，以及状态码
 *      c) 错误放置堆栈: Error.captureStackTrace(this, this.constructor);
 */

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.isOperational = true; // 伏笔 ( 等待研究 - 目前了解模糊 )

        Error.captureStackTrace(this, this.constructor); // 报告错误堆栈信息 ( 等待研究 - 目前了解模糊 )
    }
}

module.exports = AppError;

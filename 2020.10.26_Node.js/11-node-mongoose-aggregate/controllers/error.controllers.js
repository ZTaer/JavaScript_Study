const AppError = require("../utils/app-error.utils");

/**
 * 函数构建: 处理数据库报错信息 ( 等待笔记 )
 *      a) 注意: return new AppError()错误, 方便加工处理
 */

// 第一种错误: casterror 因数据库返回的错误信息
const handleCastErrorDB = (err) => {
    const msg = `Invalid ${err.path} ${err.value} `;
    return new AppError(msg, 400);
};

// 第二种错误: error.code === 11000: 代表重复字段错误
const handleMongoErrorRepeatedFields = (err) => {
    const msg = `ErrorCode: ${err.code} - '${err.keyValue.name}'为重复字段`;
    return new AppError(msg, 400);
};

/**
 * 完善错误处理组件, 根据不同环境返回报错信息 | 完善AppError错误处理组件 ( 等待笔记 )
 *      a) 完善错误处理组件, 根据不同环境返回报错信息
 *          0. err - 完整的报错信息
 *          1. err.statusCode - 错误状态码信息
 *          2. err.message - 错误信息
 *          3. err.status - 错误状态信息
 *          4. err.stack - 错误堆栈信息 ( 注意: 仅开发环境返回此数据 )
 * 启用伏笔: AppError下的 this.isOperational ( 等待笔记 )
 *      a) this.isOperational作用: true时返回正常报错信息，false返回通用型报错信息，避免泄露开发报错信息 ( 核心 )
 */

// 生产环境发送报错信息
const handleSendErrorMsgPro = (res, err) => {
    // 常规报错
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
    // 非常规报错: 避免泄露开发者报错信息给客户端
        console.warn("服务错误!");

        res.status(500).json({
            status: "error",
            message: " 服务出现未知错误! ",
        });
    }
};

// 开发环境发送报错信息
const handleSendErrorMsgDev = (res, err) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack, // 错误堆栈信息
        error: err,
    });
};


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500; // 当err.statusCode不存在时，默认设定为500
    err.status = err.status || "error";

    // 根据不同环境区分报错逻辑，方便开发
    if (process.env.NODE_ENV === "produce") {
        /**
         * 逻辑构建: 处理数据库报错信息 ( 等待笔记 )
         *      0. 3种数据库保存类型
         *          a) 第一种错误: casterror 因数据库返回的错误信息演示
         *          b) 第二种错误: MongoError Mongoose效验错误类型
         *              0. error.code === 11000: 代表重复字段错误
         *          c) 第三种错误: ValidationError 在写入以及更新,数据库时报错
         *      1. 注意: 效验错误类型，根据error.stack下的开头字符串进行错误类型效验 ( 原视频中错误属性name已在新版本消失 )
         *          a) .startsWith()验证字符串开头, 返回true/false: "X123,123".startsWith("X123");
         */
        let error = { ...err };

        const errorType = err.stack;
        // 第一种错误: casterror 因数据库返回的错误信息
        if (errorType.startsWith("CastError")) error = handleCastErrorDB(error);
        // 第二种错误: MongoError Mongoose效验错误类型
        //      0. error.code === 11000: 代表重复字段错误
        if (error.code === 11000) error = handleMongoErrorRepeatedFields(error);

        handleSendErrorMsgPro(res, error);
    } else if (process.env.NODE_ENV === "development") {
        handleSendErrorMsgDev(res, err);
    }

    next();
};

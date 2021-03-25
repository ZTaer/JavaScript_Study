const AppError = require("../utils/app-error.utils");

const handleCastErrorDB = (err) => {
    const msg = `Invalid ${err.path} ${err.value} `;
    return new AppError(msg, 400);
};

const handleMongoErrorRepeatedFields = (err) => {
    const msg = `ErrorCode: ${err.code} - '${err.keyValue.name}'为重复字段`;
    return new AppError(msg, 400);
};

const handleValidationError = (err) => {
    const errorMesageArray = Object.values(err.errors).map((cur) => ` ${cur.path}: ${cur.message} `); // 遍历总结错误信息

    const msg = `错误参数: ${errorMesageArray.join("|")}`;
    return new AppError(msg, 400);
};

const handleJwtError = () => new AppError("error token , please log in again!", 401);

const handleSendErrorMsgPro = (res, err) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
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
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    // 根据不同环境区分报错逻辑，方便开发
    if (process.env.NODE_ENV === "produce") {
        let error = { ...err };

        const errorType = err.stack;
        if (errorType.startsWith("CastError")) error = handleCastErrorDB(error);
        if (error.code === 11000) error = handleMongoErrorRepeatedFields(error);
        if (errorType.startsWith("ValidationError")) error = handleValidationError(error);

        /**
         * 陆续增加的错误处理逻辑( 完成笔记 )
         *      a) 识别堆栈错误信息，进行对应的错误处理逻辑
         * 增加JWT相关的错误处理逻辑( 完成笔记 )
         */
        // 错误: jwt错误时促发
        if (errorType.startsWith("JsonWebTokenError") || errorType.startsWith("TokenExpiredError")) error = handleJwtError();

        handleSendErrorMsgPro(res, error);
    } else if (process.env.NODE_ENV === "development") {
        handleSendErrorMsgDev(res, err);
    }

    next();
};

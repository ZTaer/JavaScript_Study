const nodemailer = require("nodemailer");
/**
 * 构建: nodemailer发送email逻辑( 完成笔记 )
 *      a) nodemailer: 第三方发送邮件库
 *          0. 安装: yarn add nodemailer
 *              a) 额外Youtube教程:
 *                  0. nodemailer发送演示: https://www.youtube.com/watch?v=nF9g1825mwk
 *              b) 搭建smtp sever邮件服务:
 *                  0. 简易版: https://www.youtube.com/watch?v=_pJt5zLxPtc
 *                  1. 详细版: https://www.youtube.com/watch?v=N7BmgJWnztk
 *          1. 注意: nodemailer发送邮件，主要依然第三方邮件服务器，本身并无smtp邮件服务搭建发送能力。
 *          2. 使用:
 *      b) 邮件发送总体逻辑
 *          0. 建立邮箱服务器连接
 *          1. 配置email参数
 *          2. 发送email
 *
 */
module.exports = async (options) => {
    const { email: emailProps = "", subject: subjectProps = "", message: messageProps = "" } = options;

    // 0. 建立email服务器连接
    const transport = nodemailer.createTransport({
        // service: "",
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },

    });

    // 1. 配置发送email的内容
    const emialOptions = {
        from: "test@test.com", // emial: 发送方地址
        to: emailProps, // emial: 接受方地址
        subject: subjectProps, // emial: 描述
        // text: "", // emial: 文本内容
        html: messageProps, // emial: html内容
    };

    // 2. 发送email
    await transport.sendMail(emialOptions);
};

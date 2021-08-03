/**
 * 构建JS脚本: ( 完成笔记 )
 *      0. process.argv: 查询执行脚本入参
 *      1. process.exit(): 主动退出脚本
 *      2. 脚本主要步骤:
 *          a) 连接数据库
 *          b) 读取mock数据
 *          c) 构建: 配合Mongoose做执行逻辑
 *          d) 构建: 根据process.argv构建脚本逻辑
 */

const dotenv = require("dotenv");
const fs = require("fs");
const mongoose = require("mongoose");

const { REFUSED } = require("dns");
const User = require("../models/user.models");
const Tour = require("../models/tour.models");
const Review = require("../models/review.models");

dotenv.config({ path: "../config.produce.env" });


// a) 数据库休息
const DB_NETWORK = process.env.MONGODB_NETWORK;
// const DB_LOCAL = process.env.MONGODB_LOCAL;

// b) 连接数据库
mongoose.connect(
    DB_NETWORK, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
).then(() => console.log("script - 数据库连接成功!"))
    .catch((error) => console.log("script - 数据库连接失败!", error));

// 防止地狱回调读取数据
const readFilePro = (fileUrl) => new Promise((resolve, reject) => {
    fs.readFile(fileUrl, "utf-8", (err, data) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        if (err) reject("方式一: 无法找到文件!", err);
        resolve(data); // 抛出数据
    });
});

/**
 * 准备实例: mock数据导入 ( 等待笔记 )
 *      a) 改进脚本: 支持多个mongoose文档操控
 *      b) 清空数据库: node 脚本名称.js --delete
 *      c) 临时取消密码校验: 方便脚本导入数据
 *      e) 暂时注释密码加密: 在用脚本导入数据
 *      f) 注意写入数据顺序: user, tour, review
 *          0. 优先导入用户，防止导入tour数据抓取用户id时为null
 *      g) 成功导入数据后: 默认admin登录密码test1234
 *      h) 注意: 导入完数据后，注意临时注释的恢复代码
 */

// d) 写入数据库
const handleImportTourData = async () => {
    try {
        // const userData = await readFilePro(`${__dirname}/users.json`);
        const tourData = await readFilePro(`${__dirname}/tours.json`);
        // const reviewData = await readFilePro(`${__dirname}/reviews.json`);

        // await User.create(JSON.parse(userData), { validateBeforeSave: false }); // 取消密码校验 - 核心
        await Tour.create(JSON.parse(tourData));
        // await Review.create(JSON.parse(reviewData));

        console.log("写入成功!");
    } catch (err) {
        console.log("写入失败!", err);
    }
    process.exit();
};

// e) 删除数据至数据库
const handleDeleteTourData = async () => {
    try {
        // await User.deleteMany();
        await Tour.deleteMany();
        // await Review.deleteMany();

        console.log("删除成功!");
    } catch (err) {
        console.log("删除失败", err);
    }
    process.exit();
};

console.log("process.argv: 查询入参", process.argv);

// f) 执行逻辑
if ((process.argv).includes("--write")) {
    console.log("开始 - 写入数据");
    handleImportTourData();
} else if ((process.argv).includes("--delete")) {
    console.log("开始 - 删除数据");
    handleDeleteTourData();
}

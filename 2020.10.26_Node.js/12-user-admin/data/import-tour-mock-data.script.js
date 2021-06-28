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

const Tour = require("../models/tour.models");

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


// d) 写入数据库
const handleImportTourData = async () => {
    try {
        const tourData = await readFilePro(`${__dirname}/tours.json`);
        await Tour.create(JSON.parse(tourData));
        console.log("写入成功!");
    } catch (err) {
        console.log("写入失败!", err);
    }
    process.exit();
};

// e) 删除数据至数据库
const handleDeleteTourData = async () => {
    try {
        await Tour.deleteMany();
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

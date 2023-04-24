const dotenv = require("dotenv");
const mongoose = require("mongoose");

// 应用环境配置
dotenv.config({ path: `${__dirname}/config.env` }); // 注意: 在app前否则会出现bug
const app = require("./app");


/**
 * 连接数据库
 */
const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSPHRASE);
console.log("开始连接数据库...");
mongoose.connect(DB, {
    // 处理一些警告
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => console.log("数据库连接成功")).catch((error) => console.error("数据库连接失败", error));


console.log("当前环境：", app.get("env")); // 查看当前项目环境
// console.log("环境详情：", process.env); // 查看当前环境详情

/**
 * 临时: 构建 mongoose schema 数据模型
 */
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "必须name"],
        unique: true,
    },
});
const Tours = mongoose.model("Tours", tourSchema);

// 尝试测试: 根据模型存储数据
const testTours = new Tours({
    name: 1,
});
testTours.save().then((e) => console.log("save-success", e)).catch((e) => console.log("save-error", e));


/**
 * 服务监听
 */

app.listen(process.env.PORT || 3000, () => {
    console.log("http://localhost:3000/");
});



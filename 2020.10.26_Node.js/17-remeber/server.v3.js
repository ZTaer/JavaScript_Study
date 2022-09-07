const dotenv = require("dotenv");

// 应用环境配置
dotenv.config({ path: `${__dirname}/config.env` }); // 注意: 在app前否则会出现bug

const app = require("./app");


console.log("当前环境：", app.get("env")); // 查看当前项目环境
// console.log("环境详情：", process.env); // 查看当前环境详情

app.listen(process.env.PORT || 3000, () => {
    console.log("http://localhost:3000/");
});



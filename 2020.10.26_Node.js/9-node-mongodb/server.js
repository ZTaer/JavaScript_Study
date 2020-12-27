// 查看环境变量 ( 完成笔记 )
//     a) 配置环境变量:
//          0. 安装: yarn add dotenv
//          1. 配置环境: dotenv.config({ path: "config file 路径" });
//     b) 注意代码位置: 尽量靠前，防止出bug
const dotenv = require('dotenv');

dotenv.config({ path: './config.produce.env' });
// dotenv.config({ path: "./config.development.env" });

const app = require('./app');

/**
 * 2. 全局端口服务 - 区域
 */

// 查看环境变量 ( 完成笔记 )
console.log('app.get(env)', app.get('env')); // 当前开发环境: 环境变量
console.log('process.env', process.env); // 访问查看全局变量

// 应用环境变量 ( 完成笔记 )
//      a) 由环境变量决定监听的端口
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});

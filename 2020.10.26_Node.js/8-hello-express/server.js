
const app = require('./app');
const port = 3000;

/**
 * 2. 全局端口服务 - 区域:
 */

app.listen( port, () => {
    console.log('http://127.0.0.1:3000');
} ) ;
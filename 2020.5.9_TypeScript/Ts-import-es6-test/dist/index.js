console.log("---start---");
/**
 * 无webpack情况下使用import/export语法( 等待笔记 )
 */
// a) 准备: 
// 0. tsconfig.json： "module": "es2015", 属性设定为es2015
// 1. html - 添加属性: type="module" <script type="module" src="./dist/index.js"></script>
// b) 注意: import导入的ts文件要以js结尾
import test, { testImportArray } from './components/test.js';
test();
console.log(testImportArray);
//# sourceMappingURL=index.js.map
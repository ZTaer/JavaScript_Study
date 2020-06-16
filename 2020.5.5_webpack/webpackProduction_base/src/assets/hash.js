/**
 * 构建: 监听文件Hash值，保证HTML变化时刷新页面( 完成笔记 )
 */
// a) 获取文件Hash值: import 'file-loader!文件路径/xxx.html'
// b) 原因: 因js默认受到webpack监听, 故导入html文件的hash值, 以此监听对应的html有无变动, 来刷新浏览器
// c) 优势: 不会被打包到，生产环境文件中
// d) 弱势: 需要逐个: html文件来登记，以及导入对应的页面js文件
import 'file-loader!../index.html'; 
import 'file-loader!../pages/propages/propages.html'; 
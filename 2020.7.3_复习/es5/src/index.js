import "./index.scss";
import "./assets/hash"; // 使用: 监听html文件hash保证浏览器刷新( 完成笔记 )

import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';

ReactDom.render(<App/>, document.getElementById("root"));
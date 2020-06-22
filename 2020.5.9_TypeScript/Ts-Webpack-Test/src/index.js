import "./index.scss";
import "./assets/hash"; // 使用: 监听html文件hash保证浏览器刷新( 完成笔记 )

import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';

import App from './App.jsx';
import { test } from './test';

test();
ReactDom.render(<App/>, document.getElementById("root"));
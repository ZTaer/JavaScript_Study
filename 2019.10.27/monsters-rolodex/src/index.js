import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render()指定ID标签,渲染JSX内容到前端( 等待笔记 )
    // 0. <App />: ReactDOM.render()专用便捷式执行函数方法
    // 1. 使用方法: ReactDOM.render( <函数 />, dom抓取的指定标签  );
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

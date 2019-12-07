import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    // 展示路由功能的基础标签( 完成笔记 )
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);


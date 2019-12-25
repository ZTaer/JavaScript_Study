import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * redux获取组件访问权(完成笔记)
 */
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';

// 展示路由功能的基础标签( 完成笔记 )

// Redux初始化标签必备,获取组件访问权( 完成笔记 )
ReactDOM.render(
    // React-Redux: Provider标签一定要传递store,否则容易报错( 完成笔记 )
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);


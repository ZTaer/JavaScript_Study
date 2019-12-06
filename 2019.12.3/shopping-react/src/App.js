import React from 'react';

import { Switch,Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

// 测试路由
const HatsPage = () => ( <div> <h2 className="display-2" > TEST - Router </h2></div> );
const TestPage = () => ( <div> <h2 className="display-2" > TEST2 - Router </h2></div> );

function App() {
  return (
    // Route标签使用:( 等待笔记 )
      // 0. 模型: <Route exact={true/false} path="/" component={JSX} >默认3个参数
      // 1. exact属性:
        // a) exact为是否开启精确路由访问
        // b) 如果Route标签不写exact: 则默认exact为false否则为true
        // c) 关于exact属性的使用:
          // 0. 在<Switch>内，
            // a) 不开启exact: 则只能访问'/'路由页面
            // b) 开启exact: 则可以访问精确路由页面
          // 1. 不在<Switch>则进行叠加JSX渲染,就是根目录页面+指定路由页面渲染在同页
      // 2. path属性:
        // a) path="/"按照web路径来写
      // 3. component属性:
        // a) component={JSX}: 放置渲染的JSX变量
    <div className="App">
      <Switch>
        <Route exact={ true } path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/test' component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;

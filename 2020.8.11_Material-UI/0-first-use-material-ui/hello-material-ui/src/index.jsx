import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

/**
 * 第三方库
 */
import { BrowserRouter } from 'react-router-dom';     // react-router-dom

/**
 * 配置: Material-UI自定义主题( 完成笔记 )
 */
import ThemeHocProvider from './theme/theme-hoc-provider.component';

ReactDOM.render(
    <BrowserRouter>
      <ThemeHocProvider>  
        <App />
      </ThemeHocProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

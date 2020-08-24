import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

/**
 * 第三方库
 */
import { BrowserRouter } from 'react-router-dom';     // react-router-dom

// ThemeProvider组件: 应用自定义主题( 完成笔记 )
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";


ReactDOM.render(
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

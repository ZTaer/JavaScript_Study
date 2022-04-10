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

/**
 * styled-components库: 配置Material-UI的theme( 完成笔记 )
 *    a) 目的: 使styled-components可直接访问Material-UI的theme对象,在动态css上更加方便加工
 *    b) 准备: 
 *        0. 配置styled-components库的ThemeProvider, 如下
 *    c) 使用:
 *        0. styled-components进行动态css时，props.theme即可访问属性
 */
import { ThemeProvider as StyledThemeProvider } from "styled-components";

ReactDOM.render(
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <StyledThemeProvider theme={theme} >
            <App />
        </StyledThemeProvider>
      </ThemeProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

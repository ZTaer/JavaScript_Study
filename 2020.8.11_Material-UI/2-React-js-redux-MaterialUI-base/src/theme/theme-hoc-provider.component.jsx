import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from "styled-components";

/**
 * 0. 导入自定义主题
 */
import DefaultTheme from "./default.theme";
import DarkTheme from './dark.theme';
import GreenTheme from './green.theme';


/**
 * 1. Redux 
 */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCustomThemeOrigin } from '../redux/custom-theme/custom-theme.selectors';

/**
 * 2. 构建自定义主题目录( 定制化主题目录 )
 */
export const ThemeIndexType = {
   DEFAULT_THEME: "DEFAULT_THEME",
   DARK_THEME: "DARK_THEME",
   GREEN_THEME: "GREEN_THEME", 
};
 
const themeIndex = {
    [ThemeIndexType.DEFAULT_THEME]: DefaultTheme,
    [ThemeIndexType.DARK_THEME]: DarkTheme, 
    [ThemeIndexType.GREEN_THEME]: GreenTheme,
};

const ThemeHocProvider = props => {

    /**
     * 3. 设定主题
     */
    const { children, customTheme } = props; 
    const nowUseTheme = createMuiTheme( themeIndex[ customTheme ] ); // 核心: 必须运行createMuiTheme()函数才能改变主题

    return (
        <ThemeProvider theme={nowUseTheme} >
            <StyledThemeProvider theme={nowUseTheme} >
                { children }
            </StyledThemeProvider>
        </ThemeProvider>
    )
};

const mapStateToProps = createStructuredSelector({
    customTheme: selectCustomThemeOrigin,
});



export default connect( mapStateToProps )( ThemeHocProvider );

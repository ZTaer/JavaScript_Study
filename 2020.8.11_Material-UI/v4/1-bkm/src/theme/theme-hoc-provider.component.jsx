import React from 'react';
/**
 * 0. Material-UI完整的自定义主题( 完成笔记 ) 
 *      a) 目的: 通过hoc加工，方便状态管理库( redux, ContextAPI )，进行自由的切换'自定义主题'.
 */
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from "styled-components";

/**
 * 1. 导入自定义主题
 */
import DefaultTheme from "./default.theme";
import DarkTheme from './dark.theme';
import GreenTheme from './green.theme';


/**
 * 3. Redux 
 */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeOrigin } from '../redux/theme/theme.selectors'

/**
 * 2. 构建自定义主题目录
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
    const { children, theme } = props; 
    const nowUseTheme = createMuiTheme( themeIndex[ theme ] ); // 核心: 必须运行createMuiTheme()函数才能改变主题

    return (
        <ThemeProvider theme={nowUseTheme} >
            <StyledThemeProvider theme={nowUseTheme} >
                { children }
            </StyledThemeProvider>
        </ThemeProvider>
    )
};

const mapStateToProps = createStructuredSelector({
    theme: selectThemeOrigin,
});



export default connect( mapStateToProps )( ThemeHocProvider );

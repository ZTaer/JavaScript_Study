import React,{useState,useEffect} from 'react';
/**
 * 0. Material-UI完整的自定义主题( 完成笔记 ) 
 *      a) 目的: 通过hoc加工，方便状态管理库( redux, ContextAPI )，进行自由的切换'自定义主题'.
 */
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from "styled-components";

/**
 * 1. 导入自定义主题
 */
import DefaultTheme from "./default.theme";
import DarkTheme from './dark.theme';
import GreenTheme from './green.theme';

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
    const { children } = props; 
    const [ nowUseTheme, setNowUseTheme ]  = useState( themeIndex.DEFAULT_THEME );
    const [ mockReduxState, setMockReduxState ] = useState( ThemeIndexType.DARK_THEME );     // 临时mock: 临时mock主题状态

    /**
     * 4. 通过检测redux/ContextAPI状态值设定主题
     *      a) 根据目前主题情况: mockReduxState = "default"|"dark"|"green" ( 允许设定值 )
     */
    useEffect(()=>{
        if( themeIndex[ mockReduxState ] ){
            setNowUseTheme( themeIndex[ mockReduxState ] );
        }
    },[ mockReduxState ]); 

    /**
     * 5. HOC模式: 导出加工后的组件
     */
    return (
        <ThemeProvider theme={nowUseTheme} >
            <StyledThemeProvider theme={nowUseTheme} >
                { children }
            </StyledThemeProvider>
        </ThemeProvider>
    )
};

export default ThemeHocProvider;

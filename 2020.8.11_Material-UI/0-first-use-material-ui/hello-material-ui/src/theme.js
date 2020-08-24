/**
 * createMuiTheme函数: 构建自己的主题 | 属性解析( 完成笔记 )
 *      0. 配合官方默认主题属性: https://material-ui.com/customization/default-theme/#default-theme 
 *      1. ThemeProvider组件: 部署在index.js中
 */
import { createMuiTheme } from "@material-ui/core/styles";

// 默认颜色
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({

    // 0. palette颜色属性
    palette: {
        primary: green,
        secondary: {
            main: "#000"
        },
        text: {
            primary: "#8848"
        },
    }
    // 1. spacing间距值属性，默认为8px
    //   a) 默认使用方式: 
    //      0. spacing( 2 ); --> 8 * 2 = 16px
    //      1. spacing( 1, 2 ); --> 8px 16px
    //   b) 自定义数组: spacing = [0,4,8,16]
    //      0. spacing(2) --> 4px
    //   c) 自定义单位大小: spacing = 2;
    //      0. spacing(2) --> 2 * 2 = 4px
    //   d) 自定义功能: spacing: props => `${ 0.5 * props }rem`;
    //      1. spacing(2) --> 0.5 * 2 = 1rem
});

export default theme;
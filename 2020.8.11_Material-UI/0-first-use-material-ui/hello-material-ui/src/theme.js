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
    //      a) 方便操控颜色主题属性
    //      b) type属性: 'dark'黑夜模式，'light'白天模式
    palette: {
        type: "dark",   
        primary: green,
        secondary: {
            main: "#000"
        },
        text: {
            primary: "#8848"
        },
    },
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

    // 2. typography字体样式配置属性( 完成笔记 )
    //      a) 更多属性: https://material-ui.com/customization/default-theme/#default-theme
    //      b) 在此属性中, 根据官方文档, 可以修改默认的字体样式
    typography:{
        h1:{
            fontSize: '10rem',
        }
    }
});

export default theme;
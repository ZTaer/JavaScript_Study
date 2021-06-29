import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

/**
 * 构建: 自定义主题( 完成笔记 )
 *      a) 目的: 将主题导入至thme组件中使用
 */
export default createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: teal[800], 
        },
    }
});
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        type: "dark",
    },

    /**
     * theme.direction镜像方向( 等待笔记 )
     *      a) 参数: "ltr"正常渲染方向( 默认 ) | "rtl"镜像渲染方向
     *      b) 作用: 通过在"组件中"引入此属性，来做一些不同的渲染方式
     *      c) 参考: TablePaginaiton下的ActionsComponent组件
     */
    direction: "ltr",       
});
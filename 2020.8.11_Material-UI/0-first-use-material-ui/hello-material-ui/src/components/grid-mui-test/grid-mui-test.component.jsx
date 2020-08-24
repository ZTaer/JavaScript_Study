import React from "react";
/**
 * Grid组件: 布局组件( 完成笔记 )
 *      a) container属性: 构建12布局 - 像bootstrap的row一样 
 *      b) item属性: 身为container成员时添加 
 *      c) 占用空间比( 最大12 ): xs < sm < md < lg < xl
 *      d) Flex属性:
 *          0. 注意: Grid必须有container属性才能使用Flex属性
 *          1. direction属性: 排序方向，默认为x水平方向，column为y垂直方向 
 *          2. justify属性: x方向操控
 *          3. alignContent属性: 可换行型, y操控
 *          4. aliginItems属性: 不可换行型, y操控
 */
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    redBg: {
        backgroundColor: 'red',
    },
    greenBg: {
        backgroundColor: 'green',
    },
    blackBg: {
        backgroundColor: '#000',
        color:"#fff"
    },
    pinkBg: {
        backgroundColor: 'pink',
    }
});

const GridMuiTest = () => {

    const classes = useStyles();
    return(
        <div id="grid-test">
            <Grid 
                container                       // container属性: 构建12布局 - 像bootstrap的row一样 
                direction="row"                 // direction属性: 排序方向，默认row为x水平方向，column为y垂直方向
                justify="space-between"
                alignContent="flex-start"       // aliginContent属性: 可换行型, y操控
            >
                <Grid 
                    item                        // item属性: 身为container成员时添加 
                    xs={6}                      
                    sm={4}
                    className={classes.redBg} 
                >
                    内容一
                </Grid>
                <Grid
                    container
                    item
                    xs={6}
                    sm={4}
                    className={classes.pinkBg}           
                >
                    <Grid item xs={6} className={classes.greenBg} >
                    容器内容1
                    </Grid> 
                    <Grid item xs={6} className={classes.blackBg} >
                    容器内容2
                    </Grid> 
                </Grid>
            </Grid>
            <Grid container >
                <Grid xs={2} item />
                <Grid 
                    xs={8} 
                    item 
                    className={classes.blackBg}
                >
                    内容 - 非全屏排版方法
                </Grid>
                <Grid xs={2} item />
            </Grid>
        </div>
    );
};

export default GridMuiTest;
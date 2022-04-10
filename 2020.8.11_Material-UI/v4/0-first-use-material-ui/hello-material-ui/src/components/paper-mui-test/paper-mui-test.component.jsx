import React from 'react'

/**
 * Paper组件: ( 完成笔记 )
 *      a) 作用: 通常用于包裹文字，paper组件是可以根据主题变换颜色的, 官方说是模仿现实中纸张的一些属性
 *      b) elevation属性: 0~24控制阴影大小，值越大阴影越大
 *      c) component属性: 可以转换标签类型( 貌似大多mui标签都有此功能 )
 *      d) variant属性: 二种样式类型，
 *          0. 'elevation'阴影版组件，
 *          1. 'outlined'边框版组件( 边框版无阴影,且elevation属性无效 )
 *      e) square属性: 当为true时，边角为直角( 默认边角为圆角 )
 *      f) 改变主题:( 完成研究 )
 *          0. Paper组件背景/字体颜色会变化
 */
import { Paper,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    paperMuiTestContainer: {
        display: "flex",
        direction: "row",
        alignItems: "center",
        justifyItems: "center",
    },
    paperCss: {
        padding:"3rem",
        margin:"1rem",
    }
});

const PaperMuiTest = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.paperMuiTestContainer} >
            <Paper 
                className={classes.paperCss} 
                elevation={24}                  // elevation属性: 0~24控制阴影大小，值越大阴影越大
                component="a"                   // component属性: 可以转换标签类型( 貌似大多mui标签都有此功能 )
                variant="elevation"             // variant属性: 二种样式类型，'elevation'阴影版组件，'outlined'边框版组件( 边框版无阴影,且elevation属性无效 )
            >
                <Typography color="textSecondary" >
                    内容1
                </Typography>
            </Paper>                
            <Paper 
                className={classes.paperCss} 
                elevation={8}
                square={true}                   // square属性: 当为true时，边角为直角( 默认边角为圆角 )
            >
                <Typography color="textSecondary" >
                    内容2
                </Typography>
            </Paper>                
            <Paper 
                className={classes.paperCss} 
                elevation={10}                  // elevation属性: 当variant为outlined时，此阴影属性将无效, 默认强制为无阴影
                variant="outlined"
            >
                <Typography color="textSecondary" >
                    内容3
                </Typography>
            </Paper>                
        </div>
    )
};

export default PaperMuiTest;

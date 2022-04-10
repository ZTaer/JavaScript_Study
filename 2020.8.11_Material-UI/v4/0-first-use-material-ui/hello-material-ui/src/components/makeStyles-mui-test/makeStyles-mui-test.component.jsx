import React from "react";

/**
 * 第三方库
 */
import {
    Button
} from "@material-ui/core";
import {
    makeStyles,
} from "@material-ui/core/styles";
import {
    blue,
    teal,
} from "@material-ui/core/colors";
import classNames from "classnames";

/**
 * 本地组件
 */

/**
 * makeStyles
 */
const useStyles = makeStyles(( theme )=>({
    /**
     * makeStyles: 动态CSS( 完成笔记 )
     *      a) 当前逻辑: 检测到props.isGoogleButton为真时，来决定渲染那些css样式
     *      b) 准备:
     *          0. 接受组件的props: const classes = useStyles(props)保证makestyles可以监听到props使用;
     *          1. 使用示例: xxx: props => { return{ css } } ;
     */
    msTestButton: props => {
        let result = {
            padding: theme.spacing(2),
            backgroundColor: teal[800], 
            color: props.isGoogleButton ? "#fff" : "red", // 单个样式动态CSS

            // theme.breakpoints.xx函数: 指定宽度css生效( 完成笔记 )
            //      a) 宽度参数: "xs", "sm", "md", "lg", "xl"
            //      b) theme.breakpoints.up("sm"): sm以上宽度css生效
            //      c) theme.breakpoints.down("sm"): sm以下宽度css生效
            //      d) theme.breakpoints.only("sm"): 仅有sm时css生效
            //      e) theme.breakpoints.between( "sm", "lg" ): sm至lg之间css生效
            //      f) 注意格式: 在makeStyles下的书写格式{ [xxx]:{css} }
            [theme.breakpoints.between("sm","lg")]: {
                color: "pink",
            }
        };

        // 多个样式动态CSS
        if( props.isGoogleButton ){
            result = {
                ...result,
                backgroundColor: blue[800],
            }
        }

        return result;
    },
    msMore: {
        margin:"5rem"
    }
}));

const MakeStylesMuiTest = (props) => {

    const classes = useStyles(props); // 注意: 动态CSS, makeStyles接受到props的前提( 核心 )

    return (
        <div className="makeStyles-mui-test-container">
            <Button
                /**
                 * classnames库: 写入多个classes的方法到className( 完成笔记 )
                 *      a) 安装: yarn add classnames
                 *      b) 导入: import classNames from "classnames";
                 *      c) 作用: 写入多个classes的方法到className
                 *      d) 如果无classNames: 则后续classes覆盖前classes
                 *      e) 如果有classNames: 则classes可以保持多个效果
                 *          0. 示例: className={ classNames(classes.msTestButton, classes.msMore) }
                 *          1. 权重: 前者classes权重更高
                 */
                // className={ classes.msTestButton, classes.msMore  } 仅classes.msMore起作用
                className={ classNames(classes.msTestButton, classes.msMore) } // 二则均起作用，但前者权重更高
            >
                makeStyles动态CSS实验品
            </Button>
        </div>
    );
};

export default MakeStylesMuiTest;
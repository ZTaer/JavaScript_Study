import React from 'react';

/**
 * Divider组件: 分割线组件( 完成笔记 )
 *      a) variant属性: 设定分割线类型
 *          0. variant="fullWidth": 100%宽度分割线
 *          1. variant="inset": 左边留大空隙的分割线
 *          2. variant="middle": 二边留小空隙的分割线 
 *      b) absolute属性: position: absolute;是否开启
 *      c) component属性: 默认为hr标签
 *      d) flexItem属性: true时高度设定为auto,通常用于'垂直'的分割线, false高度与父级相同
 *      e) light属性: 颜色更加亮一些
 *      f) orientation属性: 'vertical'垂直分割线, 'horizontal'水平分割线
 */
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dividerMuiTestContainer:{
        width:"500px",
        height:"380px",
        border: "1px solid #000",
    }
});

const DividerMuiTest = () => {
    const classes = useStyles();
    return (
        <div className={classes.dividerMuiTestContainer} >
            <h3>
                variant="fullWidth": 100%宽度分割线
            </h3>            
            <Divider 
                variant="fullWidth"     // variant属性: 设定分割线类型
                absolute={false}        // absolute属性: position: absolute;是否开启
                component="hr"          // component属性: 默认为hr标签
                flexItem={false}        // flexItem属性: true时高度设定为auto,通常用于'垂直'的分割线, false高度与父级相同
                light={true}            // light属性: 颜色更加亮一些
                orientation="vertical"  // orientation属性: 'vertical'垂直分割线, 'horizontal'水平分割线
            />
            <h3>
                variant="inset": 左边留大空隙的分割线
            </h3>            
            <Divider variant="inset" />
            <h3>
                variant="middle": 二边留小空隙的分割线
            </h3>            
            <Divider variant="middle" />
        </div>
    )
}

export default DividerMuiTest;

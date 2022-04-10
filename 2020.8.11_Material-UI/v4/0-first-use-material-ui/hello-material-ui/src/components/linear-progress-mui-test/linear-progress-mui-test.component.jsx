import React,{ useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgressMuiTestNumber from './linear-progress-mui-test-number.child.component';

const useStyles = makeStyles({
    progressTest: {
        position: "fixed",
        width:"100%",
        bottom:0,
        left: 0,
        zIndex: 9999,
    }
});

const LinearProgressMuiTest = () => {

    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    useEffect(()=>{

        let progressValue = 0;
        const timer = setInterval( () => {
            if( progressValue >= 100 ){
                progressValue = 0;
            }else {
                progressValue = progressValue + 20;
                setProgress(progressValue);
            }
        }, 500 );

        return () => {
            clearInterval( timer );
        }
    },[]);

    /**
     * LinearProgress组件: 线型进度条( 完成笔记 )
     *      0. 作用: 线型进度条
     *      1. 属性:
     *          a) value属性: 进度条百分比
     *          b) valueBuffer属性: 缓冲进度条，百分比
     *              0. 注意: 此属性只有当variant="buffer"才启作用
     *          c) variant属性: 调整进度条类型
     *              0. buffer - 缓冲类型进度条: 可用于流媒体加载
     *              1. indeterminate - 不定进度条( 默认 )： 当进度未知时使用 
     *              2. determinate - 确定进度条: 有精确进度值时，使用
     *              3. query - 不定进度条: 显示动画略有不同
     *          d) color属性: 颜色
     *          e) classes属性: 定制化时使用
     */
    return (
        <div>
            <h4> 不定进度条 </h4>
            <LinearProgress 
                className={ classes.progressTest } 
                color="secondary" 
                classes={{}}
                variant="indeterminate"
            />

            <h4> 确定进度条 </h4>
            <LinearProgress 
                variant="determinate"
                value={progress}
                color="secondary"
            />

            <h4> 缓冲进度条 </h4>
            <LinearProgress 
               variant="buffer"
               value={30}
               valueBuffer={progress} 
            />

            <h4>
                带有进度值的进度条                
            </h4>
            <LinearProgressMuiTestNumber progress={progress} />
        </div>
    )
};

export default LinearProgressMuiTest;

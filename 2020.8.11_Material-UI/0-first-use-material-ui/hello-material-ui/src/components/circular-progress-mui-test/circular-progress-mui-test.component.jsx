import React,{ useEffect, useState } from 'react';
import { CircularProgress, Button } from '@material-ui/core';
import CircularProgressNumberMuiTest from './circular-progress-number-mui-test.child.component';

const CircularProgressMuiTest = () => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        /**
         * React中: 固定时间无限循环逻辑( 完成笔记 )
         *      a) 注意: 当前用于动态展示CircularProgress组件的进度条
         *      b) 核心: setInterval函数/clearInterval函数,的应用
         */
        let nextProgress = 0;
        const timer = setInterval( () => {
            if( nextProgress >= 100 ){
               nextProgress = 0;
               setProgress( nextProgress );
            }
            else{
                setProgress( nextProgress = nextProgress + 10 );
            }
        }, 500 );

        return () => {
            clearInterval( timer );
        }
    }, [])

    return (
        <div>
            <CircularProgress 
                /**
                 * CircularProgress组件: 圆圈加载器, 圆圈进度条( 完成笔记 )
                 *      a) variant属性: 渲染动画状态
                 *          0. "static"参数: value 将起作用, 可精确操控进度值
                 *          1. "indeterminate"参数( 默认 ): 不确定性加载动画, value 将不起作用
                 *          2. "determinate"参数: 确定性加载动画, 具体未知
                 *      b) value属性:
                 *          0. 进度跳值
                 *          1. 注意: 只有当variant="static"时value才启作用
                 *      c) size属性: 操控加载器尺寸大小
                 *      d) thickness属性: 操控加载器厚度
                 *      e) color属性: 颜色
                 *      f) disableShrink属性: true时显示简单的加载动画
                 */     
                    variant="static" 
                    value={progress} 
                    size="8rem"
                    thickness={10}
                    color="secondary"
                />
            <CircularProgress 
                variant="indeterminate" 
                disableShrink={true}
            />
            <CircularProgress variant="determinate" value={50} />

            <h4>
                Button加载器( 完成笔记 )
            </h4>
            <Button 
                variant="contained" 
                color="default"
                startIcon={ true ? <CircularProgress size="1rem" /> : null }
            >
              加载器
            </Button>

            <h4>
                带进度百分比的圆圈加载器
            </h4>
            <CircularProgressNumberMuiTest progress={progress} />
        </div>
    )
};

export default CircularProgressMuiTest; 

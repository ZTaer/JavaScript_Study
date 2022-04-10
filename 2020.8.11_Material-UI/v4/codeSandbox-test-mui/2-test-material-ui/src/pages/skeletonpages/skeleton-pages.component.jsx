import React from "react";

import { Typography, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import "./skeleton.styles.scss";

const SkeletonPages = () => {

    /**
     * Skeleton组件: 骨架组件，可代替进度条，更人性化的渲染加载( 完成笔记 )
     *      a) 属性:
     *          0. variant属性: "text" 文本型 | "rect" 矩形 | "circle" 圆形 ( 必填属性 )
     *          1. width属性: 宽度
     *          2. height属性: 高度
     *          3. animation属性: "wave" 波浪动画 | "pulse" 默认动画
     *      b) 手动: 判断尺寸
     *          0. 手动写入wdith，hiehgt
     *      c) 自动: 判断尺寸
     *          0. 被嵌套: 自动判断尺寸，如下代码演示
     *          1. 嵌套: 自动判断尺寸，如下代码演示
     */

    return (
        <div className="skeleton-pages-container" >
            <h1>骨架测试</h1>
            <h4 className="">基本的骨架: 3种类型</h4>
            <Skeleton 
                variant="text"
                width="50%"
                height="50px"
                animation="wave"
            />
            <Skeleton 
                variant="circle"
                animation="wave"
                width="100px"
                height="100px"
            />
            <Skeleton 
                variant="rect"
                width={"50%"}
                height={"100px"}
                animation="pulse"
            />
            
            <h4>骨架：被嵌套，自动判断尺寸</h4>
            <Typography variant="h2" style={{ width:"50%" }}  >
                {
                    true ? <Skeleton /> : 123
                }
            </Typography>

            <h4>骨架：嵌套，自动判断尺寸</h4>
            <div style={{ display:"flex", justifyContent:"center" }} >
                {
                    true ?
                    (
                        <Skeleton variant="rect" animation="wave" >
                            <Button variant="contained" color="primary" >
                                骨架测试
                            </Button>                       
                        </Skeleton>
                    ):
                    (
                        <Button variant="contained" color="primary" >
                            骨架测试
                        </Button>                       
                    )
                }
            </div>
       
        </div>
    );
};

export default SkeletonPages;
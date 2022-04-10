import React from "react";
import { Badge, IconButton, Typography, Button } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Mail";

const BadgeMuiTest = () => {

    /**
     * badge组件：徽章( 完成笔记 )
     *      a) 属性:
     *           badgeContent属性: 消息数量
     *           color属性: 颜色主题
     *           max属性: 渲染最大值限制
     *           invisible属性: true时徽标将不可见
     *           variant属性: "dot" 仅显示小点，不显示数字 | "standard" 显示数字形式徽标( 默认 )
     *           overlap属性: ”rectangle“参数( 默认 )针对正方体,长方体 | "circle"参数针对圆形
     *           anchorOrigin属性: 改变徽标位置
     *                vertical: 'top',      垂直方向: top | bottom 
     *                horizontal: 'right',  水平方向: right | left
     *           }}
     */

    return (
        <div>
            <h4>基本的徽标</h4>
            <IconButton color="primary">
                <Badge
                    badgeContent={1000}         // badgeContent属性: 消息数量
                    color="error"               // color属性: 颜色主题
                    max={999}                   // max属性: 渲染最大值限制
                    invisible={false}           // invisible属性: true时徽标将不可见
                    variant="standard"          // variant属性: "dot" 仅显示小点，不显示数字 | "standard" 显示数字形式徽标( 默认 )
                    overlap="rectangle"         // overlap属性: ”rectangle“参数( 默认 )针对正方体,长方体 | "circle"参数针对圆形
                    anchorOrigin={{             // anchorOrigin属性: 改变徽标位置
                        vertical: 'top',        
                        horizontal: 'right',
                    }}
                >
                    <MessageIcon style={{ fontSize:"1.8rem" }} />
                </Badge>
            </IconButton>
            <br/>
            <h4> 徽标应用其他组件测试 </h4>
            <Badge badgeContent={996} color="primary" >
               <Typography>文本数据</Typography> 
            </Badge>
            <br/>
            <br/>
            <Badge color="error" badgeContent={96} max={99} invisible={false}  >
                <Button variant="contained" >
                    消息
                </Button>
            </Badge>
        </div>
    );
};

export default BadgeMuiTest;
import React from 'react';
import { CircularProgress, Box, Typography } from '@material-ui/core';

const CircukarProgressNumberMuiTest = ( props ) => {
    const { progress = 0 } = props;
    /**
     * Box容器组件: 配合CircularProgress加载器组件 | 带进度百分比的圆圈加载器( 完成笔记 )
     *      a) 作用: 通常Box组件都被当成容器使用
     *      b) CSS3相对剧中逻辑思路:
     *          0. 父级Box: position="relative" 和 display="inline-flex" 是为了子级的 position="absolute" 做铺垫
     *              a) 子级: CircularProgress加载器
     *              b) 子级: Box: 以position="absolute"为基础, 在通过flex操控位置
     *      c) Box组件属性:
     *          0. CSS3属性类: 可直接作用
     *              a) postion套装, 
     *              b) display套装, 
     *              c) flex布局套装 
     *              d) margin/padding都可以的
     */

    return (
        <Box 
            position="relative" 
            display="inline-flex" 
        >
            <CircularProgress variant="static" value={progress} />
            <Box 
                position="absolute" 
                top={0} 
                left={0} 
                right={0}
                bottom={0}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography color="primary" variant="caption" >
                    {progress}%
                </Typography>
            </Box>
        </Box>
    )
};

export default CircukarProgressNumberMuiTest; 

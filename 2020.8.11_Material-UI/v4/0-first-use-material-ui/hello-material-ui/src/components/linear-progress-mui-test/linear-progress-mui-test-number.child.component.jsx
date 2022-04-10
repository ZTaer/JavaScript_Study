import React from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';

const  LinearProgressMuiTestNumber = ( props ) => {
    const { progress = 0 } = props;

    /**
     * LinearProgress组件: 播放器进度条示例( 完成笔记 )
     *      a) 核心: 与Box组件布局配合
     */
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            width="100%" 
        >
            <Box>
                <Typography>
                    00:{progress}
                </Typography>
            </Box>
            <Box width="100%" padding="0.3rem" >
                <LinearProgress color="secondary" variant="buffer" value={50} valueBuffer={progress} />
            </Box>
            <Box>
                <Typography>
                    99:99
                </Typography>
            </Box>
        </Box>
    )
}

export default LinearProgressMuiTestNumber;

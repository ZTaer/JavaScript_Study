import React,{ useState } from 'react'
/**
 * ButtonGroup组件：有下拉菜单的按钮组, 与Popper配合( 等待笔记 )
 */
import { 
    ButtonGroup,
    Button,
    Popper,
 } from '@material-ui/core'
import { 
    makeStyles,
    useTheme,
    
} from '@material-ui/core/styles'
import { 
    teal
} from '@material-ui/core/colors'

import PopperMuiTest from "../popper-mui-test/popper-mui-test.component";

const ButtonGroupPopperMuiTest = () => {
    return (
        <div>
            <h3>
                Popper组件: 测试
            </h3>
            <PopperMuiTest />
        </div>
    )
}

export default ButtonGroupPopperMuiTest

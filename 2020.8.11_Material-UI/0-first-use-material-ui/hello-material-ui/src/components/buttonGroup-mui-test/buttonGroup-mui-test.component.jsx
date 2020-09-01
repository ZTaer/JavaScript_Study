import React from 'react'

import ButtonGroupPopperMuiTest from "../buttonGroup-popper-mui-test/buttonGroup-popper-mui-test.component";
/**
 * ButtonGroup组件: ( 完成笔记 )
 *      a) variant属性: 改变按钮样式
 *          0. variant="text" - 文本型按钮组
 *          1. variant="outlined" - 边框型按钮组
 *          2. variant="contained" - 实体型按钮组
 *      b) size属性: "large", "medium", "small"
 *      c) orientation属性: 掌控按钮组排序方向, 水平方向'horizontal', 垂直方向'vertical'
 *      d) disableElevation属性: 清除按钮阴影
 *      e) fullWidth属性: 占据宽度100% 
 *      f) disabled属性: 禁用按钮组
 */

import { 
    ButtonGroup,
    Button,
 } from '@material-ui/core'
import { 
    makeStyles,
    useTheme,
    
} from '@material-ui/core/styles'
import { 
    teal
} from '@material-ui/core/colors'

const useStyles = makeStyles(( theme )=>({
    buttonGroupContainer:{
      backgroundColor: teal[500], 
      margin: theme.spacing(2), 
      padding: theme.spacing(2), 
    },  
}));

const ButtonGroupMuiTest = () => {
    /**
     * useTheme函数 - 方便获取主题theme对象( 完成笔记 )
     *      a) variant属性: 
     *          0. variant="text": 文本类型按钮组
     *          1. variant="outlined": 边框类型的
     *          2. variant="contained": 实体类型按钮组
     */
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.buttonGroupContainer} >
            <h2>
                正常: ButtonGroup按钮组
            </h2>
            <ButtonGroup 
                variant="text"                      // variant属性: 掌控按钮样式
                color="secondary"           
                aria-label="文本类型的ButtonGroup"
                size="large"                        // size属性: "large", "medium", "small"
                orientation="vertical"              // orientation属性: 掌控按钮组排序方向, 水平方向'horizontal', 垂直方向'vertical'
            >
              <Button >
                  实验一
              </Button>
              <Button>
                  实验二
              </Button>
            </ButtonGroup>

            <ButtonGroup variant="outlined" color="secondary" aria-label="边框类型的ButtonGroup">
              <Button >
                  实验一
              </Button>
              <Button>
                  实验二
              </Button>
            </ButtonGroup>
            
            <ButtonGroup 
                variant="contained" 
                color="secondary" 
                aria-label="实体类型的ButtonGroup"
                disableElevation                    // disableElevation属性: 清除按钮阴影
                fullWidth                           // fullWidth属性: 占据宽度100%
                disabled                            // disabled属性: 禁用按钮组
            >
              <Button >
                  实验一
              </Button>
              <Button>
                  实验二
              </Button>
            </ButtonGroup>
            <h2>
                下拉菜单，按钮组
            </h2>
            <ButtonGroupPopperMuiTest />
        </div>
    )
}

export default ButtonGroupMuiTest;

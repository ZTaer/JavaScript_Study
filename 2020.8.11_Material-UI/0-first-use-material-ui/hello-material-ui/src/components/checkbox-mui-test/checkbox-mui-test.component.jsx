import React from 'react';


import { 
    Checkbox, 

    FormGroup,
    FormControlLabel,

    Paper,
} from '@material-ui/core';

/**
 * Icon
 */
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

const CheckboxMuiTest = () => {
    return (
        <Paper>
            <h3>
                Checkbox 属性解析
            </h3>
            <Checkbox 
                /**
                 * Checkbox组件: 属性解析( 等待笔记 )
                 */
                // a) 基本参数类
                id="xxIdName"           // id属性: 只是普普通通的htmlid
                color="secondary"       // color属性: 改变组件颜色
                disabled={true}         // disabled属性: 禁用组件
                disableRipple={false}   // disableRipple属性: true时禁用水波动画效果 
                required={true}         // required属性: true时为必填项 
                size="medium"           // size属性: 操控组件大小, "medium" 默认大小 | "small" 缩小版 
                value="1"               // value属性: 组件的表单值

                // b) Icon以及逻辑类
                icon={<FavoriteBorderIcon />}               // icon属性: 默认渲染的Icon组件
                checked={false}                             // checked属性: true时代表被选中
                checkedIcon={ <FavoriteIcon /> }            // checkedIcon属性: 被选中时渲染的Icon
                indeterminate={true}                        // indeterminate属性: 非全选状态, 比如Table的Head标题中非全选状态时渲染Icon
                indeterminateIcon={<FavoriteTwoToneIcon/>}  // indeterminateIcon属性: 非全选状态渲染Icon

                // c) dom类                                 
                // inputProps={{ xxx: "xxx" }}              // inputProps属性: 参数直接作用在核心标签上
                // innerRef={}                              // innerRef属性: 通常与useRef配合来抓取组件的dom
            />
            <h3>
                Checkbox配合FormGroup组件/FormControlLabel组件使用 
            </h3>
            <FormGroup 
                /**
                 * FormGroup组件: 通常用于表单布局, 当作布局容器( 等待笔记 )
                 *      a) row属性: 当为false时为垂直排序方向，true则为水平排序方向
                 */
                row={true} 
            >
                <FormControlLabel
                    /**
                     * FormControlLabel组件: 增加表单label( 等待笔记 ) 
                     *      0. 作用: 增加表单label通常与Radio,Switch,Checkbox组件配合
                     *      1. label类:
                     *          a) label属性: 你懂得
                     *          b) labelPlacement属性: label渲染位置
                     *              0. "start": 左
                     *              1. "end": 右
                     *              2. "bottom": 下
                     *              3. "top": 上
                     *      2. 对control中的组件操控类
                     *          a) control属性: 操控渲染的组件, 通常与Radio,Switch,Checkbox组件配合
                     *          b) 注意: value/checked/disabled属性将直接作用在control中的组件中
                     *          c) value属性: 值
                     *          d) checked属性: 是否勾选
                     *          e) disabled属性: 是否禁用 
                     *      3. js的dom类
                     *          a) inputRef属性:通常与useRef配合来抓取组件的dom 
                     *          b) onChange属性: 只是普通的react逻辑操控
                     */
                    // a) label类 
                    label="我是label-1"             
                    labelPlacement="start"          

                    // b) 对control中的组件操控类
                    control={  
                        <Checkbox />
                    }
                    value="xx"
                    checked={true}
                    disabled={false}

                    // c) js的dom类
                    // inputRef={}
                    // onChange={()=>{}}

                />
                <FormControlLabel
                    label="我是label-2"
                    control={  
                        <Checkbox />
                    }
                />
            </FormGroup>

        </Paper>
    )
};

export default CheckboxMuiTest;

import React from 'react';
import { 
    Switch, 
    Paper,

    FormControl,
    FormGroup,
    FormControlLabel, 
} from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import AppleIcon from '@material-ui/icons/Apple';

const SwitchMuiTest = () => {

    return (
        <Paper>
            <h3>
                Switch基本属性:
            </h3>
            <Switch
                /**
                 *  Switch组件: 开关组件( 完成笔记 ) 
                 *      0. 默认基本属性
                 *          a) name属性: 基本html5
                 *          b) value属性: 代表开关的默认值
                 *      1. 逻辑交互属性
                 *          a) checked属性: 是否打开开关
                 *          b) disabled属性: 禁用
                 *      2. 样式改变属性
                 *          a) size属性: 开关尺寸大小 - small: 小 | medium: 大 
                 *          b) edge属性: 位置偏移 - start: 左偏移 | end: 右偏移  
                 *          c) icon属性: 取消选中时渲染图标
                 *          d) checkedIcon属性: 选中时渲染图标
                 *          e) color属性: 改变颜色
                 *          f) classes属性: 配合makeStyles
                 *      3. react属性:
                 *          a) inputProps属性: 属性直接作用在根组件
                 *          b) inputRef属性: 配合hoos使用
                 */ 

                 // a) 默认基本属性
                 name="testSwitch"
                 value="123"
                 
                 // b) 逻辑交互属性
                 checked={true}
                 disabled={false}
                 
                 // c) 样式改变属性
                 size="medium"        
                 color="default"
                 edge="start"
                 icon={ <AlbumIcon /> }
                 checkedIcon={ <AppleIcon /> }
                 // classes = {}

                 // d) react属性
                inputProps={{
                    "aria-details": "测试checkbox",
                }}
                // inputRef={}
            />

            <h3>
               Switch配合FormGroup                 
            </h3>
            <FormControl component="form" >
                <FormGroup aria-label="我只是一个备注而已" >
                    <FormControlLabel 
                        /**
                         * FormControlLabel组件: 配合Switch开关组件 ( 完成笔记 )
                         *      a) 基本属性:
                         *          0. labelPlacement决定label的位置:
                         *              a) "start"属性: 水平左  
                         *              b) "end"属性: 水平右
                         *              c) "top"属性: 垂直上
                         *              d) "bottom"属性: 垂直下 
                         *          1. label属性: label名称
                         *      b) 交互属性:
                         *          0. 注意: 这里的属性可以直接操控control属性里的组件
                         *          1. checked, disabled: 属性直接作用在 Switch 组件中
                         *          2. control: 放置操控的组件
                         */            
                        // a) 基本属性
                        name="formControlTest"
                        value="1"
                        label="我是Label"
                        labelPlacement="end"

                        // b) 交互属性
                        checked={true}
                        disabled={false}
                        control={ <Switch /> }

                        // c) react属性
                        inputRef={ (e) => console.log("xxx",e) }
                    />
                </FormGroup>
            </FormControl>

            <h3>
               React几种渲染方式实验 - React渲染方式( 完成笔记 ) 
            </h3>
            {
                /**
                 * a) react渲染方法: return( <> xxx </> )骗取react为单个容器渲染方法
                 */
                < >
                    <h4>多标签欺骗性渲染</h4>
                    <h4>多标签2</h4>
                </>
            }
            {
                /**
                 * b) react渲染方法: &&渲染方法
                 */
                false && (
                    <h4>
                        &&渲染方法
                    </h4>
                )
            }
            {
                /**
                 * c) 通常页面有3种状态
                 *      0. 加载状态渲染
                 *      1. 报错状态渲染
                 *      2. 正常渲染状态渲染
                 *      3. 配合: 通常可以与&&渲染方法配合使用
                 */
            }
        </Paper>
    )
};

export default SwitchMuiTest; 

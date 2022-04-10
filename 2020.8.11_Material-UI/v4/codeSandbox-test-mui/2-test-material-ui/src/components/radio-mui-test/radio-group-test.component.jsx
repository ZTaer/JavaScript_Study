import React,{ useState } from "react";
import { 
    FormControl,
    FormLabel,
    FormHelperText,

    RadioGroup,
    FormControlLabel,
    Radio,

    Button,

} from "@material-ui/core";

const RadioGroupTest = () => {

    /**
     * RadioGroup组件: 有Group的Radio( 完成笔记 )
     *      0. row属性: true时使容器内为水平方向排序
     *      1. name属性: 就是H5表单name
     *      2. defaultValue属性: 默认值
     *      3. aria-label属性: 备注
     *      4. value属性: 代表下方多个Radio当前选项( 核心 )
     *      5. onChange函数: 配合value属性改变值，固定逻辑 
     * FormControlLabel与Radio组件配合( 完成笔记 )
     */

    const [ chooseValue, setChooseValue ] = useState("top");
    const [ isError, setIsError ] = useState(false);

    const handleChangeChoose = ( event ) => {
        setChooseValue( event.target.value );
    };

    const handleChangeError = () => {
        setIsError( !isError );
    };

    return(
        <div>
            <FormControl
                error = { isError }
            >
                <FormLabel component="legend" >
                    我这是FormControl的备注:
                </FormLabel>

                <RadioGroup
                    row={ true }                        // row属性: true时使容器内为水平方向排序
                    name="choose"                       // name属性: 就是H5表单name
                    defaultValue="top"                  // defaultValue属性: 默认值
                    aria-label="test-radio-group"       // aria-label属性: 备注
                    value={ chooseValue }               // value属性: 代表下方多个Radio当前选项( 核心 )
                    onChange={ handleChangeChoose }     // onChange函数: 配合value属性改变值，固定逻辑 
                >
                    <FormControlLabel 
                        value="top"
                        control={ <Radio /> }
                        label="选项1"
                        labelPlacement="top"
                    />
                    <FormControlLabel 
                        value="start"
                        control={ <Radio /> }
                        label="选项3"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="bottom"
                        control={ <Radio /> }
                        label="选项2"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel 
                        value="end"
                        control={ <Radio /> }
                        label="选项4"
                        labelPlacement="end"
                    />
                </RadioGroup>

                {
                    isError && (
                        <FormHelperText>我是错误信息</FormHelperText>
                    )
                }

                <Button variant="contained" size="small" onClick={ handleChangeError } >
                    错误样式状态
                </Button>
            </FormControl>            
        </div>
    );
};

export default RadioGroupTest;
import React,{ useState } from "react";
import {
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Input,
    Chip,
} from "@material-ui/core";

const SelectMuiTest = () => {

    /**
     * Select组件: 多选下拉选项( 完成笔记 )
     *      a) 属性: 
     *          0. open属性: ture时展开选项
     *          1. multiple属性: true时开启多选
     *          2. value属性: 开启多选时，value要为数组类型, 否则将报错
     *          3. input属性: 渲染核心组件, 通常在multiple开启时配合渲染使用
     *          4. renderValue属性: 多选时渲染组件加工
     *          
     */
    const [ optionValue, setOptionValue ] = useState([]); 

    const handleChangeOptionValue = ( event ) => {
        setOptionValue( event.target.value );
    };

    return(
        <div className="">
            <FormControl variant="outlined" style={{ minWidth: "120px" }} >
                <InputLabel shrink htmlFor="select-multiple" >下拉选项</InputLabel>   
                <Select
                    label="下拉选项"                            // label名称：当前要与上方InputLabel组件名称同步( 原因是：避免FormControl与InputLabel时的BUG )
                    inputProps={{
                        id: "select-multiple"
                    }}
                    onChange={ handleChangeOptionValue }
                    multiple={true}                             // multiple属性: true时开启多选
                    value={optionValue}                         // value属性: 开启多选时，value要为数组类型, 否则将报错
                    input={<Input id="select-multiple-chip" />} // input属性: 渲染核心组件, 通常在multiple开启时配合渲染使用
                    renderValue={                               // renderValue属性: 多选时渲染组件加工
                        ( selected ) => (
                            <div>
                                {
                                    selected.map( item => <Chip size="small" key={item} label={item} /> )
                                }
                            </div>
                        )
                    }
                >
                    <MenuItem value="1" >选项1</MenuItem>
                    <MenuItem value="2" >选项2</MenuItem>
                    <MenuItem value="3" >选项3</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectMuiTest;
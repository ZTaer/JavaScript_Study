import React,{ useState } from "react";
import {
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from "@material-ui/core";
import SelectMultiple from "./select-multiple.component";

const SelectMuiTest = () => {

    /**
     * Select组件: 单选下拉选项( 完成笔记 )
     *      a) 属性: 
     *          0. open属性: ture时展开选项
     *          1. onChange属性: 逻辑可以直接抓取到MenuItem/option的value值
     *          2. label属性: lable名称，通常要与InputLabel名称对应
     *          3. value属性：
     *              a) 单选时: 选中的值
     *          4. inputProps属性: 属性直接作用在核心组件上, 通常放置id
     *          
     */
    const [ optionValue, setOptionValue ] = useState("1");

    const handleChangeOptionValue = ( event ) => {
        setOptionValue( event.target.value );
    };

    return(
        <div className="">
            <h4>基本的Select：下拉多选</h4>
            <FormControl error variant="outlined" style={{ minWidth: "120px" }} >
                <InputLabel 
                    shrink 
                    htmlFor="select-base"                  // htmlFor属性: 对应Select下的ID  
                >
                    下拉选项
                </InputLabel>   
                <Select
                    label="下拉多选"                        // label名称：当前要与上方InputLabel组件名称同步( 原因是：避免FormControl与InputLabel时的BUG )
                    onChange={ handleChangeOptionValue }
                    value={optionValue}
                    inputProps={{
                        id: "select-base"
                    }}
                >
                    <MenuItem value="1" >选项1</MenuItem>
                    <MenuItem value="2" >选项2</MenuItem>
                    <MenuItem value="3" >选项3</MenuItem>
                </Select>
            </FormControl>

            <h4>Native模式的Select：优化了移动端的体验</h4>
             <FormControl 
                variant="filled" 
                style={{ minWidth: "120px" }} 
                size="small"
            >
                <InputLabel shrink htmlFor="select-native-base" >下拉选项</InputLabel>   
                <Select
                    native={true}
                    label="下拉选项"                        // label名称：当前要与上方InputLabel组件名称同步( 原因是：避免FormControl与InputLabel时的BUG )
                    onChange={ handleChangeOptionValue }
                    value={optionValue}
                    inputProps={{
                        id: "select-native-base"
                    }}
                >
                    <optgroup label="分组1" >
                        <option value="1" >选项1</option>
                        <option value="2" >选项2</option>
                        <option value="3" >选项3</option>
                    </optgroup>
                    <optgroup label="分组2" >
                        <option value="4" >选项4</option>
                        <option value="5" >选项5</option>
                        <option value="6" >选项6</option>
                    </optgroup>
                </Select>
            </FormControl>           

            <h4>多选下拉选项</h4>
            <SelectMultiple />
        </div>
    );
};

export default SelectMuiTest;
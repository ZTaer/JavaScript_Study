import React,{ useState } from "react";
import { Radio } from "@material-ui/core";
import RadioGroupTest from "./radio-group-test.component";

const RadioMuiTest = () => {

    /**
     * Radio组件: 单选框( 完成笔记 )
     *      0. checked属性: true时代表选择状态，false则相反
     *      1. onChange属性: 改变value值，固定逻辑
     *      2. value属性: 代表当前Radio组件代表的value值
     *      3. name属性: h5属性
     *      4. inputProps属性: 属性将直接作用在核心组件上
     *      5. color属性: 更改表单主题色
     *      6. size属性: "small" 小尺寸 | "medium" 默认尺寸 | "large" 大尺寸
     */

    const [ selectedValue, setSelectedValue ] = useState("a");

    const handleChange = ( event ) => {
        setSelectedValue( event.target.value );
    };

    return(
        <div>
            <h4>基本的Radio组件</h4>
            <Radio 
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'a' }}
                color="primary"
                size="small"
            />
            <Radio 
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'b' }}
            />

            <h4>有Group的Radio</h4>
            <RadioGroupTest />
        </div>
    );
};

export default RadioMuiTest;
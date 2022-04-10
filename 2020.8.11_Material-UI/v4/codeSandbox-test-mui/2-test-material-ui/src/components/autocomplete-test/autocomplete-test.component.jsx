import React,{ useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import AutocompleteMore from "./autocomplete-more.component";
import AutocompleteGroup from "./autocomplete-group.component";
import AutocompleteLoading from "./autocomplete-load.component";
import AutocompleteFilter from "./autocomplete-filte.component";

// mock数据
const mockData = [
    {
        labelName: "选项1",
        optionValue: 1,
    },
    {
        labelName: "选项2",
        optionValue: 2,
    }
];

const AutocompleteTest = () => {
    /**
     * Autocomplete组件: 自动完成文本输入组件( 完成笔记 )
     *      0. options属性: 数据内容 ( 必写 )
     *      1. getOptionLabel函数: 指定渲染下拉选项内容，必须为字符串类型，否则报错 ( 必写 )
     *      2. value属性: 当前选择选项
     *      3. onChange函数: 改变value函数
     *      4. renderInput函数: 渲染配合的组件
     *          a) 注意: 给配合的组件，参数配置, 必填
     *      5. freeSolo属性: true时，可以输入任何值 ( 默认情况下：Autocomplete只允许输入下拉选项拥有的值 )
     *      6. disabled属性: true时禁用表单
     *      7. open属性: true时打开下拉框，false则关闭下拉框
     *      8. onOpen属性: 打开下拉框逻辑
     *      9. onClose函数: 关闭下拉框逻辑
     */

    const [ value, setValue ] = useState(null);
    const [ open, setOpen ] = useState(false);

    // a) 改变value值，固定逻辑, 用于可控的Autocomplete
    const handleChangeValue = ( event, newValue ) => {
        setValue( newValue );
    };

    return(
        <div>
            <h4>基本的Autocomplete组件</h4>
            <Autocomplete
                id="complete-input-test"
                style={{ width: "270px", margin: "0px auto" }}

                open={open}                                        // open属性: true时打开下拉框，false则关闭下拉框
                onOpen={() => {                                    // onOpen函数: 打开下拉框逻辑
                    setOpen(true);
                  }}
                onClose={() => {                                   // onClose函数: 关闭下拉框逻辑
                    setOpen(false);
                }}

                options={mockData}                                 // options属性: 数据                 ( 必写 )
                getOptionLabel={ (item) => item.labelName }        // getOptionLabel函数: 指定渲染选项   ( 必写 )

                value={ value }                                    // value属性: 当前选择选项
                onChange={ handleChangeValue }                     // onChange函数: 改变value函数
                freeSolo={true}                                    // freeSolo属性: true时，可以输入任何值( 默认情况下：Autocomplete只允许输入下拉选项拥有的值 )
                disabled={false}                                   // disabled属性: true时禁用表单

                renderInput={ ( params ) => {                      // renderInput函数: 渲染配合的组件
                        return (
                            <TextField 
                                {...params}         // 注意: 参数必传( 必写 )       
                                label="标题" 
                                variant="outlined" 
                                size="small"
                            />
                        );
                    } 
                }
            />
            <h4>Autocomplete功能属性解析</h4>
            <AutocompleteMore />

            <h4>Autocomplete使下拉选项有分组 | 自定义下拉选项样式 | 禁用某个选项</h4>
            <AutocompleteGroup />

            <h4>Autocomplete加载样式</h4>
            <AutocompleteLoading />

            <h4>Autocomplete过滤机制</h4>
            <AutocompleteFilter />

        </div>
    );
};

export default AutocompleteTest;
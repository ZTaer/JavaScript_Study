import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import ICON from "@material-ui/icons/DonutLarge";

const mockData = [
    {
        title: "选项0",
        value: 0,
        groupTitle: "分组1",
    },
    {
        title: "选项1",
        value: 1,
        groupTitle: "分组1",
    },
    {
        title: "选项2",
        value: 2,
        groupTitle: "分组1",
    },
    {
        title: "选项3",
        value: 3,
        groupTitle: "分组2",
    },
    {
        title: "选项4",
        value: 4,
        groupTitle: "分组2",
    },
    {
        title: "选项5",
        value: 5,
        groupTitle: "分组2",
    },
    {
       title: "选项6",
        value: 6,
        groupTitle: "分组3",
    },
    {
        title: "选项7",
        value: 7,
        groupTitle: "分组3",
    },
    {
        title: "选项8",
        value: 8,
        groupTitle: "分组3",
    },
    {
        title: "选项9",
        value: 9,
        groupTitle: "分组3",
    },
];

const AutocompleteGroup = () => {

    /**
     * Autocomplete组件: Autocomplete使下拉选项有分组 | 自定义下拉选项样式 | 禁用某个选项 ( 完成笔记 )
     *      0. groupBy属性: 指定渲染分组下拉选项
     *      1. renderOption函数: 自定义下拉选项
     *      2. getOptionDisabled函数: 禁用指定下拉选项
     */

    return(
        <div style={{ width: "270px", margin: "0px auto" }} >
            <Autocomplete 
                options={ mockData }
                getOptionLabel={ (item) => item.title }
                groupBy={ (item) => item.groupTitle }           // groupBy属性: 指定渲染分组下拉选项
                renderOption={(option) => (                     // renderOption函数: 自定义下拉选项
                    <React.Fragment>
                        <span> <ICON /> </span>
                        {option.title}
                    </React.Fragment>
                )}
                getOptionDisabled={(option) => option === mockData[1] || option === mockData[3] }   // getOptionDisabled函数: 禁用指定下拉选项
                renderInput={ (props) => {
                    return(
                        <TextField 
                            {...props}
                            label="测试下拉选项分组"
                            variant="outlined"
                        />
                    );
                } }
            />
        </div>
    );
};

export default AutocompleteGroup;
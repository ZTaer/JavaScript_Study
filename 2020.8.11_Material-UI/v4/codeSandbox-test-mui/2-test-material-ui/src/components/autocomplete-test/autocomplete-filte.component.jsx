import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { matchSorter } from "match-sorter";

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
        title: "选项4 - 测试关键字",
        value: 4,
        groupTitle: "分组2",
    },
    {
        title: "选项5",
        value: "测试关键字",
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

const AutocompleteFilter = () => {

    /**
     * Autocomplete组件: 自定义过滤机制( 完成笔记 )
     *      a) 方法一: 第三方库配合: yarn add match-sorter
     *          0. 参考文档: https://github.com/kentcdodds/match-sorter#readme
     *          1. 主要功能: 高级过滤机制
     *          3. matchSorter函数:
     *              a) 模型: matchSorter( 查询列表，查寻值，{ keys: [ 要求查询列表元素键值 ] } )
     *      b) 方法二: 自定义
     *      c) 核心属性: filterOptions
     */

    // a) 方法一: 第三方库配合: match-sorter
    const handleFilterUseMatchSorter = ( options, { inputValue } ) => {
        const result = matchSorter( options, inputValue, { keys: [ "title", "value" ] } )

        console.log( "options,inputValue", options, inputValue );
        console.log( "matchSorter过滤结果:", result );
        
        return result;
    };

    return(
        <div style={{ width: "270px", margin: "0px auto" }} >
            <h6>配合match-sorter: 过滤机制修改</h6>
            <Autocomplete 
                options={ mockData }
                getOptionLabel={ (item) => item.title }
                groupBy={ (item) => item.groupTitle }           // groupBy属性: 指定渲染分组下拉选项
                filterOptions={ handleFilterUseMatchSorter }
                renderInput={ (props) => {
                    return(
                        <TextField 
                            {...props}
                            label="测试过滤机制"
                            variant="outlined"
                        />
                    );
                } }
            />

            <h6>配合</h6>
        </div>
    );
};

export default AutocompleteFilter;
import React,{ useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

// mock数据
const mockData = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 }
];

const AutocompleteMore = () => {
    /**
     * Autocomplete组件: 功能属性( 完成笔记 )
     *      a) 常用属性
     *          0. autoComplete属性: 自动补全
     *          1. disableListWrap属性: true时，禁止选项内容换行
     *          2. autoHighlight属性：true时，输入内容时，自动高亮下拉框符合条件的选项
     *      b) 选中属性
     *          0. blurOnSelect属性( 与selectOnFocus属性相似 ): 表单成为焦点时，选中表单内的所有内容，方便用户修改, 
     *              a) 促发状态: false 关闭功能 | true 开启功能 | "mouse" 仅限鼠标选中表单时开启功能 | "touch" 仅限触摸时开启功能
     *          1. selectOnFocus属性: 表单成为焦点时，选中表单内的所有内容，方便用户修改
     *      c) 其它属性
     *          1. includeInputInList属性: 输入值只能为下拉选项内容，要么为null( 等待修正 )
     *          2. openOnFocus属性: true时，焦点输入时打开弹窗列表
     *          3. autoSelect属性: true时，自动选择鼠标悬浮的选项上，不用单击选项即可选中
     *      d) 等待解析:
     *          0. disablePortal属性: ( 等待解析 )
     *          1. disableCloseOnSelect属性: true时，单击下拉选项,不关闭下拉菜单, false时则相反 
     *          2. clearOnBlur属性: ( 等待解析 )
     */

    const defaultProps = {
        options: mockData,
        getOptionLabel: (option) => option.title,
    };

    return(
        <div style={{ width: "270px", margin: "0px auto" }} >
            <h6>disableCloseOnSelect属性: true时，单击下拉选项,不关闭下拉菜单, false时则相反</h6>
            <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect        // disableCloseOnSelect属性: true时，单击下拉选项,不关闭下拉菜单, false时则相反
                renderInput={(params) => (
                    <TextField {...params} label="disableCloseOnSelect" margin="normal" />
                )}
            />

            <h6>includeInputInList属性: 输入值只能为下拉选项内容，要么为null( 等待修正 )</h6>
            <Autocomplete
                {...defaultProps}
                id="include-input-in-list"
                includeInputInList          // includeInputInList属性: 输入值只能为下拉选项内容，要么为null( 等待修正 )
                renderInput={(params) => (
                <TextField {...params} label="includeInputInList" margin="normal" />
                )}
            />

            <h6>autoComplete属性: 自动补全</h6>
            <Autocomplete
                {...defaultProps}
                id="auto-complete"
                autoComplete                // autoComplete属性: 自动补全
                includeInputInList
                renderInput={(params) => <TextField {...params} label="autoComplete" margin="normal" />}
            />
            <h6>disableListWrap属性: true时，禁止选项内容换行</h6>
            <Autocomplete
                {...defaultProps}
                id="disable-list-wrap"
                disableListWrap             // disableListWrap属性: true时，禁止选项内容换行
                renderInput={(params) => <TextField {...params} label="disableListWrap" margin="normal" />}
            />

            <h6>openOnFocus属性: true时，焦点输入时打开弹窗列表</h6>
            <Autocomplete
                {...defaultProps}
                id="open-on-focus"
                openOnFocus                 // openOnFocus属性: true时，焦点输入时打开弹窗列表
                renderInput={(params) => <TextField {...params} label="openOnFocus" margin="normal" />}
            />

            <h6>autoHighlight属性：true时，输入内容时，自动高亮下拉框符合条件的选项</h6>
            <Autocomplete
                {...defaultProps}
                id="auto-highlight"
                autoHighlight               // autoHighlight属性：true时，输入内容时，自动高亮下拉框符合条件的选项
                renderInput={(params) => <TextField {...params} label="autoHighlight" margin="normal" />}
            />

            <h6>autoSelect属性: true时，自动选择鼠标悬浮的选项上，不用单击选项即可选中</h6>
            <Autocomplete
                {...defaultProps}
                id="auto-select"
                autoSelect                  // autoSelect属性: true时，自动选择鼠标悬浮的选项上，不用单击选项即可选中
                renderInput={(params) => <TextField {...params} label="autoSelect" margin="normal" />}
            />

            <h6>disablePortal属性: ( 等待解析 )</h6>
            <Autocomplete
                {...defaultProps}
                id="disable-portal"
                disablePortal               // disablePortal属性: ( 等待解析 )
                renderInput={(params) => <TextField {...params} label="disablePortal" margin="normal" />}
            />

            <h6>blurOnSelect属性( 与selectOnFocus属性相似 ): 表单成为焦点时，选中表单内的所有内容，方便用户修改, 促发状态: false 关闭功能 | true 开启功能 | "mouse" 仅限鼠标选中表单时开启功能 | "touch" 仅限触摸时开启功能</h6>
            <Autocomplete
                {...defaultProps}
                id="blur-on-select"
                blurOnSelect               // blurOnSelect属性( 与selectOnFocus属性相似 ): 表单成为焦点时，选中表单内的所有内容，方便用户修改, 促发状态: false 关闭功能 | true 开启功能 | "mouse" 仅限鼠标选中表单时开启功能 | "touch" 仅限触摸时开启功能
                renderInput={(params) => <TextField {...params} label="blurOnSelect" margin="normal" />}
            />

            <h6>clearOnBlur属性: ( 等待解析 )</h6>
            <Autocomplete
                {...defaultProps}
                id="clear-on-blur"
                clearOnBlur                // clearOnBlur属性: ( 等待解析 )
                renderInput={(params) => <TextField {...params} label="clearOnBlur" margin="normal" />}
            />

            <h6>selectOnFocus属性: 表单成为焦点时，选中表单内的所有内容，方便用户修改</h6>
            <Autocomplete
                {...defaultProps}
                id="select-on-focus"
                selectOnFocus               // selectOnFocus属性: 表单成为焦点时，选中表单内的所有内容，方便用户修改
                renderInput={(params) => <TextField {...params} label="selectOnFocus" margin="normal" />}
            />

        </div>
    );
};

export default AutocompleteMore;
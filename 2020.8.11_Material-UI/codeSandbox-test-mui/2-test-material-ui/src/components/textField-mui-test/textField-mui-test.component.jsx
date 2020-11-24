import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldSelect from "./textField-select.component";
import TextFieldAdorn from "./textField-adorn.component";
import TextFieldInput from "./textField-input.component";

const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));

const TextFieldMuiTest = () => {

  const classes = useStyles();

  /**
   * TextField组件: 表单输入框( 完成笔记 )
   *    a) 基本参数
   *      0. id属性: 表单输入框id
   *      1. label属性: 表单label名称       
   *      2. placeholder属性: 表单提示
   *      3. defaultValue属性: 表单默认值
   *      4. InputProps={{       // InputProps属性: 属性直接作用在核心组件中
               readOnly: false,  // readOnly属性: 只读属性
             }}
   *      5. InputLabelProps={{  // InputLabelProps属性: 属性直接作用在表单label上
               shrink: true,     // shrink属性: true时label内容为收缩状样式( 默认不收缩 )
             }}
   *      6. helperText属性: 表单辅助帮助提示
   *    b) 样式参数
   *      0. margin属性: "dense" 紧凑的外边距 | "none" 无外边距 | “normal” 正常的外边距
   *      1. size属性 : "medium" 默认大小 | "small" 小型
   *      2. color属性: 颜色主题
   *    c) 功能参数
   *      0. variant属性: 表单类型切换 "standard"标准型 | "outlined" 边框型 | "filled" 填充型
   *      1. required属性: 必填项属性
   *      2. disabled属性: 禁用属性
   *      3. type属性: "text" 文字类型 | “password” 密码类型 | "number"  数字类型 | "search" 搜索类型( 有删除表单内容按钮 )
   *      4. error属性: true时表单报错样式渲染
   *    d) 多行参数
   *      0. multiline属性: 是否开启多行
   *      1. rowMax属性: 设定显示最大行数
   *      2. rows属性: 设定默认显示行数
   */

  return (
    <div>
      <h4>基本TextField</h4>
      <form
        noValidate={ true }     // noValidate属性: 不效验
        autoComplete="off"      // autoComplete属性: 自动完成输入 
        className={ classes.root }
      >
        <TextField 
          id="standard-base"
          label="Standard类型输入框"
          variant="standard"    // variant属性: 表单类型切换 "standard"标准型 | "outlined" 边框型 | "filled" 填充型
        />
        <TextField 
          id="standard-outlined"
          label="Standard类型输入框"
          variant="outlined" 
        />
        <TextField 
          id="standard-filled"
          label="Standard类型输入框"
          variant="filled" 
        />
      </form>

      <h4>TextField参数详解</h4>
        <form
          noValidate={ true }       // noValidate属性: 不效验
          autoComplete="off"        // autoComplete属性: 自动完成输入 
          className={ classes.root }
        >     
          <TextField 
              required={true}         // required属性: 必填项属性
              disabled={false}        // disabled属性: 禁用属性
              id="text-props"         // id属性: 表单输入框id
              label="表单参数"         // label属性: 表单label名称       
              placeholder="表单提示"   // placeholder属性: 表单提示
              defaultValue="默认值"    // defaultValue属性: 表单默认值
              variant="standard"       // variant属性: 表单类型切换 "standard"标准型 | "outlined" 边框型 | "filled" 填充型
              InputProps={{            // InputProps属性: 属性直接作用在核心组件中
              readOnly: false,         // readOnly属性: 只读属性
              }}
              InputLabelProps={{       // InputLabelProps属性: 属性直接作用在表单label上
                shrink: true,          // shrink属性: true时label内容为收缩状样式( 默认不收缩 )
              }}
              helperText="辅助帮助提示"  // helperText属性: 表单辅助帮助提示
              type="search"             // type属性: "text" 文字类型 | “password” 密码类型 | "number"  数字类型 | "search" 搜索类型( 有删除表单内容按钮 )
              error={true}              // error属性: true时表单报错样式渲染
              margin="dense"            // margin属性: "dense" 紧凑的外边距 | "none" 无外边距 | “normal” 正常的外边距
              size="small"              // size属性 : "medium" 默认大小 | "small" 小型
              color="secondary"         // color属性: 颜色主题
          />
          
          <h4>TextField多行显示</h4>
          <TextField 
            label="多行显示"
            variant="outlined"
            placeholder="最大高度为4行"

            multiline={true}           // multiline属性: 是否开启多行
            rowsMax={5}                // rowMax属性: 设定显示最大行数
            rows={4}                   // rows属性: 设定默认显示行数
          />        
      </form>

      <h4>TextField代替Select下拉选项</h4>
      <TextFieldSelect />

      <h4>TeaxtField装饰( 如单位，ICON, 等... )</h4>
      <TextFieldAdorn />

      <h4>通过Input模仿TextField</h4>
      <TextFieldInput />
    </div>
  );
};

export default TextFieldMuiTest;
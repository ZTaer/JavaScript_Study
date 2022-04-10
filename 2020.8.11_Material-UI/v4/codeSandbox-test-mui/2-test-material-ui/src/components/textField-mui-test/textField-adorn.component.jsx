import React,{ useState } from "react";
import { TextField  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility"

const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TextFieldSelect = () => {

  const classes = useStyles();

  /**
   * TextField组件: TeaxtField装饰( 如单位，ICON, 等... )( 完成笔记 )
   *    a) InputProps属性: 直接作用在核心表单组件
   *      0. startAdornment属性: 开头位置装饰
   *      1. endAdornment属性: 尾部位置装饰
   *    b) fullWidth属性: true时宽度为100%
   */

  /**
   * InputAdornment组件：用于配合TextField组件的, 装饰单位, 或者与ICON配合( 完成笔记 )
   */

  return (
    <div className={ classes.root } >
      <div>
          <TextField 
            label="装饰品" 
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  Kg
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              )
            }}
          />
      </div>
    </div>
  );
};

export default TextFieldSelect;
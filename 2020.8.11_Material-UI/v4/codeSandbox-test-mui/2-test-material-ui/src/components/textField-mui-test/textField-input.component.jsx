import React from "react";
import { FormControl, InputLabel, Input, FormHelperText  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TextFieldInputBase = () => {

  const classes = useStyles();

  return (
    <div className={ classes.root } >
      <h5>Input模仿TextField | 目的: 可用于高度自定义表单组件</h5>
      <FormControl 
        /**
         * Input模仿TextField | 目的: 可用于高度自定义表单组件( 完成笔记 )
         *    a) 注意: InputLabel组件的 htmlFor属性值 === Input组件的 id属性，对应相等才能操控
         */
        error = {true} 
        disabled = {true}
      >
        <InputLabel htmlFor="component-disabled">Name</InputLabel>
        <Input id="component-disabled" value={"xx"} />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
    </div>
  );
};

export default TextFieldInputBase;
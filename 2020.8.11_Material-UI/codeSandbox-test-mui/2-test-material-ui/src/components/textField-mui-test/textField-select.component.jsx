import React,{ useState } from "react";
import { TextField, MenuItem, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));

const TextFieldSelect = () => {

  const classes = useStyles();


  /**
   * TextField组件: 转为下拉选项select组件( 完成笔记 )
   * TextField组件: 放置ICON组件( 完成笔记 )
   *    a) 下拉选项所需属性
   *    b) select属性: 是否开启选项模式，要与MenuItem组件配合
   *    c) value属性: 存储当前选项值
   *    d) onChange属性: 固定逻辑，用于改变value值
   *    e) InputProps={{  // InputProps.startAdornment属性: 放置ICON             
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
        }}
   *    g) MenuItem组件：用于配合TextField组件，的下拉选项
   */

  const [ option, setOption ] = useState("USD");
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    }
  ];

  const handleChangOption = ( event ) => {
    setOption( event.target.value );
  };

  return (
    <div>
      <h4>TextField Select: 多选</h4>
      <form
        noValidate={ true }     
        autoComplete="off"       
        className={ classes.root }
      >
        <TextField 
          id="select-base"
          label="下拉选项"
          variant="outlined"    
          style={{ textAlign: "left" }}

          select={true}                   // select属性: 是否开启选项模式，要与MenuItem组件配合
          value={option}                  // value属性: 存储当前选项值
          onChange={ handleChangOption }  // onChange属性: 固定逻辑，用于改变value值
          InputProps={{                   // InputProps.startAdornment属性: 放置ICON             
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        >
          {                               // 下拉选项: MenuItem配合TextField
            currencies.map( (item,  index) => {
              return(
                <MenuItem key={index} value={item.value} >
                  {item.label}
                </MenuItem>
              );
            } )
          }
        </TextField>
      </form>
    </div>
  );
};

export default TextFieldSelect;
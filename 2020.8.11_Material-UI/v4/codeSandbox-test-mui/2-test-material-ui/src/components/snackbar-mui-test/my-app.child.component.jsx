import React from "react";
import { Button } from "@material-ui/core";
import { useSnackbar } from 'notistack';

/**
 * notistack构建MyApp: 使用useSnackbar调用弹窗( 完成笔记 )
 *    a) useSnackbar函数: 
 *      0. enqueueSnackbar函数: 开启Mui的Snackbar提示框( 核心 )
 *      1. 模型( 开启提示框 ): enqueueSnackbar( "提示信息字符串", { 支持大部分Mui的Snackbar组件的参数 } )
 */

const MyApp = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbar = () => {
    enqueueSnackbar("我是提示信息",{
      variant: "success",
      autoHideDuration: 3000,
      disableWindowBlurListener:true,
      anchorOrigin: {
        horizontal: "left",
        vertical: "bottom",
      }
    });    
  };

  return(
    <React.Fragment>
      <Button variant="contained"  onClick={ handleSnackbar } >
        促发
      </Button>
    </React.Fragment>
  );
};

export default MyApp;
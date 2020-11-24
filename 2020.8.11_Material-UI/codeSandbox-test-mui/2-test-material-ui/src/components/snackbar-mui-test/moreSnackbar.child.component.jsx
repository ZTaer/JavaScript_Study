import React from "react";
import { SnackbarProvider } from 'notistack';
import MyApp from "./my-app.child.component";



/**
 * notistack函数库: 多提示框函数库( 完成笔记 )
 *    a) 安装: yarn add notistack
 *    b) 注意: 对Mui与依赖关系
 *    c) 配置notistack函数库环境( 完成笔记 )
 *        0. 注意: 配置环境有二种方式, 选择其一即可
 *        0. 全局配置: 直接在index.js将SnackbarProvider组件嵌套
 *        1. 局部配置: 代码如下
 *    d) SnackbarProvider组件: 嵌套其内的组件，才能调用弹窗
 *        0. maxSnack属性: 设定最大显示弹窗
 *        1. 如下: 在MyApp嵌套组件中，在配合useSnackbar的enqueueSnackbar函数,调通弹窗
 */

const MoreSnackbar = () => {

  return (
    <SnackbarProvider maxSnack={3} >
      <MyApp />
    </SnackbarProvider>
  );
};

export default MoreSnackbar;
import React from "react";
import { Hidden, Typography } from "@material-ui/core";

const HiddenMuiTest = () => {

  /**
   * Hidden组件: 隐藏辅助组件( 完成笔记 )
   *    a) 范围类型: xs, sm, md, lg, xs
   *    b) 在其之上隐藏: xsUp, smUp, mdUp, lgUp, xsUp
   *    c) 在其之下隐藏: xsDown, smDown, mdDown, lgDown, xsDown 
   *    d) only属性: 仅在指定范围类型显示
   *      0. 例: only={['sm','lg']} - 仅在sm以及lg时显示
   */

  return (
    <div className="">
      <h4> 基本Hidden组件 </h4>
      <Hidden lgUp >
        <Typography> 内容1 </Typography>
      </Hidden>
      <Hidden smDown >
        <Typography> 内容2 </Typography>
      </Hidden>
      <Hidden only={[ 'sm', 'xs' ]} >
        <Typography> 内容3 </Typography>
      </Hidden>
    </div>
  );
};

export default HiddenMuiTest;
import React,{ useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {

  const classes = useStyles();

  /**
   * Popper组件: 隐藏/显示容器组件( 完成笔记 )
   *    a) 显示Popper条件
   *        0. open属性：为true
   *        1. anchorEl属性: 存在dom时
   *        2. 为什么需要anchorEl属性?: 因为要通过dom决定渲染Popper显示的位置 
   *        3. 注意: 如果open为true, 而anchorEl的dom不存在, 则报错
   *    b) 关闭Popper条件
   *        0. open属性: 为false
   */
  const testRef = useRef(null);           // useRef: 方便获取dom
  const [testOpen, setTestOpen] = useState(false)

  // 函数：单纯的切换open的true/false
  const testButtonClick = () => {
    setTestOpen( !testOpen );
  };

  return (
    <div>
      <button 
        ref={testRef}                     // ref: 配合useRef，用于anchorEl帮助Popper确定渲染的位置
        type="button" 
        onClick={testButtonClick} 
      >
        Toggle Popper
      </button>
      <Popper 
        open={ testOpen }                 // open属性: true/false决定是否显示Popper组件内容 
        anchorEl={ testRef.current }      // anchorEl: 通过useRef获取的dom，决定Popper渲染位置
      >
        <div className={classes.paper}>The content of the Popper.</div>
      </Popper>
    </div>
  );
}
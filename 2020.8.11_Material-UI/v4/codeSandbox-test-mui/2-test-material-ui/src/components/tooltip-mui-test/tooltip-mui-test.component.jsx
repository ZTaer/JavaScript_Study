import React, { useState } from "react";
import { Button, Tooltip, Fab, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Apple";

const useStyles = makeStyles({
  limitMaxWidth: {
    maxWidth: "100px"
  },
  tooltopContainer: {
    width: "350px",
    height: "100px"
  }
});

const TooltipMuiTest = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  /**
   * Tooltip组件: 提示框( 完成笔记 )
   *    a) 注意: 在React严格模式下，使用Tooltip组件将报错
	 * 		b) 属性
	 * 			0. 基本属性
	 * 				a) title属性: 不仅可以放置字符串，也可以放置组件，为interactive可交互式配合
	 * 				b) aria-label属性: 放置备注
	 * 				c) placement属性: 操控提示框显示位置
	 * 						0. top
	 * 							a) top-start, top-end
	 * 						1. bottom
	 * 							a) bottom-start, bottom-end
	 * 						2. left
	 * 							a) left-start, left-end
	 * 						3. right
	 * 							a) right-start, right-end
	 * 				d) arrow属性: 是否显示提示框小箭头
	 * 			1. 交互属性
	 * 				a) open属性: 是否显示提示框 ( 核心 ) 
	 * 				b) onClose属性: 操控关闭逻辑
	 * 				c) onOpen属性: 操控打开逻辑
	 * 				d) interactive属性: 交互式核心属性, 作用: 鼠标可移动至提示框，其提示框不会关闭
	 * 					0. 配合: 通常与title属性配合使用
	 * 			2. 禁用属性
	 * 				a) 禁用: 当嵌套在Tooltip组件中的Button按钮被禁用时，Tooltip提示框是不显示的
	 * 					0. 解决: 如果在按钮被禁用情况下，依然显示提示框，需要将禁用目标嵌套在span标签下
	 * 					1. 嵌套阶级: Tooltip ---> span ---> Button
	 * 				b) disableFocusListener属性: 当为焦点时，不显示弹窗
	 * 				c) disableHoverListener属性: 当鼠标悬停时，不显示弹窗
	 * 				d) disableTouchListener	属性: 当长按时，不显示弹窗
	 * 			3. 动画属性
	 * 				a) TransitionComponent属性: 接受MUI自带的动画参数( 动画详情参考: mui文档下搜索"Transitions" )
	 * 				b) TransitionProps={{ timeout: 500 }}: 操控动画时间
	 * 				c) enterDelay属性: 鼠标悬停制定时间后，显示提示框
	 * 				d) leaveDelay属性: 鼠标离开后，关闭提示框
	 * 			4. 样式属性
	 * 				a) classes={{ tooltip: classes.limitMaxWidth }}: 限制宽度的makeStyles写法
   */

  /**
   * 配合onOpen, onClose的逻辑
   */
  const handleOnOpen = () => {
    setOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <div>
		<h4> Tooltip提示: Fab的Icon按钮 </h4>
		<Tooltip
			title="我是提示信息"
			aria-label="tesstIconTip"
			placement="top-start"
			arrow={true}
			open={true}
		>
		<Fab
			/**
			 * Fab组件: 通常用于构建按钮的容器( 完成笔记 )
			 *    a) color属性: 改变颜色
			 *    b) component属性: 改变组件标签类型
			 *    c) disabled属性: 是否禁用
			 *    d) disableFocusRipple属性: 禁用单机水波动画
			 *    e) disableRipple属性: 禁用水波动画
			 *    f) href属性: 跳转链接
			 *    g) size属性: 操控尺寸大小
			 *      0. large: 大
			 *      1. medium: 中
			 *      2. small: 小
			 *    h) variant属性: 改变显示形状
			 *      0. round属性( 默认 ): 圆形
			 *      1. extended属性: 半圆长方形
			 */
			color="primary"
		>
			<DeleteIcon />
		</Fab>
		</Tooltip>

		<h4> Tooltip基本: 基本提示 </h4>
		<Tooltip title="提示信息" arrow>
			<Button variant="contained">提示</Button>
		</Tooltip>


		<h4> Tooltip展示方式: 通过自带的函数逻辑操控提示开关 </h4>
		<Tooltip
			title="提示信息XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
			arrow={true}
			open={open} 											  					// open属性: 决定是否展示tooltip
			onClose={handleOnClose} 											// onClose属性: 操控关闭逻辑
			onOpen={handleOnOpen} 											  // onOpen属性: 操控打开逻辑
			placement="right"
			classes={{ tooltip: classes.limitMaxWidth }} 	// 限制宽度的makeStyles写法
		>
			<Button variant="contained">Tooltip逻辑行位</Button>
		</Tooltip>

		<h4> Tooltip可交互式: 提示框 </h4>
		<Tooltip
			title={				 				  // title属性: 不仅可以放置字符串，也可以放置组件，为interactive可交互式配合
				<div className={classes.tooltopContainer}>
				内容XXXXX
				<Button variant="contained" size="small" color="secondary">
					交互
				</Button>
				</div>
			}
			arrow={true}
			interactive={true} 		 // interactive属性: 交互式核心属性, 作用: 鼠标可移动至提示框，其提示框不会关闭
			placement="bottom-start"
		>
			<Button variant="contained">提示</Button>
		</Tooltip>

		<h4>
			Tooltip禁用: 禁用下显示提示框 ( button被禁用时，在嵌套一个span标签，即可显示Tooltip的内容 )
		</h4>
		<Tooltip title="提示信息" arrow>
			<span>
				<Button disabled variant="contained">
				提示
				</Button>
			</span>
		</Tooltip>
		
		<h4> Tooltip动画属性 </h4>
		<Tooltip 
			title="提示信息" 
			arrow
			TransitionComponent={Zoom}				  // TransitionComponent属性: 接受MUI自带的动画参数( 动画详情参考: mui文档下搜索"Transitions" )
			TransitionProps={{ timeout: 500 }} 	// TransitionProps={{ timeout: 500 }}: 操控动画时间
			enterDelay={1500}										// enterDelay属性: 鼠标悬停制定时间后，显示提示框
			leaveDelay={1000}										// leaveDelay属性: 鼠标离开后，关闭提示框
		>
			<Button variant="contained">
				提示
			</Button>
		</Tooltip>

    </div>
  );
};

export default TooltipMuiTest;

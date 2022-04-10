import React,{ useState } from "react";
import { 
	List, 
	ListSubheader,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemAvatar, 
	ListItemSecondaryAction,
	Avatar,
	Divider,
	Collapse,

	IconButton,
} from "@material-ui/core";
import DraftsIcon from '@material-ui/icons/Drafts'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/Comment';

const ListMuiTest = () => {
	/**
	 * 0. List组件: 多个选项排序方式( 完成笔记 )
	 * 		a) 配合List组件结构:
	 * 			0. ListItem组件: List下的单个选项
	 * 				a) ListItemIcon组件：放置ICON，等一些图标类型，交互组件
	 * 				b) ListItemAvatar组件: 放置头像等...
	 * 					0. Avatar组件: 常与ListItemAvatar配合渲染头像
	 * 				c) ListItemText组件: 放置组件文本
	 * 				d) ListItemSecondaryAction组件: 放置交互类型组件
	 *			1. ListSubheader组件: 备注信息
	 *		b) List组件属性:
	 *			0. component属性: 更换标签类型
	 *			1. aria-labelledby属性: 备注
	 * 			2. subheader属性: 放置开头备注内容，常与ListSubheader组件配合
	 * 			3. disablePadding属性: 减小内边距, 常用于子菜单选项
	 * 		c) ListItem组件属性:
	 * 			0. button属性: ture时ListItem将有button特性
	 * 		d) ListItemText组件属性: 
	 * 			0. primary属性: 选项主要文本内容
	 * 			1. secondary属性: 选项备注文本内容 
	 * 1. Divider组件: 分割线
	 * 2. Collapse组件: 折叠组件 | 用于配合List子选项 
	 *		a) in属性: 决定是否展开
	 *		b) timeout属性: 动画过渡时间调整
	 		c) unmountOnExit属性: 使组件在元素不渲染时，从dom中移除
	 */
	const [ open, setOpen ] = useState(false);

	return(
		<div>
			<h4>基本的List</h4>
			<List 
				style={{ width:"350px", textAlign: "left", backgroundColor: "pink" }} 
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						基本的List类型
					</ListSubheader>
				}
			>
				<ListItem button={true} >
					<ListItemIcon>
					<DraftsIcon />
					</ListItemIcon>
					<ListItemText>
						我是List文本
					</ListItemText>
				</ListItem> 

				<Divider />
				<ListSubheader>带子选项的List</ListSubheader>

				<ListItem button={true} onClick={ () => setOpen(!open) } >
					<ListItemIcon>
						<DraftsIcon />
					</ListItemIcon>
					<ListItemText> 有子选项写法 </ListItemText>
					{
						open ? <ExpandLess /> : <ExpandMore />
					}
				</ListItem> 
				<Collapse 
					in={open} 					// in属性: 决定是否展开
					timeout="auto"				// timeout属性: 动画过渡时间调整
					unmountOnExit   			// unmountOnExit属性: 元素不渲染时，从dom中移除
				>
					<List 
						disablePadding={true} 	// disablePadding属性: 减小内边距
					>
						<ListItem 
							button={true}  
							style={{ paddingLeft: "30px" }}
						>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText>
							我是List子选项
							</ListItemText>
						</ListItem> 
					</List>
				</Collapse>

				<Divider />
				<ListSubheader>带头像以及带交互的List</ListSubheader>

				<ListItem button={true} >
					<ListItemAvatar>
						<Avatar>
							<DraftsIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="头像组件配合List"
						secondary="2020.10.28( 选项备注 )"
					/>
					<ListItemSecondaryAction>
						<IconButton edge="end" aria-label="comments">
							<CommentIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem> 

				<Divider />
			</List>      
		</div>
	);
};

export default ListMuiTest;
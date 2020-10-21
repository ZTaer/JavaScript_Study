import React,{ useState } from 'react';
import { 
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Button,
    IconButton,
} from '@material-ui/core';
import { Home as HomeIcon, Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    drawerXListContainer: {
        width: "250px",
    },
    drawerYListContainer: {
        width: "auto",
    },
});

const  DrawerMuiTest = () => {

    const classes = useStyles();
    const [openState, setOpenState] = useState(false)

    /**
     * React组件下: 双箭头函数,逻辑便捷式调用写法 ( 等待笔记 )
     */
    const handleControlDrawer = ( state ) => () => {
        setOpenState( state );
    };

    /**
     * Drawer组件: ( 等待笔记 )
     *      a) 属性:
     *          0. variant属性: Drawer显示模式
     *              a) temporary参数( 默认 ): 临时状态 - 背景变黑, 只可操控Drawer部分, 操作其它关闭Drawer
     *              b) persistent参数: 持久状态 - 背景不变, 需要手动写入关闭逻辑在Drawer部分中
     *              c) permanent参数: 永久状态 - 始终展示Drawer不可关闭
     *          1. anchor属性: left, right, top, bottom, 操控Drawer的显示位置( 注意: CSS3操控时注意区分Drawer的X方向, Y方向渲染位置 )
     *          2. open属性: 是否线Drawer ( 注意: variant="permanent"无效 )
     *          3. onClose属性函数: 书写关闭逻辑
     *      b) Drawer下的List结构: 
     *          0. 嵌套关系: List --> ListItem --> ListItemText, ListItemIcon 
     *          1. List之间分割: Divider 分割线组件
     *              
     */
    return (
        <div>
            <h4>
                基本的Drawer
            </h4>
            <Button variant="contained" onClick={ handleControlDrawer( true ) } >
                打开Drawer
            </Button>
            <Drawer 
                anchor="left" 
                open={ openState } 
                onClose={ handleControlDrawer(false) } 
                variant="temporary"
            >
                <div className={ classes.drawerXListContainer } >
                    <List>
                        <ListItem>
                            <ListItemText> 关闭按钮部分 </ListItemText>
                            <ListItemIcon onClick={ handleControlDrawer(false) } >
                                <IconButton>
                                    <CloseIcon />
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    </List>

                    <Divider />
                    
                    <List>
                        <ListItem>
                            <ListItemText> 主要菜单内容部分 </ListItemText>
                        </ListItem>

                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Index
                            </ListItemText>
                        </ListItem>

                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Index
                            </ListItemText>
                        </ListItem>
                    </List>

                    <Divider />

                    <List>
                        <ListItem>
                            <ListItemText> 分割线展示效果部分 </ListItemText>
                        </ListItem>

                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Index
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
};

export default DrawerMuiTest;

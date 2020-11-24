import React, { useState } from "react";
import {
    Button,
    Drawer,

    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const DrawerMuiTest = () => {

    /**
     * Drawer组件: 抽屉组件( 暂停笔记 ) 
     *     
     */

    const [ door, setDoor ] = useState( false );

    // a) 打开抽屉
    const handleOpenDrawer = () => {
        setDoor( true );
    };

    // b) 关闭抽屉
    const handleCloseDrawer = () => {
        setDoor( false );
    };

    return(
        <div>
            <h4>基本的Drawer</h4>
            <Button 
                variant="contained"
                color="secondary"
                onClick={ handleOpenDrawer } 
            >
                打开
            </Button>
            <Drawer
                anchor="left"                       // anchor属性: 改变Drawer方向，"left" | "right" | "top" | "bottom"
                open={ door }                       // open属性: true时打开Drawer, false则相反
                onClose={ handleCloseDrawer }       // onClose属性: 关闭Drawer逻辑，固定逻辑, 与open属性配合
            >
                <div style={{ width: "200px" }} >
                    <List>
                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>我是选项1</ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>我是选项2</ListItemText>
                        </ListItem>
                    </List>
                </div>
              
                <Divider />

                <div style={{ width: "200px" }} >
                    <List>
                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>我是选项a</ListItemText>
                        </ListItem>
                    </List>
                </div>

            </Drawer>
        </div>
    );
};

export default DrawerMuiTest;
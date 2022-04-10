import React,{ useState } from 'react';
import { 
    Drawer, 
    Typography,
    List, 
    ListItem, 
    ListItemIcon,
    ListItemText,
    Grid,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/Mail';

/**
 * Drawer: 持久性Drawer | 固定Drawer( 完成笔记 )
 *      a) flex布局: 搭配持久性Drawer核心属性
 *          0. 结构
 *              a) div.container: 容器主要开启flex布局
 *              b) div.leftDrawer:
 *                  0. 不缩放: flexShrink: 0  
 *                  1. 设定与Drawer相等的宽度: width: "240px"             ( 核心 )
 *                      a) 注意: Drawer容器宽度 === Drawer组件宽度        ( 核心 ) 
 *              c) div.rightContent: flexGrow: 1; - 根据当前空余空间缩放  ( 核心 )
 *          1. 目的: 保持，左侧菜单宽度不变，右侧内容容器自适应变化
 *      b) 总体布局: 
 *          0. 依照python嵌套规则阅读: 
 *              div.container
 *                  div.leftDrawer
 *                      Drawer 
 *                  div.rightContent
 *                      web内容
 *      c) Drawer组件必备属性
 *          0. variant属性: "permanent"
 *          1. open属性: 展开Drawer
 *          2. classes.paper: 配置Drawer宽度 ( 核心 )
 *              
 */

const useStyles = makeStyles({
    container: {
        display: "flex",        // flex布局: ( 核心 )
        marginTop: "72px",
    },
    leftDrawer: {
        width: "240px",
        flexShrink: 0,          // flexShrink: 0; - 不缩放 ( 核心 )
    },
    rightContent: {
        flexGrow: 1,            // flexGrow: 1; - 根据当前空余空间缩放 ( 核心 )
    },
    drawerPaperWidth: {         
        width: "240px"
    }
});

const  TestDrawerPermanent = () => {

    const classes = useStyles();

    /**
     * Drawer内容
     */
    const drawer = (
        <div>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={ classes.container } >
            <div className={ classes.leftDrawer } >
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaperWidth,      // paper属性: 用于固定Drawer宽度  
                    }}
                >
                    <div style={{ marginTop: "72px" }} />

                    { drawer }
                </Drawer>
            </div> 
            <div className={ classes.rightContent } >
                <Typography>
                    只是文本内容
                </Typography>
                <Grid container direction="row" >
                    <Grid item  style={{ height:"100px", backgroundColor: "pink", flexShrink: 0, width: "240px", }} >
                        1
                    </Grid>
                    <Grid item  style={{ height:"100px", backgroundColor: "yellow", flexGrow: 1, }} >
                        2
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default TestDrawerPermanent; 

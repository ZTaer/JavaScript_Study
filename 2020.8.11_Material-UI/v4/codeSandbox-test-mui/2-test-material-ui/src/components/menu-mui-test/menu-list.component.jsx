import React,{useState} from "react";

import {
    Button,
    Menu,
    MenuItem,
    Slide,
    ListItemIcon,
    Typography,
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';

const MenuMuiTest = () => {

    /**
     * Menu组件: 折叠菜单组件
     */
    const [anchorEl, setAnchorEl] = useState(null);

    // a) 设定锚点
    const handleSetAnchorEl = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    // b) 关闭菜单
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    /**
     * 与List配合的Menu菜单( 完成笔记 )
     *      a) Menu结构:
     *          0. MenuItem
     *              a) ListItemIcon
     *                  0. ICON
     *              b) Typography
     * Menu菜单布局位置变更( 完成笔记 )
     *      a) TransitionComponent属性: 改变过渡动画
     *      b) getContentAnchorEl属性: 设为 null 避免受到选项的disabled/selected影响布局 ( 布局位置: 非常重要 )
     *      c) anchorOrIGIN 和 transformOrigin 配合改变下拉菜单的布局位置
     *          0. anchorOrIGIN/transformOrigin={{ vertical: "top"|"center"|"bottom", horizontal: "left"|"center"|"right" }}
     */

    return (
        <div className="">
            <Button
                aria-controls="listMenu"
                variant="contained"
                onClick={ handleSetAnchorEl }
            >
                打开Menu+List
            </Button>
            <Menu 
                id="listMenu" 
                open={ Boolean(anchorEl) }
                anchorEl={ anchorEl }
                onClose={ handleCloseMenu }

                TransitionComponent={Slide}     // TransitionComponent属性: 改变过渡动画
                getContentAnchorEl={null}       // getContentAnchorEl属性: 设为 null 避免受到选项的disabled/selected影响布局 ( 布局位置: 非常重要 )
                anchorOrigin={{                 // anchorOrIGIN 和 transformOrigin 配合改变下拉菜单的布局位置
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem disabled onClick={ handleCloseMenu } > 
                    <ListItemIcon>  
                        <InboxIcon />
                    </ListItemIcon>
                    <Typography> 选项1 </Typography>
                </MenuItem>
                <MenuItem onClick={ handleCloseMenu } > 
                    <ListItemIcon>  
                        <InboxIcon />
                    </ListItemIcon>
                    <Typography> 选项2 </Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default MenuMuiTest;
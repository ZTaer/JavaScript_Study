import React,{useState} from "react";

import {
    Menu,
    MenuItem,
} from "@material-ui/core";

const MenuRightClick = () => {
    /**
     * 右键显示的Menu菜单( 核心技能 | 完成笔记 )
     *      a) Menu容器属性:
     *          0. onContextMenu函数: React右键菜单事件 ( React事件核心 | 完成笔记 )
     *              a) event.clientX属性: 获取鼠标x位置
     *              b) event.clientY属性: 获取鼠标y位置
     *      b) Menu属性:
     *          0. anchorReference属性: 辅助anchorPosition为菜单位置决定权
     *          1. anchorPosition属性: 决定菜单位置{ left: 水平方向坐标, top: 垂直方向坐标 }
     *      c) CSS3属性:
     *          0. 目的: 替换相符的鼠标icon
     *          1. cursor: 'context-menu' 更换鼠标样式
     *      c) 简明逻辑: onContextMenu获取鼠标位置 --> onchorPosition决定菜单位置 --> 决定位置后才显示菜单 --> 否则关闭不显示菜单
     */

    const initMousePos = {
        left: null,
        top: null,
    }
    const [ menuPos, setMenuPos ] = useState( initMousePos );

    const handleRightClick = ( event ) => {
        event.preventDefault();
        setMenuPos({
            left: event.clientX -1,    // event.clientX属性: 获取鼠标x位置
            top: event.clientY -1,     // event.clientY属性: 获取鼠标y位置
        });
    };

    const handleCloseMenu = () => {
        setMenuPos( initMousePos );
    };

    return (
        <div 
            className=""
            style={{ cursor: 'context-menu' }}                      // css3属性: cursor: 'context-menu' 更换鼠标样式
            onContextMenu={ handleRightClick }                      // onContextMenu函数: React右键菜单事件 ( 核心 )
        >
            右键菜单,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget. 
            <Menu 
                id="listMenu" 
                keepMounted

                open={ menuPos.top ? true : false }
                onClose={ handleCloseMenu }
                anchorReference="anchorPosition"                    // anchorReference属性: 辅助anchorPosition为菜单位置决定权
                anchorPosition={ menuPos.top ? menuPos : null }     // anchorPosition属性: 决定菜单位置{ left: 水平方向, top: 垂直方向 }
            >
                <MenuItem onClick={ handleCloseMenu } >选项1</MenuItem>
                <MenuItem onClick={ handleCloseMenu } >选项2</MenuItem>
                <MenuItem onClick={ handleCloseMenu } >选项3</MenuItem>
            </Menu>
        </div>
    );
};

export default MenuRightClick;
import React,{useState} from "react";

import {
    Button,
    Menu,
    MenuItem,
    Slide,
    Fade,
} from "@material-ui/core";
import MenuList from "./menu-list.component";
import MenuRightClick from "./menu-right-click.component";

const MenuMuiTest = () => {

    /**
     * Menu组件: 折叠菜单组件
     */
    const [anchorEl, setAnchorEl] = useState(null);
    const [choose, setChoose] = useState(2);
    const mockMenuData = [
        "选项1",
        "选项2",
        "选项3",
        "选项4",
        "选项5",
        "选项6",
    ];

    // a) 设定锚点
    const handleSetAnchorEl = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    // b) 关闭菜单
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    // c) 选项: 选中的选项逻辑
    const handleChoose = ( event, index ) => {
        setChoose( index );
        handleCloseMenu();
    };


    return (
        <div className="">
            <h4>基本的Menu: 折叠菜单组件</h4>
            <Button 
                variant="contained" 
                aria-controls="menu-base"     // aria-controls属性: 操控信息备注
                onClick={ handleSetAnchorEl }
            >
                打开 - { mockMenuData[choose] }
            </Button>
            <Menu
                id="menu-base"
                open={ Boolean( anchorEl ) }  // open属性: 是否显示菜单
                anchorEl={ anchorEl }         // anchorEl属性: 设定锚点位置( 是组件的event.currentTarget )
                onClose={ handleCloseMenu }   // onClose属性: 关闭菜单属性
                keepMounted={false}           // keepMounted属性: true时即使菜单不显示, 也将被保留在dom下，false则相反 
                PaperProps={{                 // PaperProps属性: 属性直接作用Menu下的Paper组件上
                    style: {                  //    a) 通过style属性操控Menu大小
                        maxHeight: 36 * 4.5,
                        width: '15ch',
                    },
                }}
                TransitionComponent={Fade}   // TransitionComponent属性: 改变过渡动画
                elevation={2}                // elevation属性: 操控菜单阴影
            >
                {
                    mockMenuData.map( (item,index) => {
                        return(
                            <MenuItem 
                                key={ index }
                                disabled={ index === 0 }                                    // disabled属性: 是否禁用选项，这里的逻辑是默认禁用选项1
                                selected={ index === choose }                               // selected属性: 选中状态
                                onClick={ ( event ) => handleChoose( event, index ) }       // onClick属性: 逻辑要写好，设定好选中的index以及关闭菜单逻辑
                            >
                                { item }
                            </MenuItem>
                        );
                    } )
                }
            </Menu>

            <h4 className=""> 与List配合的Menu菜单 </h4>
            <MenuList />

            <h4 className=""> 右键显示的Menu菜单( 核心技能 ) </h4>
            <MenuRightClick />
        </div>
    );
};

export default MenuMuiTest;
import React,{ useState } from 'react';

/**
 * 第三方组件
 */
import {  
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Typography,

    Hidden,
} from '@material-ui/core';

import {  
    Search as SearchIcon,
    Home as HomeIcon,
} from '@material-ui/icons';

/**
 * 本地组件
 */
import ChangeThemeButton from '../change-theme-button/change-theme-button.component';

/**
 * css相关
 */
import { useStyles } from './header.mui.styles';

/**
 * 核心组件
 */
const Header = () => {
    const classes = useStyles();
    const [search, setSearch] = useState("")

    const handleSearchValue = (event) => {
        setSearch( event.target.value )
    };

    return (
        <div className={classes.root}>
        <AppBar position="fixed" color="default" >
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <HomeIcon />
                </IconButton>

                <Hidden smDown >
                    <Typography variant="h6" >
                        Material - UI - 小试牛刀 - 宝可梦项目
                    </Typography>
                </Hidden>
                <div style={{marginLeft:"auto"}} ></div>

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                        value={search}
                        onChange={handleSearchValue} 
                        placeholder="搜索名称..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <div className={classes.themeButton} >
                    <ChangeThemeButton />
                </div>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default Header;

import React,{ useState } from 'react';

/**
 * 第三方组件
 */
import {  
    AppBar,
    Toolbar,
    IconButton,
    Typography,

    Hidden,
} from '@material-ui/core';

import {  
    Home as HomeIcon,
} from '@material-ui/icons';

import { withRouter } from 'react-router-dom';

/**
 * 本地组件
 */
import ChangeThemeButton from '../change-theme-button/change-theme-button.component';
import Search from '../search/search.component';

/**
 * css相关
 */
import { useStyles } from './header.mui.styles';

/**
 * 核心组件
 */
const Header = ({ history }) => {
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
                    onClick={ () => history.push("/") }
                >
                    <HomeIcon />
                </IconButton>

                <Hidden smDown >
                    <Typography variant="h6" >
                        Material - UI - 小试牛刀 - 宝可梦项目
                    </Typography>
                </Hidden>
                <div style={{marginLeft:"auto"}} ></div>

                <Search />
          
                <div className={classes.themeButton} >
                    <ChangeThemeButton />
                </div>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default withRouter(Header);

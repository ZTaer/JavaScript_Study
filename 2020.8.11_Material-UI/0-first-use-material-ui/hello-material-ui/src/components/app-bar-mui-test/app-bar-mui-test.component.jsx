import React from "react";

/**
 *  AppBar组件: 导航栏( 完成笔记 ) 
 *      a) postion属性: 位置 
 *          0. 'fixed': 固定位置
 *          1. 'static': 静态位置 
 *  ToolBar组件: 配合导航栏( 等待研究 )
 */         
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    makeStyles,
    InputBase,
    fade,
} from "@material-ui/core";
import {
    Menu,
    Brightness6,
    Search as SearchIcon,
} from "@material-ui/icons";


const useStyle = makeStyles((theme)=>({
    appbarLogoPostion: {
        marginLeft: "auto",
    },

    /**
     * SearchInput: 官方CSS样式( 完成笔记 )
     */
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },

}));

const AppBarMuiTest = props => {
    const { show = 0 } = props;
    const classes = useStyle();

    if(show === 1){
        return (
            <h1>
                AppBar1
            </h1>
        );
    }
    else if ( show === 2 ){
        return (
            <h1>
                AppBar2
            </h1>
        );
    }

    return(
       <AppBar 
        position="static"               // positon属性: 默认为fixed固定导航栏, static
       >
           <Toolbar>
               <IconButton 
                    color="inherit" 
                    aria-label="menu" 
                    edge="start"        // edge属性: 偏移位置'start','end'
                >
                   <Menu size="medium" />
               </IconButton>
               <Typography variant="h6" >
                   Material-UI
               </Typography>

               <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="官方样式SearchInput"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
               
               <Button
                    componet="a"
                    href="/"
                    color="inherit"
                    className={ classes.appbarLogoPostion }
               >
                   <Brightness6 color="inherit" />
               </Button>
           </Toolbar>
       </AppBar> 
    );
};

export default AppBarMuiTest;
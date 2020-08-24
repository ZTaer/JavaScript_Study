import React from "react";
import "./header-mui-test.styles.scss";

/**
 * 第三方库
 */
import { Link } from "react-router-dom";
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import AvatarMuiTest from "../avatar-mui-test/avatar-mui-test.component";

const useStyles = makeStyles({
    appbarLogoPostion: {
        marginLeft: "auto",
    },
    link:{
        textDecoration: "none",   
        fontSize:"0.9rem",
        letterSpacing: "2px",
        color:"#000",
    }
});

const HeaderMuiTest = () => {

    const classes = useStyles();

    return (
        <AppBar color="default"  >
            <Toolbar >
                <Typography variant="h6" >
                    Material-UI
                </Typography>
                <Link className={classes.link} to="/" >
                    <Button color="inherit" >
                        主页
                    </Button> 
                </Link>
                <Link className={classes.link} to="/shop" >
                    <Button color="inherit" >
                        商品
                    </Button> 
                </Link>
                <Link className={classes.link} to="/test" >
                    <Button color="inherit" >
                        实验
                    </Button> 
                </Link>
                <Button className={ classes.appbarLogoPostion } >
                    <AvatarMuiTest/>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderMuiTest;
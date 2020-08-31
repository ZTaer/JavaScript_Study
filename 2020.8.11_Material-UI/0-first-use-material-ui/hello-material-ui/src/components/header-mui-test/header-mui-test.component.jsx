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
});

const HeaderMuiTest = () => {

    const classes = useStyles();

    return (
        <AppBar color="default"  >
            <Toolbar >
                <Typography variant="h6" >
                    Material-UI
                </Typography>

                <Button color="inherit" component={Link} to="/" >
                    主页
                </Button> 

                <Button color="inherit" component={Link} to="/shop" >
                    商品
                </Button> 

                <Button color="inherit" component={Link} to="/test" >
                    实验
                </Button> 
              
                <Button className={ classes.appbarLogoPostion } >
                    <AvatarMuiTest/>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderMuiTest;
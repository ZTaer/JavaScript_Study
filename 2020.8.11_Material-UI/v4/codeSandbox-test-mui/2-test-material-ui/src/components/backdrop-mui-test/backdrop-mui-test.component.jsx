import React,{ useState } from "react";
import { Backdrop, Button, Typography, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme)=>({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    }
}) );

const BackdropMuiTest = () => {

    const [ open, setOpen ] = useState(false);
    const classes = useStyles();

    /**
     * Backdrop组件: 背景暗化( 完成笔记 )
     *      a) 作用: 通常显示一些，弹窗呀，等其他自定义组件，所需
     *      b) open属性: 是否开启背景暗化
     *      c) onClick函数: 操控逻辑，通常用于关闭Backdrop组件
     *      d) invisible函数: true时则背景将为透明色，false时背景则为默认颜色
     *      e) 注意: 背景暗化组件，className中，必须z-Index属性足够大，这样显示才完整
     *          0. z-index可以借助: theme.zIndex.drawer + 1 属性值
     */

    const handleOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
    }

    return(
        <div>
            <h4> Backdrop组件：背景暗化 </h4>
            <Button 
                variant="contained" 
                onClick={ handleOpen }
            >
                打开
            </Button>
            <Backdrop
                open={ open }
                onClick={ handleClose }
                className={ classes.backdrop }
                invisible={false}
            >
                <div>
                    <Typography variant="h1" >
                        WTF ??? BRO !!!
                    </Typography>                
                    <br />
                    <CircularProgress color="inherit" />
                </div>
            </Backdrop>
        </div>
    );
};

export default BackdropMuiTest;
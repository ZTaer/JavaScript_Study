import React from "react";

/**
 * 第三方库
 */
import {
    Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/**
 * 本地组件
 */
import CardMuiTest from "../../components/card-mui-test/card-mui-test.component";
/**
 * makeStyle函数: theme传值( 完成笔记 )
 *      a) 可直接访问theme属性，或者其中的函数
 */
 const useStyles = makeStyles( (theme) => ({
     bgGreen: {
         backgroundColor: "#000",
     },
     forNavMarginTop: {
         marginTop: theme.spacing(9),   // 8 * 9 = 72px
     },
     shopCard: {
         backgroundColor:"pink",
     }
 }));

const ShopPages = () => {
    const classes = useStyles();
    return(
        <div id="shop-page" className={classes.forNavMarginTop} >
            <Grid container >
                <Grid item md={2} />
                <Grid 
                    container
                    item 
                    xs={12} 
                    md={8}
                    direction="row"
                    justify="space-between"
                    alignContent="flex-start" 
                >
                    <Grid 
                        item 
                        xs={12} 
                        md={4}
                    >
                        <CardMuiTest />
                    </Grid>

                </Grid>
                <Grid item  md={2} />
            </Grid>
        </div>
    );
};

export default ShopPages;
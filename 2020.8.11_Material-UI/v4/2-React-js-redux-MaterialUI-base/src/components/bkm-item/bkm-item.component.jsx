import React from 'react';

/**
 * 第三方库
 */
import {  
    Card,
    CardHeader,
    CardMedia,
    CardActionArea,
    CardActions,
    Typography,
    Button,
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

/**
 * Css相关
 */
import { bkmItemUseStyles } from './bkm-item.mui.styles'

const BkmItem = (props) => {

    const { 
        title = "商品标题", 
        itemId = 123, 
        imageUrl = "/images/paella.jpg", 
        linkUrl = "", 
        history 
    } = props;

    const classes = bkmItemUseStyles();

    return (
        <Card className={classes.cardContainer} >
            <CardHeader 
                title={
                    <Typography align="left" variant="h6">
                        {title}
                    </Typography>
                }
                subheader={
                    <Typography align="left" variant="body2">
                        ItemId: {itemId}
                    </Typography>
                }
            />
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={title}
                    onClick={ ()=>history.push(linkUrl) }
                />
            </CardActionArea>
            <CardActions className={classes.actions}  >
                <Button size="small" component={Link} to={linkUrl} variant="contained" color="secondary" >
                    查看详情
                </Button>
            </CardActions>
        </Card>
    )
};

export default withRouter(BkmItem);

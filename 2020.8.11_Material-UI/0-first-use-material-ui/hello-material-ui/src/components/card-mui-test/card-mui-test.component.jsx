import React from 'react';

/**
 * Card组件: 卡片组件方便布局( 完成笔记 )
 *   a) CardHeader组件
 *      0. avatar属性: 放置头像
 *      1. action属性: 放置按钮
 *      2. title属性: 标题内容 - 二种用法
 *          a) title="默认标题"
 *          b) title={ <组件自定义 /> }
 *      3. subheader属性: 简介内容 - 用法同title
 */
import {
   // card组件
   Card,                // card核心 - 容器组件
   CardHeader,          // card头 - 通常放置用户信息/card标题
   CardMedia,           // card媒体 - 通常放置图/视频
   CardContent,         // card内容 - 通常放置card主要内容
   CardActions,         // card尾 - 通常放置一些button功能

   // 配合组件: CardHeader
   Avatar,
   IconButton,

   // 其它组件
   Typography,
   Button,
} from "@material-ui/core";
import {
    Share as ShareIcon,
    ShoppingCart as ShoppingCartIcon,
    FavoriteBorder as FavoriteBorderIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

/**
 * makeStyle
 */
const useStyles = makeStyles({
  // Card
  root: {
    maxWidth: 300,
    margin: "auto",
  },

  // CardHeader
  cardTitle: {
      color:"#000",
  },
  bgRed: {
      backgroundColor:"#000",
  },

  // CardMedia
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 - 作用于图片，真的是独特的写法
  },

  //CardActions
  buyButton: {
      marginRight:"auto",
  },

});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card  className={classes.root}>
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.bgRed} >
                    R
                </Avatar>
            }
            action={
                <IconButton color="secondary" aria-label="settings">
                    <ShareIcon />
                </IconButton>
            }
            title={
                <Typography className={classes.cardTitle} variant="h6">
                    商品标题
                </Typography>
            }
            subheader="$37.99"
        />
        <CardMedia
            className={classes.media}
            image="/images/paella.jpg"
            title="澳洲食材"
        />
        <CardContent>
            <Typography color="secondary" variant="body2" color="textSecondary" component="p">
                这里放置产品简介, 精选自澳大利亚，超级阿斯顿萨达萨达萨达萨达萨达萨达撒旦.
            </Typography>
        </CardContent>
        <CardActions disableSpacing >
            <Button size="small" color="secondary" variant="outlined" className={classes.buyButton} >
                立即购买
            </Button>
            <IconButton color="secondary" >
                <ShoppingCartIcon />
            </IconButton>
            <IconButton color="secondary" >
                <FavoriteBorderIcon />
            </IconButton>
        </CardActions>
    </Card>
  );
}

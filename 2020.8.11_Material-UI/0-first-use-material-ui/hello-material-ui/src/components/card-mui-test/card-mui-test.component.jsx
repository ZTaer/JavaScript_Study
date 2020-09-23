import React,{ useState } from 'react';

/**
 * Card组件: 卡片组件方便布局( 完成笔记 )
 *   a) CardHeader组件
 *      0. avatar属性: 放置头像
 *      1. action属性: 放置按钮
 *      2. title属性: 标题内容 - 二种用法
 *          a) title="默认标题"
 *          b) title={ <组件自定义 /> }
 *      3. subheader属性: 简介内容 - 用法同title
 *   b) CardMedia组件: card媒体 - 通常放置图/视频
 *      0. image属性: 图片路径
        1. title属性: 图标标题
 *   c) CardContent组件: card内容 - 通常放置card主要内容
 *   d) CardActions组件: card尾 - 通常放置一些button功能
 *   e) CardActionArea组件：可以让其中的子标签，有“涟漪”的动画效果
 */
import {
   // card组件
   Card,                // card核心 - 容器组件
   CardHeader,          // card头 - 通常放置用户信息/card标题
   CardMedia,           // card媒体 - 通常放置图/视频
   CardContent,         // card内容 - 通常放置card主要内容
   CardActions,         // card尾 - 通常放置一些button功能
   CardActionArea,      // CardActionArea组件：可以让其中的子标签，有“涟漪”的动画效果

   // 配合组件: CardHeader
   Avatar,
   IconButton,

   /**
    * Collapse组件: 收缩组件( 完成笔记 )
    *   0. 组件属性
    *       a) in属性: 隐藏/显示组件
    *       b) timeout属性: 自定义动画时间
    *       c) unmountOnExit属性: 当属性in为true时显示组件,否则隐藏组件
    *       d) collapsedHeight属性: 组件默认高度设定,当unmountOnExit为false时起作用
    *       e) disableStrictModeCompat属性: 为了兼容性
    *       f) children属性( 完成研究 )
    *       g) component属性: 你懂的
    *   1. 配合展示:
    *       a) 动画交互按钮 --> 如下方的,旋转收缩按钮示例
    */
   Collapse,

   // 其它组件
   Typography,
   Button,
   Paper,
} from "@material-ui/core";
import {
    Share as ShareIcon,
    ShoppingCart as ShoppingCartIcon,
    FavoriteBorder as FavoriteBorderIcon,
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

/**
 * clsx库: 为配合makeStyles, 根据条件决定className( 完成笔记 )
 *      a) 安装: yarn add clsx
 *      b) 用法:
 *          0. 参考链接: https://material-ui.com/getting-started/faq/#whats-the-clsx-dependency-for
 *          1. className={ clsx( 
 *                  xxx,              // 默认留下
 *                  { 
 *                      [yyy]: true,  // true则留下, [xxx]保证索引变量不出错
 *                      [sss]: false  // false则抛弃
 *                  } 
 *             ) }
 *       c) 下方有实列演示
 */
import clsx from "clsx";
import classnames from 'classnames'

/**
 * makeStyle
 */
const useStyles = makeStyles((theme)=>({
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

  // 旋转图标动画: 用于隐藏/显示按钮 - 旋转动画效果( 完成笔记 )
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function SimpleCard() {
  const theme = useTheme();
  const classes = useStyles(theme);
  
  /**
   * 用于隐藏/显示Collpes组件逻辑
   */
  const [exptend, setExptend] = useState(false);
  const handleExptend = () => {
      setExptend( !exptend );
  };

  console.log('clsx :>> ', clsx(
        classes.expand,
        {
            [classes.expandOpen]: exptend
        }
  ));

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
            <CardActionArea>
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
            </CardActionArea>
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
            <IconButton
                /**
                 * 动画交互按钮: 旋转收缩按钮 - 参考示例( 完成笔记 ) 
                 */
                className={                                     // clsx写法: 根据条件决定css样式 
                    clsx(                                       // 此css目的: 让按钮有动画交互效果
                        classes.expand,
                        {
                            [classes.expandOpen]: exptend
                        }
                    )
                }
                // className={                                  // classnames写法: 根据条件决定css样式
                //     classnames(
                //         classes.expand,
                //         exptend ? classes.expandOpen : ""
                //     )
                // }
                onClick={handleExptend}         
                aria-expanded={exptend}         // aria-xxx={xxx}只是标识当前状态
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse 
            in={exptend}                        // in属性: 隐藏/显示组件
            timeout="auto"                      // timeout属性: 自定义动画时间
            unmountOnExit               // unmountOnExit属性: 当属性in为true时显示组件,否则隐藏组件
            // collapsedHeight="107px"             // collapsedHeight属性: 组件默认高度设定,当unmountOnExit为false时起作用
            // component="div"                     
            // disableStrictModeCompat             // disableStrictModeCompat属性: 为了兼容性
            // children                         ( 完成研究 )
        >
            <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
            </Typography>
            <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
            </CardContent>
      </Collapse>
    </Card>
  );
}

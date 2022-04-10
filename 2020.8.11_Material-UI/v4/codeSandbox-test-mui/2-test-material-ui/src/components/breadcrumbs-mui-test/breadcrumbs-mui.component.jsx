import React from "react";
import { Link, Breadcrumbs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import BreadcrumbsCustom from "./breadcrumbs.custom.component";

const useStyles = makeStyles({
  linkStyles: {
    display: "flex",
    color: "inherit",
  },
  iconSize: {
    width:"20px",
    height:"20px",
  }
});

const BreadcurmbsMui = () => {

  const classes = useStyles();

  /**
   * 逻辑区
   */
  const handleLink = ( event ) => {
    event.preventDefault();
    console.log( "event" );
  };

  return(
    <div>
      <h4> 基本的面包屑导航 </h4>
      <Breadcrumbs
        /**
         * 面包屑导航( 完成笔记 )
         *    a) 属性:
         *      0. separator属性: 自定义分隔符
         *      1. aria-label属性: 备注
         *      2. maxItems属性: 最大显示选项数，超出则折叠选项数
         *      3. itemsAfterCollapse属性: 超出最大选项时，在省略号前，显示选项数
         *      4. itemsBeforeCollapse属性: 超出最大选项时，在省略号后, 显示选项数
         *      5. classes属性: 定制化所需
         *      6. component属性: 改变标签
         */
        separator="/"             // separator属性: 自定义分隔符
        aria-label="breadcrumbs"  // aria-label属性: 备注
        maxItems={2}              // maxItems属性: 最大显示选项数，超出则折叠选项数
        itemsAfterCollapse={1}
        itemsBeforeCollapse={1}
      >
        <Link href="/" onClick={ handleLink } className={ classes.linkStyles } > 
          <HomeIcon className={ classes.iconSize } />
          选项一 
        </Link>
        <Link href="/" onClick={ handleLink } className={ classes.linkStyles } > 
          <WhatshotIcon />
          选项一 
        </Link>
        <Link href="/" onClick={ handleLink } className={ classes.linkStyles } > 
          <GrainIcon />
          选项一 
        </Link>
      </Breadcrumbs>

      <h4> 定制化面包屑导航 </h4>
      <BreadcrumbsCustom />
    </div>
  );
};

export default BreadcurmbsMui;
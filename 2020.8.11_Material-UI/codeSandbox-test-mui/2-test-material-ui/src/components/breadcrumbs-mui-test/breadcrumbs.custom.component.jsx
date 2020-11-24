import React from "react";
import { Breadcrumbs, Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

/**
 * withStyles定制化: Chip组件( 完成笔记 )
 *    a) 注意: 初次定制化组件, 具体可根据Chip API文档，改写对应的css3 class属性
 *    b) 模型: withStyles( (theme)=>({ 对应css3书写,注意对照文档API }) )();
 *    c) css3属性: 修改组件样式时，根据文档API，对照属性进行编辑
 */
const StyledChip = withStyles( (theme) => ({
  root: {
    height: theme.spacing(4),
    "&:hover, &focus": {
      backgroundColor: theme.palette.grey[400]
    },
    '&:active': {
      boxShadow: theme.shadows[1],
    },
  },
}))( Chip );

const BreadcrumbsCustom = () => {

  const handleHref = ( event ) => {
    event.preventDefault();
  };

  return(
    <div className="">
      <Breadcrumbs>
        <StyledChip 
          label="选项一" 
          icon={ <HomeIcon /> }
          component="a"
          href="/"
          onClick={ handleHref }
        />
        <StyledChip 
          label="选项二" 
          icon={ <WhatshotIcon /> }
          component="a"
          href="/"
          onClick={ handleHref }
        />
        <StyledChip 
          label="选项三" 
          icon={ <GrainIcon /> }
          component="a"
          href="/"
          onClick={ handleHref }
        />
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsCustom;
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionControl from "./accordion-control.component";

/**
 * classes定制化组件: classes定制化组件( 完成笔记 )
 */

// a) classes定制化组件 - useStyles: 一个useStyles对应一个数组样式，不得不这样写，否则无法启作用
const useStyles_AcSm = makeStyles(( theme )=>({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    expandIcon: {
      color: theme.palette.primary.contrastText,
    }
}));

const useStyles_AcDt = makeStyles( (theme)=>({ 
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },

}) );

const AccordionMui = () => {

  // b) classes定制化组件 - classes: 登记, 方便调用
  const classes = { 
    useStyles_AcSm: useStyles_AcSm(),
    useStyles_AcDt: useStyles_AcDt(), 
  }

  /**
   * Accordion组件: 手风琴组件( 完成笔记 )
   *    a) Accordion组件: 手风琴容器组件
   *      0. 属性: 
   *        a) disabled属性: 是否禁用手风琴组件
   *        b) expanded属性: true时展开手风琴组件
   *        c) onChange函数: 一般用于可控手风琴逻辑，逻辑固定
   *        d) defaultExpanded属性: ture时默认展开手风琴组件
   *        e) classes属性: 定制化组件
   *        f) 更多属性: https://material-ui.com/zh/api/accordion/
   *    b) AccordionSummary组件: 手风琴标题组件
   *      0. 属性:
   *        a) expandIcon属性: 引入icon
   *        b) IconButtonProps属性: props传入icon
   *        c) aria-controls属性: 备注使用
   *        d) classes属性: 定制化使用
   *    c) AccordionDetails组件: 手风琴内容组件
   *      0. 属性:
   *        a) classes属性: 定制化使用
   */

  return (
    <div>
      <h4> 基本的手风琴 </h4>
      <Accordion 
        disabled={ false } 
        expanded={ true } 
      >
        <AccordionSummary 
         // c) classes定制化组件 - classes使用
          classes={{ 
            root: classes.useStyles_AcSm.root, 
            expandIcon: classes.useStyles_AcSm.expandIcon 
          }} 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header1"
        >
          <Typography> 手风琴标签-1 </Typography>
        </AccordionSummary>

        <AccordionDetails classes={{ root: classes.useStyles_AcDt.root }} >
          <Typography>
          手风琴内容
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary 
          classes={{ root: classes.useStyles_AcSm.root, expandIcon: classes.useStyles_AcSm.expandIcon }} 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header2"
        >
          <Typography> 手风琴标签-2 </Typography>
        </AccordionSummary>

        <AccordionDetails classes={{ root: classes.useStyles_AcDt.root }} >
          <Typography>
          手风琴内容
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary 
          classes={{ root: classes.useStyles_AcSm.root, expandIcon: classes.useStyles_AcSm.expandIcon }} 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header3"
        >
          <Typography> 手风琴标签-3 </Typography>
        </AccordionSummary>

        <AccordionDetails classes={{ root: classes.useStyles_AcDt.root }} >
          <Typography>
          手风琴内容
          </Typography>
        </AccordionDetails>
      </Accordion>

      <h4> 可控手风琴 </h4>
      <AccordionControl />

      <h4> 可选手风琴( 完成笔记 ) </h4>
      <Accordion>
        <AccordionSummary 
          classes={{ root: classes.useStyles_AcSm.root, expandIcon: classes.useStyles_AcSm.expandIcon }} 
          expandIcon={<ExpandMoreIcon />}
        >
          <FormControlLabel
            aria-label="Acknowledge"
            control={<Checkbox />}
            label="可选操控手风琴：只是对FormControlLabel+Checkbox的灵活运用"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
          />
        </AccordionSummary>

        <AccordionDetails classes={{ root: classes.useStyles_AcDt.root }} >
          <Typography>
          手风琴内容
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionMui;
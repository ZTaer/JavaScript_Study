import React,{ useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const AccordionControl = () => {

  const classes = { 
    useStyles_AcSm: useStyles_AcSm(),
    useStyles_AcDt: useStyles_AcDt(), 
  }

  /**
   * 逻辑区
   */

  /**
   * Accordion组件：可控的手风琴( 完成笔记 )
   *    a) 核心: 
   *       0. expanded属性: true时展开手风琴组件
   *       1. onChange函数; 改变状态，用固定逻辑
   *    b) 其实可控就是围绕着这二个核心, 书写的逻辑
   */
  const [ choose, setChoose ] = useState(null);
  const handleChangeChoose = ( event, props ) => {
    setChoose( props === choose ? null : props );
  };

  return (
    <div>
      <Accordion 
        disabled={false} 
        expanded={ choose === "panel2a-header1" ? true : false } 
        onChange={ ( event ) => handleChangeChoose( event, "panel2a-header1") }
      >
        <AccordionSummary 
          classes={{ root: classes.useStyles_AcSm.root, expandIcon: classes.useStyles_AcSm.expandIcon }} 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header1"
        >
          <Typography> 手风琴标签-1 </Typography>
        </AccordionSummary>

        <AccordionDetails classes={{ root: classes.useStyles_AcDt.root }} >
          <Typography>
          手风琴内容
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={ choose === "panel2a-header2" ? true : false } 
        onChange={ ( event ) => handleChangeChoose( event, "panel2a-header2") }     
      >
        <AccordionSummary 
          classes={{ root: classes.useStyles_AcSm.root, expandIcon: classes.useStyles_AcSm.expandIcon }} 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header2"
        >
          <Typography> 手风琴标签-2 </Typography>
        </AccordionSummary>

        <AccordionDetails classes={{ root: classes.useStyles_AcDt.root }} >
          <Typography>
          手风琴内容
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={ choose === "panel2a-header3" ? true : false } 
        onChange={ ( event ) => handleChangeChoose( event, "panel2a-header3") }     
      >
        <AccordionSummary 
          classes={{ root: classes.useStyles_AcSm.root, expandIcon: classes.useStyles_AcSm.expandIcon }} 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header3"
        >
          <Typography> 手风琴标签-3 </Typography>
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

export default AccordionControl;
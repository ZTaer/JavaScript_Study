import React from 'react';

/**
 * 第三方库
 */
import clsx from 'clsx';


import {  
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
} from '@material-ui/core';
import {  
    Delete as DeleteIcon,
    FilterList as FilterListIcon ,
} from '@material-ui/icons';
import {  
    makeStyles,
    lighten,
} from '@material-ui/core/styles';

/**
 * makeStyles
 */
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    /**
     * 追踪
     *    a) numSelected: 为selected的总长度，也就是全部选中的数量
     *    b) 下方，根据numSelected来做渲染逻辑
    */
    return (
        <Toolbar
            /**
             * Toolbar组件: 能跟随主题变化的"工具栏"组件 | 当前为辅助Table组件的勾选渲染( 完成笔记 )
             *      a) variant属性: 间距操控, "regular" 稍大间距| "dense" 紧密间距 
             */
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
            variant="regular"   
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    Table组件: 勾选练习测试
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip
                    title="Delete"
                >
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                <IconButton aria-label="filter list">
                    <FilterListIcon />
                </IconButton>
                </Tooltip>
            )}
        </Toolbar> 
    );
};

export default EnhancedTableToolbar;

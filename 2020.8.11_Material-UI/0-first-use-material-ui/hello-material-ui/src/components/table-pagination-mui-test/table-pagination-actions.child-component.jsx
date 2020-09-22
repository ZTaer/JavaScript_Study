import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { 
  IconButton,
} from '@material-ui/core';

import { 
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft as KeyboardArrowLeft,
  KeyboardArrowRight as KeyboardArrowRight,
  LastPage as LastPageIcon,
} from '@material-ui/icons';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

/**
 * 构建: 配合ActionsComponent属性的换页组件( 完成笔记 )
 * 
 */
//   a) 自定义化: 保证换页按钮的自定义化
//   b) 注意: 自定义换页组件要完善逻辑
//   c) 自动获取的props数据
//      0. onChangePage: PropTypes.func.isRequired,
//      1. count: PropTypes.number.isRequired,
//      2. page: PropTypes.number.isRequired,
//      3. rowsPerPage: PropTypes.number.isRequired,

const TablePaginationActions = (props) => {
  console.log('数据追踪TableAction :>> ', props);

  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>

      <IconButton 
        onClick={handleBackButtonClick} 
        disabled={page === 0} 
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>

      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};


/**
 * propType函数: 效验数据类型, 模仿Ts( 完成笔记 )
 *    a) 引入( React默认自带 - 无需安装 ): import PropTypes from 'prop-types';
 *    b) 作用: 模仿ts效验数据类型
 */

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default TablePaginationActions;

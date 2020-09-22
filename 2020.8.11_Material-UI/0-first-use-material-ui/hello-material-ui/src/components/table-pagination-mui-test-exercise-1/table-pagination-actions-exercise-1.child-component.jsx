import React from 'react';

/**
 * 6. 构建: TablePagination的ActionsComponent( 完成笔记 )
 *    a) 用于TablePagination组件的ActionsComponent属性
 */
import {  
    IconButton,
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft as KeyboardArrowLeft,
  KeyboardArrowRight as KeyboardArrowRight,
  LastPage as LastPageIcon,
} from '@material-ui/icons';

/**
 * makeStyles
 */
const useStyles = makeStyles((theme) => ({
    tableActionComponentContainer: {
        flexShrink: 0,
        marginLeft: theme.spacing(4),
    },
}));



const TablePaginationActionsExercise1 = (props) => {

    const theme = useTheme();
    const classes = useStyles( theme );

    /**
     * 参数类
     *  a) props: 配合逻辑计算的页面信息
     *  b) lastPageNumber: 计算最后一页
     */
    const { count, page, rowsPerPage, onChangePage } = props;
    const lastPageNumber = Math.max( 0, Math.ceil(count / rowsPerPage) - 1 ); 

    /**
     * 逻辑类
     */
    // a) 返回第一页
    const handleChangeTopPage = ( event ) => {
        onChangePage( event, 0 );
    };

    // b) 往前一页
    const handleChangeLeftPage = ( event ) => {
        onChangePage( event, page - 1 );  
    };

    // c) 往后一页
    const handleChangeRightPage = ( event ) => {
        onChangePage( event, page + 1 );
    };

    // d) 返回最后一页
    const handleChangeBottomPage = ( event ) => {
        onChangePage( event, lastPageNumber );
    }

    return (
        <div className={classes.tableActionComponentContainer} >
            <IconButton 
                aria-label="翻页到顶部" 
                onClick={handleChangeTopPage} 
                disabled={ page <= 0 ? true : false }
            >
              {
                /**
                 * 7. 关于为什么使用theme.direction: 为了配合Material-UI的镜像方向属性功能( 完成笔记 )
                 */
                theme.direction !== "rtl" ? <FirstPageIcon /> : <LastPageIcon />
              }
            </IconButton>
            
            <IconButton 
                aria-label="往前翻页" 
                onClick={handleChangeLeftPage}
                disabled={ page <= 0 ? true : false }
            >
              {
                theme.direction !== "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />
              }
            </IconButton>
            
            <IconButton 
                aria-label="往后翻页" 
                onClick={handleChangeRightPage}
                disabled={ page >= lastPageNumber ? true : false }
            >
              {
                theme.direction !== "rtl" ?  <KeyboardArrowRight /> : <KeyboardArrowLeft />
              }
            </IconButton>
            
            <IconButton 
                aria-label="翻页到底部" 
                onClick={handleChangeBottomPage}
                disabled={ page >= lastPageNumber ? true : false }
            >
              {
                theme.direction !== "rtl" ?  <LastPageIcon /> : <FirstPageIcon /> 
              }
            </IconButton>
        </div>
    )
}

export default TablePaginationActionsExercise1;
